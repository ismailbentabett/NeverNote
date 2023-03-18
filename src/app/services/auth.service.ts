import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from '@angular/fire/auth';
import { generateUsername } from 'friendly-username-generator';
import { CollectionReference, DocumentData, Firestore, collection, doc, docData, setDoc } from '@angular/fire/firestore';
//database
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized(userId: string) {
    return this.auth.currentUser?.uid === userId;
  }


  private userCollection!: CollectionReference<DocumentData>;

  constructor(private auth: Auth , private db: Firestore) {
    this.userCollection = collection(this.db, 'users');
  }
getCurrentUser(){
  return this.auth.currentUser
}
  async register({ email, password }: { email: string; password: string }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
   //generate username from email
      const username = generateUsername();

      const userDocRef = doc(this.db, `users/${this.auth.currentUser?.uid}`);
			await setDoc(userDocRef, {
				username
			});
      return user;
    } catch (e) {
      return null;
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }

  getUser() {

    const id = this.auth.currentUser?.uid;
    const pokemonDocumentReference = doc(this.db, `users/${id}`);
    return docData(pokemonDocumentReference, { idField: 'id' });
  }
}
