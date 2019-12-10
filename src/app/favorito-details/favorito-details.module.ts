import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritoDetailsPageRoutingModule } from './favorito-details-routing.module';

import { FavoritoDetailsPage } from './favorito-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritoDetailsPageRoutingModule
  ],
  declarations: [FavoritoDetailsPage]
})
export class FavoritoDetailsPageModule {}
