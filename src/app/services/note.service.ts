import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Note } from '../Types/Note';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly notesCollection!: CollectionReference<DocumentData>;
data : any
  constructor(
    private readonly firestore: Firestore,
    private auth: AuthService
  ) {
    this.notesCollection = collection(this.firestore, 'notes');
  }
formData = (data : any) => {
    this.data = data
  }
  getFormData = () => {
    return this.data
  }
  //form data getter
  getNotes() {
    return collectionData(this.notesCollection, {
      idField: 'id',
    }) as Observable<Note[]>;
  }
  get(id: string, userId: string) {
    return docData(doc(this.firestore, 'notes', id, 'users', userId));
  }
  create(note: Note) {
    if (!this.auth.isAuthorized(note.userId)) return;
    return addDoc(this.notesCollection, note );
  }
 /*  update(note: Note) {
    if (!this.auth.isAuthorized(note.userId)) return;

    const noteRef = doc(this.firestore, 'notes', note.id);
    return deleteDoc(noteRef);
  } */
  delete(id: string, userId: string) {
    if (!this.auth.isAuthorized(userId)) return;
    const noteRef = doc(this.firestore, 'notes', id);
    return deleteDoc(noteRef);
  }
}
