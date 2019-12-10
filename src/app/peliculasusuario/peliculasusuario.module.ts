import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasusuarioPageRoutingModule } from './peliculasusuario-routing.module';

import { PeliculasusuarioPage } from './peliculasusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasusuarioPageRoutingModule
  ],
  declarations: [PeliculasusuarioPage]
})
export class PeliculasusuarioPageModule {}
