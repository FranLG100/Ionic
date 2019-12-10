import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritoDetailsPage } from './favorito-details.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritoDetailsPageRoutingModule {}
