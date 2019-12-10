import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasusuarioPage } from './peliculasusuario.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasusuarioPageRoutingModule {}
