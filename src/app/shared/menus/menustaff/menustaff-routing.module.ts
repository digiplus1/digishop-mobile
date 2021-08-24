import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenustaffPage } from './menustaff.page';

const routes: Routes = [
  {
    path: '',
    component: MenustaffPage,
    children : [
      {
        path: 'staff',
        loadChildren: () => import('../../../staff/staff.module').then( m => m.StaffPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenustaffPageRoutingModule {}
