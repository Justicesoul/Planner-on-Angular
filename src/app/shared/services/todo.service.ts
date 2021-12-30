import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ToDo[] = [{
    title: "To think today",
    completed: false,
    edit: false,
  }, {
    title: "To pray today",
    completed: false,
    edit: false
  },]

  getTodos(): ToDo[] {
    return this.todos;
  }

}
