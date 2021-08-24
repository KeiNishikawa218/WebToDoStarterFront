import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './task/update/update.component';
import { AppComponent } from './app.component';

const routes: Routes = [
      {path: '', component: AppComponent},
      {path: 'task/update', component: UpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot([
    //   {path: '', component: AppComponent},
    //   {path: 'task/update', component: UpdateComponent}
    // ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
