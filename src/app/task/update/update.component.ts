import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public taskDetail: any;
  id?: string;
  existedTask?: [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getTask(this.id);
  }
  
  public getTask(id: string): void {
    this.taskService.getTaskById(Number(id)).subscribe(
      (response: string) => {
        this.taskDetail = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public updateTask(task: NgForm) {
    this.taskService.updateTask(task.value).subscribe(
      (response: Task) => {
        console.log(response);
        this.router.navigateByUrl("");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
