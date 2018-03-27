import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [];

  constructor(private service: NoteService) {
  }

  ngOnInit() {
    this.service.getNotes()
      .subscribe(response => {
        this.notes = response.json();
        console.log(this.notes)
      });
  }

  receiveNewNote($note) {
    this.notes.splice(0, 0, $note);
  }
}
