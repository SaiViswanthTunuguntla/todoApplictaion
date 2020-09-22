import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
    providedIn: 'root'
  })
export class TodoService
{
   
    constructor(private http: HttpClient){}

    getAllTodos()
    {
        return this.http.get<Todo[]>(`http://localhost:8080/todo/`);
    }

    getTodoById(id:number)
    {
        return this.http.get<Todo>(`http://localhost:8080/todo/${id}`)
    }

    updateTodo(id,todo:Todo)
    {
        return this.http.put<Todo>(`http://localhost:8080/todo/${id}`,todo)
    }

    createTodo(todo:Todo)
    {
        return this.http.post<Todo>(`http://localhost:8080/todo`,todo)
    }

    deleteTodo(id:number)
    {
        return this.http.delete(`http://localhost:8080/todo/${id}`)
    }

}