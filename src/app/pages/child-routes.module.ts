import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

//Matenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { AdminGuard } from './../guards/admin.guard';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [

  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'busquedas' }},
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
            //Matenimientos
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Matenimiento de Hospitales' }},
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Matenimiento de Médicos ' }},
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Matenimiento de Médicos ' }},

            // Rutas de ADMIN
            { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
