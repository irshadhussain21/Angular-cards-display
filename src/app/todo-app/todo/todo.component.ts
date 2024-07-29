import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoForm!:FormGroup
  todos: string[] = [];
  ngOnInit(){
    this.todoForm = new FormGroup({
      todo: new FormControl('',[Validators.required,])
    })
  }

  
  onSubmit(){
    if (this.todoForm.valid) {
      this.todos.push(this.todoForm.value.todo);
      this.todoForm.reset(); // Optionally reset the form after submission
  } 

}

deleteTodo(index: number) {
  this.todos.splice(index, 1);
}

}
