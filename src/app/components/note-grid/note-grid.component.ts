import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.scss'],
})
export class NoteGridComponent implements OnInit {
  constructor(private auth: AuthService, private note: NoteService) {}
  data$!: Observable<any>;
  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    let currentUser = this.auth.getCurrentUser();
    let uid = currentUser?.uid;
    this.note.getNotes(uid as string).subscribe((data) => {
      console.log(data);
      this.data$ = data as any;
    }
    );
  }
  someFunction() {
console.log('some function')  }
}
