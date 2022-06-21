import {Component, OnInit, Output} from '@angular/core';
import {GetDataService} from "../shared/services/get-data.service";
import {Observable} from "rxjs";
import {TodoInterface} from "../shared/interfaces/todo.interface";
import {CardStatusInterface} from "../shared/interfaces/card-status.interface";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  loadTodoData$: Observable<TodoInterface[]> | undefined;
  getTodoData$: Observable<TodoInterface[]> | undefined;
  modal: boolean = false;

  constructor(private getDataService: GetDataService) {
  }

  ngOnInit(): void {
    this.loadTodoData$ = this.getDataService.loadData();
    this.getTodoData$ = this.getDataService.getTodoList();
  }

  deleteCard(event: number) {
    this.getDataService.deleteCard(event);
  }

  changeStatus(event: CardStatusInterface) {
    this.getDataService.changeStatus(event);
  }

  closeModalWindow() {
    this.modal = false;
  }

  openModal(isOpenModal: boolean) {
    this.modal = isOpenModal;
  }
}
