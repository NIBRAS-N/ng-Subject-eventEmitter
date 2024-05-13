import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../Service/task.service';
@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  task:string[]=["task1","task2","task3"];
  taskService = inject(TaskService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.createTask.subscribe((val:string)=>{
      this.task.push(val)
    })
  }

}
