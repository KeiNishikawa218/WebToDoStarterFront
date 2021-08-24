import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './task/update/update.component';
import { TopPageComponent } from './task/top-page/top-page.component';
import { DeleteComponent } from './task/delete/delete.component';

const routes: Routes = [
      {path: '', component: TopPageComponent},
      {path: 'update/:id', component: UpdateComponent },
      {path: 'delete/:id', component: DeleteComponent}
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
