import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

//importing pages for nav
import { LosefatPage } from '../losefat/losefat';
import { BuildmusclePage } from '../buildmuscle/buildmuscle';
import { GetstrongerPage } from '../getstronger/getstronger';
import { EndurancePage } from '../endurance/endurance';
import { FlexibilityPage } from '../flexibility/flexibility';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.username = window.localStorage.getItem('username');
  }

  logout(){
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
      
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  //nav to pages functions
  goToPage1(){  //losefat
    this.navCtrl.push(LosefatPage);
  }

  goToPage2(){ //buildmuscle
    this.navCtrl.push(BuildmusclePage);
  }

  goToPage3(){ //getstronger
    this.navCtrl.push(GetstrongerPage);
  }

  goToPage4(){ //endurance
    this.navCtrl.push(EndurancePage);
  }

  goToPage5(){ //flexibility
    this.navCtrl.push(FlexibilityPage);
  }
}
