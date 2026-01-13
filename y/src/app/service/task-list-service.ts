import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  apiURL:string = "http://localhost:3000/tasks"
  constructor(private http: HttpClient){}
  taskLists: any[] = []

  getAllTasks(){
    this.http.get<any[]>(this.apiURL).subscribe(res => this.taskLists = res);
    return this.http.get<any[]>(this.apiURL)
  }
}
