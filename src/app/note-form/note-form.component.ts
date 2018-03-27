import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from '../note';
import {NoteService} from "../note/note.service";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  note = new Note();

  constructor(private service: NoteService) { }

  ngOnInit() {
  }

  @Output() newNoteEvent = new EventEmitter<Note>();

  onSubmit(noteForm) {
    this.service.createNote(this.note)
      .subscribe(response => {
        console.log(response.json());
        this.newNoteEvent.emit(response.json());
        noteForm.reset();
      });
  }

}
