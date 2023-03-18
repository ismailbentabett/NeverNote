import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/Types/Note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent  implements OnInit {
@Input() note!: any;
  constructor() { }

  ngOnInit() {
  }

}
