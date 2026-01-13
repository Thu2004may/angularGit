import { Component } from '@angular/core';
import { TaskListService } from '../../service/task-list-service';
import { FormsModule } from '@angular/forms';

@Component({
 
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList {

  tasksList: Task[] = []
  constructor(private taskListSrv: TaskListService){
    
    debugger;
  }

  ngOnInit(): void{
    this.getAlltasks()
    console.log("lenght :", this.tasksList.length)
    
  }
  
  getAlltasks(){
    debugger;
    this.taskListSrv.getAllTasks().subscribe((res:Task[]) =>{
      this.tasksList = res;
    })
    
  }
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

