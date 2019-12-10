import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaDetailsPage } from './pelicula-details.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculaDetailsPageRoutingModule {}
