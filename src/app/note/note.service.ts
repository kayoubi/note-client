import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {
  private url = 'http://localhost:9090/notes'

  getNotes() {
    return this.http.get(this.url);
  }

  createNote(note) {
    return this.http.post(this.url, note);
  }

  constructor(private http: Http) {
   }
}
