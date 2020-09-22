import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ map} from 'rxjs/operators';
import { Todo } from '../todo.model';
import { TodoService } from '../todo-sevice';
import { Router } from '@angular/router';




@Component({
  selector: 'app-todo',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoServcie: TodoService,private router : Router) { }

  ngOnInit() {
    this.refreshTodos();
  }
  todos:Todo[]=[
    new Todo(1,"Backend Java Spring Webservcies",true),
    new Todo(2,"Frontend Angular",false),
    new Todo(3,"Full Stack Application",false),
    new Todo(4,"Full Stack Application2",false)
  ]

  refreshTodos(){
    this.todoServcie.getAllTodos().subscribe(respone=>
      {
        console.log(respone);
        this.todos=respone;
        console.log(this.todos)
      })
  }

  updateTodo(id:number){
    this.router.navigate(['todos',id]);
  }
  deleteTodo(id:number)
  {
    this.todoServcie.deleteTodo(id).subscribe();
    this.refreshTodos();
    this.router.navigate(['todos'])
  }

  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }

}