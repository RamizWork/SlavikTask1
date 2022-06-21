import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {TodoInterface} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {

  @Input() todos: TodoInterface[] | undefined;
  @Input() changeStatus: boolean | undefined;
  completedTasksSize: number = 0;
  falseTasksSize: number = 0;
  @Output() modal = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getCompletedTasksSize(arr: TodoInterface[] | undefined): number {
    return arr ? arr.filter(value => value.completed).length : 0;
  }

  getFalseTasksSize(arr: TodoInterface[] | undefined): number {
    return arr ? arr.filter(value => !value.completed).length : 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.completedTasksSize = this.getCompletedTasksSize(changes.todos.currentValue);
    this.falseTasksSize = this.getFalseTasksSize(changes.todos.currentValue);
  }

  openModal() {
    this.modal.emit(true);
  }

}
