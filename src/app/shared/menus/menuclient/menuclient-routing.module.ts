import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuclientPage } from './menuclient.page';

const routes: Routes = [
  {
    path: '',
    component: MenuclientPage,
    children : [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuclientPageRoutingModule {}
