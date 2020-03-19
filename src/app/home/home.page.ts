import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public alertController: AlertController) {}

  navigate(){
    this.router.navigate(['/task']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'About',
      subHeader: 'Created with <3',
      message: 'Developed by Ned',
      buttons: ['OK']
    });
    await alert.present();
  }
}
