import { Hospital } from './../../models/hospital.model';
import { Medico } from './../../models/medicos.model';
import { Usuario } from './../../models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {

  public usuarios: Usuario[]=[];
  public medicos: Medico[]=[];
  public hospitales: Hospital[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private busquedasService: BusquedasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ termino }) => {
      this.busquedaGlobal(termino);
    });
  }

  busquedaGlobal(termino: string){
    this.busquedasService.busquedaGlobal(termino).subscribe((resp: any) =>{
      this.usuarios   = resp.usuarios;
      this.medicos   = resp.medicos;
      this.hospitales = resp.hospitales;

    })
  }

  abrirMedico(medico: Medico){

  }
}
