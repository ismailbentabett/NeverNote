import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
import { AuthService } from 'src/app/services/auth.service';
import { Note } from 'src/app/Types/Note';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  @Input() type!: string;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/**
 *
 */
constructor(
    private NoteService : NoteService,
    private auth : AuthService
) {

}
  @ViewChild(IonModal)
  modal!: IonModal;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    let data = this.NoteService.getFormData()
    let currentUser = this.auth.getCurrentUser()
    let uid = currentUser?.uid
    let note :Note = {
      id : '',
      userId : uid,
      title : 'test title',
      content : data,
      createdAt : new Date(),
      updatedAt : new Date()
    }
this.NoteService.create(note)
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
