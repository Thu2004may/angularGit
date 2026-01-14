import { Component } from '@angular/core';
import { TaskListService } from '../../service/task-list-service';
import { FormsModule } from '@angular/forms';
import { title } from 'node:process';
import { Task } from '../../models/Task.model';


@Component({

  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList {

  tasksList: Task[] = []
  task: Task = {
    id: "",
    title: "",
    description: "",
    status: false

  };
  constructor(private taskListSrv: TaskListService) {

    debugger;
  }

  ngOnInit(): void {
    this.getAlltasks()

  }

  getAlltasks() {
    debugger;
    this.taskListSrv.getAllTasks().subscribe((res: Task[]) => {
      this.tasksList = res;
    })

  }

  saveTask(obj: Task) {
     
      this.taskListSrv.saveTask(obj).subscribe({
        next: (savedTask) => {
          alert("sucessfully save task");
        }
      });

    this.task = {
      id:"",
      title:"",
      description:"",
      status:false
    }

    this.getAlltasks()
  }

  edit(obj: Task) {
    this.task = {
      id: obj.id,
      title: obj.title,
      description: obj.description,
      status: obj.status
    }
  }


  complete(tsk: Task) {
    console.log("task in ts :", tsk)
    this.taskListSrv.complete(tsk).subscribe({
      next: (completedTsk) => {
        alert("congratulation, you have done")
      }
    })
  }

  delete(id: string){
    this.taskListSrv.deleteTsk(id).subscribe({
      next: (deletedTsk) => {
        alert("successfully deleted")
      }
    });
  }
}

// export interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: boolean;
// }

