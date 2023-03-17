import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) {}

	getUserProfile() {
		const user = this.auth.currentUser;
    console.log(user);
		const userDocRef = doc(this.firestore, `users/${user?.uid}`);
		return docData(userDocRef, { idField: 'id' });
	}

  //get the current user from firebase and console log
  //the user's profile image url



	async uploadImage(cameraFile: Photo) {
		const user = this.auth.currentUser;
    const storageRef = ref(this.storage, `users/${user?.uid}/avatar.jpg`);


		try {
			await uploadString(storageRef, cameraFile.base64String as string, 'base64');

			const imageUrl = await getDownloadURL(storageRef);

			const userDocRef = doc(this.firestore, `users/${user?.uid}`);
			await setDoc(userDocRef,{
        imageUrl
      }, { merge: true });
			return true;
		} catch (e) {
			return null;
		}
	}
}
