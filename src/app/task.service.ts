import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Task } from "./task"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}/api/all`);
  }

  public createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.apiServerUrl}/api/insert`, task);
  }

  // public deleteTask({ id }: { id: number }): Observable<any>{
  //   console.log(id);
  //   return this.http.delete(`${this.apiServerUrl}/api/delete/${id}`);
  // }
}
