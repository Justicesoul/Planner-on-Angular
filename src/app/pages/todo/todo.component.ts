import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('fade', [
      transition(' :enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(1000, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(' :leave', [
        animate(1000, style({ opacity: 0, transform: 'translateY(20px)' }))
      ]),
    ])
  ]
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [];
  todoTitle = "";
  completedTasks = false

  constructor() {

  }

  ngOnInit(): void {
    this.todos = [{
      title: "To think today",
      completed: false,
      edit: false,
    }, {
      title: "To pray today",
      completed: false,
      edit: false
    },]
  };

  addTask(): void {
    if (this.todoTitle.trim().length !== 0) {
      this.todos.push({ title: this.todoTitle, completed: false, edit: false })
      this.todoTitle = ""
    } else {
      alert("You should add something")
    }
  }

  removeTask = (index: number) => {
    const removeTasks = this.todos.filter((_, i) => {
      return i !== index;
    });
    this.todos = removeTasks;
  };

  editTask = (index: number) => {
    let editTasks = [...this.todos];
    editTasks[index].edit = !editTasks[index].edit;
    this.todos = editTasks
  };

  setDoneTask = (index: number) => {
    let doneTasks = [...this.todos];
    doneTasks[index].completed = !doneTasks[index].completed;
    this.todos = doneTasks
  };

  removeAll = () => {
    this.todos = []
  }

  toggleCompletedTasks = () => {
    this.completedTasks = !this.completedTasks
  }

  filteredTodos = (): ToDo[] => {
    if (this.completedTasks) {

      return this.todos.filter(item => !item.completed)
    }
    return this.todos
  }

}
