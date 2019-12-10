import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpadminPageRoutingModule } from './cpadmin-routing.module';

import { CpadminPage } from './cpadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpadminPageRoutingModule
  ],
  declarations: [CpadminPage]
})
export class CpadminPageModule {}
