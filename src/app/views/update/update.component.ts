import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
import { AuthService } from 'src/app/services/auth.service';
import { Note } from 'src/app/Types/Note';
@Component({
  selector: 'app-update-view',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @Input() type!: string;
  @Input() note!: any;
  @Input() id!: any;
  ngOnInit() {}
  /**
   *
   */
  constructor(private NoteService: NoteService, private auth: AuthService) {}
  @ViewChild(IonModal)
  modal!: IonModal;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
