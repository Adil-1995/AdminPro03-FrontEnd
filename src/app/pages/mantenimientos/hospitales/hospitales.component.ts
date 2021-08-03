import { Hospital } from './../../../models/hospital.model';
import { HospitalService } from './../../../services/hospital.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [],
})
export class HospitalesComponent implements OnInit,OnDestroy {
  public hospitales: Hospital[] = [];
  public cargando: boolean = true;

  public imgSubs: Subscription;

  constructor(private hospitalService: HospitalService,
              private modalImagenService: ModalImagenService,
              private busquedasService: BusquedasService,) {}
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarHospitales();
    this.imgSubs=this.modalImagenService.nuevaImagen
    .pipe(delay(100))
    .subscribe((img) => {
      this.cargarHospitales();
    });
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return this.cargarHospitales();
    }
    this.busquedasService.buscar('hospitales', termino).subscribe((resp) => {
      this.hospitales = resp;
    });
  }


  cargarHospitales() {
    this.cargando = true;
    this.hospitalService.cargarHospitales().subscribe((hospitales) => {
      this.cargando = false;
      this.hospitales = hospitales;
    });
  }

  guardarCambios(hospital: Hospital) {
    this.hospitalService
      .actualizarHospitales(hospital._id, hospital.nombre)
      .subscribe((resp) => {
        Swal.fire('Actualizado', hospital.nombre, 'success');
      });
  }
  eliminarCambios(hospital: Hospital) {
    this.hospitalService.borrarHospitales(hospital._id).subscribe((resp) => {
      this.cargarHospitales();
      Swal.fire('Borrado', hospital.nombre, 'success');
    });
  }

  async abrirSweetAlert() {
    const { value='' } = await Swal.fire<string>({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      input: 'text',
      inputPlaceholder: 'nombre del hospital',
      showCancelButton: true,
    });

    console.log(value);
    if (value.trim().length > 0) {
      this.hospitalService.crearHospitales(value).subscribe((resp: any) => {
        //  this.cargarHospitales();
        this.hospitales.push(resp.hospital);
      });
    }
  }

  abrirModal(hospital: Hospital){
    this.modalImagenService.abrirModal('hospitales', hospital._id, hospital.img);
  }
}
