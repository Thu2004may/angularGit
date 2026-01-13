import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobList {
  apiURL: string = "http://localhost:3000/tasks"
  constructor(private http: HttpClient){}
  taskList: any[] = [];

  getAllTasks(){
    this.http.get<any[]>(this.apiURL).subscribe(res => this.taskList = res);
    return this.http.get<any[]>(this.apiURL)
  }
  
}
