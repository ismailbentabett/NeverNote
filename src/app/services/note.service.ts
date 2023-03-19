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
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Note } from '../Types/Note';
import { updateDoc } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly notesCollection!: CollectionReference<DocumentData>;
  data: any;
  constructor(
    private readonly firestore: Firestore,
    private auth: AuthService
  ) {
    this.notesCollection = collection(this.firestore, 'notes');
  }
  formData = (data: any) => {
    this.data = data;
  };
  getFormData = () => {
    return this.data;
  };
  //form data getter
  getNotes(userId: string) {
    //notes where user id is equal to the current user id
    const q = query(this.notesCollection, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' });
  }
  get(id: string, userId: string) {
    return docData(doc(this.firestore, 'notes', id, 'users', userId));
  }
  create(note: Note) {
    if (!this.auth.isAuthorized(note.userId)) return;
    return addDoc(this.notesCollection, note);
  }
  update(note: any, id: any) {
    console.log(note , id)

    let currentUser = this.auth.getCurrentUser();
    let uid = currentUser?.uid;
    if (!this.auth.isAuthorized(uid as any)) return;
    console.log( id)
    const noteRef = doc(this.firestore, 'notes', id);
    return updateDoc(noteRef, note);
  }
  delete(id: string) {

    let currentUser = this.auth.getCurrentUser();
    let uid = currentUser?.uid;
    if (!this.auth.isAuthorized(uid as any)) return;
    const noteRef = doc(this.firestore, 'notes', id);
    return deleteDoc(noteRef);
  }
}
