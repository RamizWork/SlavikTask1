import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoInterface} from "../../shared/interfaces/todo.interface";
import {CardStatusInterface} from "../../shared/interfaces/card-status.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: TodoInterface | undefined;
  @Output() deleteTodo$ = new EventEmitter<number>();
  @Output() change$ = new EventEmitter<CardStatusInterface>();
  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  deleteTodo() {
    this.deleteTodo$.emit(this.card?.id);
  }

  changeStatus(event: any) {
    const cardStatus: CardStatusInterface = {
      id: this.card?.id,
      completed: event.checked
    };
    console.log("Event", event)
    this.change$.emit(cardStatus);
  }
}
