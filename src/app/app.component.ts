import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoInterface} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoData: TodoInterface[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this.http.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .subscribe(response => {
        this.todoData = response;
        console.log(this.todoData);
      })
  }
}
