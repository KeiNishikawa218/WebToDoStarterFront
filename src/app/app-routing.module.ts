import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './task/update/update.component';
import { TopPageComponent } from './task/top-page/top-page.component';

const routes: Routes = [
      {path: '', component: TopPageComponent},
      {path: 'update', component: UpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
