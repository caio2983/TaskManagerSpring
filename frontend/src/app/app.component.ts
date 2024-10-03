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

    const newTask = {"name":"task-teste-angular","completed":false,"id":"c917b641-d433-4c61-98d3-f84a53ea1b0c"}

    this.TodoService.getTasks().subscribe((response)=>{
      
    console.log("TESTE",response)
    })

    // this.TodoService.AddTask(newTask).subscribe(response => {
    //   console.log('Tarefa adicionada com sucesso:', response);
    // }, error => {
    //   console.error('Erro ao adicionar a tarefa:', error);
    // });

    this.TodoService.DeleteTask(newTask).subscribe(response => {
      console.log('Tarefa deletada com sucesso:', response); 
    })

  }
}
