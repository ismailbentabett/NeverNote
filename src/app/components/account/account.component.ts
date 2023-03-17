import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent  implements OnInit {

  profile: any = null;

	constructor(
		private avatarService: AvatarService,
		private authService: AuthService,
		private router: Router,
		private loadingController: LoadingController,
		private alertController: AlertController
	) {
		this.avatarService.getUserProfile().subscribe((data) => {
			this.profile = data as any;
		});
	}
  ngOnInit() {
  }

	async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/auth/login', { replaceUrl: true });
	}

	async changeImage() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});

		if (image) {
			const loading = await this.loadingController.create();
			await loading.present();

			const result = await this.avatarService.uploadImage(image);
			loading.dismiss();

			if (!result) {
				const alert = await this.alertController.create({
					header: 'Upload failed',
					message: 'There was a problem uploading your avatar.',
					buttons: ['OK']
				});
				await alert.present();
			}
		}
	}
}
