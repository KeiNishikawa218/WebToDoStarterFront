import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {
  public todoTableIndex: string[] = ['id', 'title', 'detail', 'deadline'];
  public tasks: Task[];
  
  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute) {
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

  public createTask(task: NgForm) {
    this.taskService.createTask(task.value).subscribe(
      (response: Task) => {
        console.log(response);
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

    public deleteTask(id: NgForm){
    this.taskService.deleteTask(id.value.taskId).subscribe(
      (response: void) => {
        console.log(response);
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
