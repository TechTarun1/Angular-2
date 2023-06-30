import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent implements OnInit {
  todoData: any
  modalOpen: boolean = false;
  editData: any
  editTitle: string = ''
  editDesc: string = ''

  constructor(private api: TodoServiceService) { }

  ngOnInit() {
    this.getTodoData();
  }

  getTodoData = () => {
    this.api.getTodo().subscribe((response: any) => {
      this.todoData = response.todo;
    })
  }

  createTodo = (data: any) => {
    this.api.createTodo(data.value).subscribe((response: any) => {
      if (response.status == 'Ok') {
        this.getTodoData();
      }
    })
    data.reset()
  }

  editTodo = (editTitle: string, editDesc: string) => {
    this.editData.title = editTitle;
    this.editData.description = editDesc;
    this.api.editTodo(this.editData).subscribe((response: any) => {
      if (response.status == 'Ok') {
        this.getTodoData();
      }
      this.modalOpen = false;
    })
  }

  deleteTodo = (id: string) => {
    this.api.deleteTodo(id).subscribe((response: any) => {
      if (response.status == 'Ok') {
        this.getTodoData();
      }
    })
  }

  openModal(data: any) {
    this.modalOpen = true;
    this.editData = data;
    this.editTitle = data.title;
    this.editDesc = data.description;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
