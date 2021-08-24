import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './task/update/update.component';
import { TopPageComponent } from './task/top-page/top-page.component';
import { DeleteComponent } from './task/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    TopPageComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
