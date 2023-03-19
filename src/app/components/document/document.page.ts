import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {
  @Input() control!: FormControl;
  @Input() updatenote!: any;
  @Input() title!: string;
  constructor(private NoteService: NoteService) {}

  ngOnInit() {
    console.log(this.updatenote);
    if (this.updatenote) {
      this.control = new FormControl(this.updatenote.content);
      this.title = this.updatenote.title;
    } else {
      this.title = '';
      this.control = this.control ?? new FormControl();
    }
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  };
  onDataChange = () => {
    this.NoteService.formData({
      title: this.title,
      content: this.control.value,
    });
  };
}
