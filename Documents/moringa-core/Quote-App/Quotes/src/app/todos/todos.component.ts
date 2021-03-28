import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../service/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  this.todos=this.todoService.getTodos();

  }

}
