import { FileUploadService } from './file-upload.service';
import { environment } from './../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModel: boolean = true;
  public tipo:'usuarios'|'medicos'|'hospitales';
  public id: string;
  public img: string;

  public nuevaImagen: EventEmitter<string>= new EventEmitter<string>()

  get ocultarModal(){
    return this._ocultarModel;
  }

  constructor() { }

  abrirModal(tipo: 'usuarios'|'medicos'|'hospitales',
            id: string,
            img: string ='no-image'){
    this._ocultarModel = false;
    this.tipo = tipo;
    this.id = id;
    // this.img= img;
    //http://localhost:3000/api/upload/usuarios/6e4e67bd-d23c-4c6c-bb8c-2ca0291ef0b8.jpg
    if (img.includes('https')) {
      this.img = img;
    }else {
      this.img = `${base_url}/upload/${tipo}/${img}`;
    }

  }

  cerrarModal(){

    this._ocultarModel = true;

  }


}
