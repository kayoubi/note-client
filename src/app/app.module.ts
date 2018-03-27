import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteService } from './note/note.service';
import { NoteFormComponent } from './note-form/note-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
