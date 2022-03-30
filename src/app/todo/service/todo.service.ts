import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {}

  // Logger les todos
  logger(): void {
    console.log(this.todos);
  }
  // ajouter Todo
  add(todo: Todo): void {
    this.todos.push(todo);
  }
  // ajouter Todo
  delete(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  //récupérer les todos
  getTodos(): Todo[] {
    return this.todos;
  }
}
