import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../Service/task.service';
import { PromiseApiService } from '../Service/promise-api.service';
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
  apiService = inject(PromiseApiService)

  receivedApi :{idToken:string,email:string,refreshToken:string,expiresIn:string,localId:string}= {idToken:"",email:"",refreshToken:"",expiresIn:"",localId:""}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.createTask.subscribe((val:string)=>{
      this.task.push(val)
    })
    
  }

  user:string = ""
  async signup():Promise<void>{
    try {
      this.receivedApi = await this.apiService.register("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5IVyxdcWepnw2-eUs0-XR_Rd-a8J11qM","abc2@gmail.com","12345678",true)

      // console.log("lol",fff);
      this.user = this.receivedApi.email
    } catch (error) {
      console.log("errror from show-task component ",error);
    }
  }

  
}
