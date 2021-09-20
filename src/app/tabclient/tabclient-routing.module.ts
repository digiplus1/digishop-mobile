import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabclientPage } from './tabclient.page';

const routes: Routes = [
  {
    path: '',
    component: TabclientPage,
    children:[
      {
        path: 'client',
        loadChildren: () => import('../client/client.module').then( m => m.ClientPageModule)
      },
      {
        path: 'menuclient',
        loadChildren: () => import('../client/menuclient/menuclient.module').then( m => m.MenuclientPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabclientPageRoutingModule {}
