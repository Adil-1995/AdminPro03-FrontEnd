import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { ModelImageComponent } from './model-image/model-image.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    ModelImageComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    ModelImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
