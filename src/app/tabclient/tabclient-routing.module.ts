import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabclientPage } from './tabclient.page';
import {AcceuilComponent} from "../client/component/acceuil/acceuil.component";
import {FavoriteComponent} from "../client/component/favorite/favorite.component";

const routes: Routes = [
  {
    path: '',
    component: TabclientPage,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabclientPageRoutingModule {}
