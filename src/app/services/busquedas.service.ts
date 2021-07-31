import { Usuario } from './../models/usuario.model';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers: {
        'x-token': this.token
      }
    }
}

private transformarUsuarios(resultados: any[]): Usuario[]{

  return resultados.map(
    user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid));


}

buscar(tipo: 'usuarios'|'medicos'|'hospitales',
        termino: string){

  const url = `${base_url}/todo/coleccion/${tipo}/${termino}`
    return this.http.get<any[]>(url,this.headers)
              .pipe(
               map((resp: any) => {
                 switch (tipo) {
                   case 'usuarios':
                      return this.transformarUsuarios(resp.resultados);
                     break;

                   default:
                     break;
                 }
               }));
}

eliminar(usuario: Usuario){
  console.log(usuario);

}

}
