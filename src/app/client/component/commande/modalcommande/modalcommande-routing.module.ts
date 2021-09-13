import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcommandePage } from './modalcommande.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcommandePageRoutingModule {}
