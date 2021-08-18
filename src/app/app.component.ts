import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { __asyncDelegator } from 'tslib';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebToDoStarterFront';
  public todoTableIndex: string[] = ['id', 'title', 'detail', 'deadline'];
  public tasks: Task[];
  
  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
