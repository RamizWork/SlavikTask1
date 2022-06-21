import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GetDataService} from "../shared/services/get-data.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter<void>();

  form: FormGroup | any;

  constructor(private getDataService: GetDataService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      completed: new FormControl('true'),
    })
  }

  submit() {
    this.getDataService.addNewCard(this.form.value.title, JSON.parse(this.form.value.completed));
    this.close.emit();
  }

}
