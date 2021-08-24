import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Task } from "./task/task"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}/api/all`);
  }

  public getTaskById(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiServerUrl}/api/task/${id}`);
  }

  public createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.apiServerUrl}/api/insert`, task);
  }

  public updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiServerUrl}/api/update/${task.id}`, task);
  }
}