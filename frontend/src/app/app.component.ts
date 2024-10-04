import { Component,NgModule,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  taskName: String = '';
  tasks! : any[];
  isEditing : boolean = false;


  constructor(private TodoService: Todo){

    this.TodoService.getTasks().subscribe((response)=>{
    
    this.tasks = this.tasks.map(task => ({ ...task, isEditing: false }));
    console.log("TESTE",response)
    })

   
  }

  ngOnInit() {
    this.showTasks(); 
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

  editTask(task: any) {
    task.isEditing = !task.isEditing;
  }

  confirmEditTask(task:any) {
     this.TodoService.EditTask(task).subscribe(response => {
       console.log('Tarefa editada com sucesso:', response);
       task.isEditing = !task.isEditing;
     }, error => {
       console.error('Erro ao editar a tarefa:', error);
     });
  }
}
