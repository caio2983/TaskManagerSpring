import { Component,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  taskName: String = '';
  tasks! : any;


  constructor(private TodoService: Todo){

    const newTask = {"name":"task-teste-angular","completed":false,"id":"c917b641-d433-4c61-98d3-f84a53ea1b0c"}

    this.TodoService.getTasks().subscribe((response)=>{
    this.tasks = response; 
    console.log("TESTE",response)
    })

    this.TodoService.DeleteTask(newTask).subscribe(response => {
      console.log('Tarefa deletada com sucesso:', response); 
    })

  }

  addTask() {
      this.TodoService.AddTask({"name": `${this.taskName}`,"completed":false}).subscribe(response => {
      this.showTasks(); 
       console.log('Tarefa adicionada com sucesso:', response);
     }, error => {
       console.error('Erro ao adicionar a tarefa:', error);
     });
  }

  showTasks() {
    this.TodoService.getTasks().subscribe((response)=>{
      this.tasks = response; 
      console.log("SHOW ALL TASKS",response)
      })
  }

  deleteTask(task: any) {
    this.TodoService.DeleteTask(task).subscribe(response => {
      console.log('Tarefa deletada com sucesso:', response);
      this.showTasks(); 
    }, error => {
      console.error('Erro ao deletar a tarefa:', error);
    });
  }
}
