import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowTaskComponent } from './show-task/show-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewTaskComponent,ShowTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sub-EM-data-transfer';
}
