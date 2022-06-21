import {HttpClient} from "@angular/common/http";
import {TodoInterface} from "../interfaces/todo.interface";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {CardStatusInterface} from "../interfaces/card-status.interface";

@Injectable()
export class GetDataService {

  private todoList$ = new BehaviorSubject<TodoInterface[]>([]);

  constructor(public http: HttpClient) {
  }

  loadData(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .pipe(
        tap(value => this.setTodoList(value))
      );
  }

  setTodoList(allData: TodoInterface[]): void {
    this.todoList$.next(allData);
  }

  getTodoList(): BehaviorSubject<TodoInterface[]> {
    return this.todoList$;
  }

  deleteCard(id: number) {
    const arrayTodoList = this.todoList$.getValue();
    const newTodoList = arrayTodoList.filter((el) => {
      return el.id != id
    });
    this.setTodoList(newTodoList);
  }

  changeStatus(cardStatus: CardStatusInterface) {
    const todoList = this.todoList$.getValue().map((value) => {
      if (value.id === cardStatus.id) {
        return {...value, ...cardStatus}
      }
      return value;
    });
    this.setTodoList(todoList);
  }

  addNewCard(title: string, completed: boolean) {
    const arrayTodolist = this.todoList$.getValue();
    // arrayTodolist.push({
    //   id : arrayTodolist.length + 1,
    //   title: title,
    //   completed: completed,
    // });
    const newArray = [{
      id : arrayTodolist.length + 1,
      title: title,
      completed: completed,
    }, ...arrayTodolist];
    // const newArrayTodoList = arrayTodolist.map(value => {
    //   if (value.id == undefined) {
    //     return {id : arrayTodolist.length, ...value};
    //   } return value;
    // });

    console.log(newArray);
    this.setTodoList(newArray);
  }


}
