import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpadminPage } from './cpadmin.page';

const routes: Routes = [
  {
    path: '',
    component: CpadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpadminPageRoutingModule {}
