import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // createTask : EventEmitter<string> = new EventEmitter<string>();
  createTask:Subject<string> = new Subject()

  onCreateTask(value:string){
    // this.createTask.emit(value)
    this.createTask.next(value)
  }
  constructor() { }
}
