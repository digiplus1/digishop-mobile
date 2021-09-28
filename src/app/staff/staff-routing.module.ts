import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPage } from './staff.page';

const routes: Routes = [
  {
    path: '',
    component: StaffPage
  },
  {
    path: 'menustaff',
    loadChildren: () => import('./menustaff/menustaff.module').then( m => m.MenustaffPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffPageRoutingModule {}
