import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  constructor(private TodoService: Todo){

    this.TodoService.getTasks().subscribe((response)=>{
      
    console.log("TESTE",response)
    })

  }
}
