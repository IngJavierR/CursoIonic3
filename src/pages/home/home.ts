import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgSrc: any;
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private camera: Camera) {
    
  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

  test() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(imageData => {
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;
    });
  }
}
