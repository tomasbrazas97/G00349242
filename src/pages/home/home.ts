import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;

  constructor(public navCtrl: NavController, public app: App) {
    this.username = window.localStorage.getItem('username');
  }

  logout(){
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
      
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
