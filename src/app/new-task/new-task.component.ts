import { Component, inject } from '@angular/core';
import { TaskService } from '../Service/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask:string = ""
  taskService = inject(TaskService)

  onClick(){
    this.taskService.onCreateTask(this.newTask)
    this.newTask=""
  }
}
