import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardComponent} from './cards/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TaskListComponent} from './task-list/task-list.component';
import {GetDataService} from "./shared/services/get-data.service";
import {CardsComponent} from './cards/cards.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddCardComponent} from './add-card/add-card.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ModalComponent} from './modal/modal.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TaskListComponent,
    CardsComponent,
    AddCardComponent,
    ModalComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        FormsModule
    ],
  providers: [GetDataService, CardsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
