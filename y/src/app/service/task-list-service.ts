import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  apiURL:string = "http://localhost:3000/tasks"
  constructor(private http: HttpClient){}
  taskList: any[] = []

  getAllTasks(){
    this.http.get<any[]>(this.apiURL).subscribe(res => this.taskList = res);
    return this.http.get<any[]>(this.apiURL)
  }

  saveTask(obj: Task){
    if(obj.id===""){
      obj.id = (this.taskList.length + 1).toString();
      return this.http.post(this.apiURL,obj)
    }
    else{
      return this.http.put<Task>(`${this.apiURL}/${obj.id}`,obj);
    }
    
  }

  deleteTsk(id: string){
    return this.http.delete(`${this.apiURL}/${id}`)
  }

  complete(tsk: Task): Observable<Task>{
    
    const completedTsk = {
      ...tsk,
      status: true,
    }

    return this.http.put<Task>(`${this.apiURL}/${tsk.id}`,completedTsk

    )
  }
}
