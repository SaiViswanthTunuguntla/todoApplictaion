import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo-sevice';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number=-1;
  todo:Todo;
  constructor( private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false);
   // console.log(this.id)
    if(this.id!=-1)
    {
    this.todoService.getTodoById(this.id).subscribe(respone=>
      {
        console.log(respone);
        this.todo=respone;
      }

    )
    }

   
  }

  saveTodo()
  {
    if(this.id == -1) { 
      this.todoService.createTodo( this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      console.log(this.todo)
      this.todoService.updateTodo( this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }

  }


    






  }
