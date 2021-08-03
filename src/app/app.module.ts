import { NopagefoundComponent } from './services/nopagefound/nopagefound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
