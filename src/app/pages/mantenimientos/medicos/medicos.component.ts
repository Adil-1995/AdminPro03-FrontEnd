import  Swal from 'sweetalert2';
import { BusquedasService } from './../../../services/busquedas.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ModalImagenService } from './../../../services/modal-imagen.service';
import { MedicoService } from './../../../services/medico.service';
import { Medico } from './../../../models/medicos.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [],
})
export class MedicosComponent implements OnInit, OnDestroy {
  public medicos: Medico[] = [];
  public cargando: boolean = true;

  public imgSubs: Subscription;

  constructor(
    private medicosService: MedicoService,
    private modalImagenService: ModalImagenService,
    private busquedasService: BusquedasService
  ) {}
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarMedicos();
    this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe((img) => {
        this.cargarMedicos();
      });
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return this.cargarMedicos();
    }
    this.busquedasService.buscar('medicos', termino).subscribe((resp) => {
      this.medicos = resp;
    });
  }

  cargarMedicos() {
    this.cargando = true;
    this.medicosService.cargarMedicos().subscribe((medicos) => {
      this.cargando = false;
      this.medicos = medicos;
    });
  }

  abrirModal(medico: Medico) {
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }
  borrarMedico(medico: Medico) {
    //   if (medico.uid === this.medicosService.uid) {
    //     return Swal.fire('Error', 'No puede borrar a si mismo ', 'error');
    // }
    // this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
    Swal.fire({
      title: 'Boorar médico?',
      text: `Esta a punto de borrar a ${medico.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicosService.borrarMedico(medico._id).subscribe((resp) => {
          this.cargarMedicos();
          Swal.fire(
            'usuario borrado',
            `${medico.nombre} fue eliminado correctamente`,
            'success'
          );
        });
      }
    });
  }
}
