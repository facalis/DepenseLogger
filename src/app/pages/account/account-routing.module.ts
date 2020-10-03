import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { accountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: accountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class accountPageRoutingModule {}
