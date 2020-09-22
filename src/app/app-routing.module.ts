import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todoList/todoList.component';


const routes: Routes = [

  {path:'todos',component: TodoListComponent},
  {path:'todos/:id',component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
