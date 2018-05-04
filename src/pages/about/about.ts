import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

opinion : string[];

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  store(){
    this.storage.set("opinion ", this.opinion);
    console.log("opinion " + this.opinion);

    this.storage.get("opinion ")
    .then((data) => {
    if (data == null) {
      console.log("opinion not in storage");
    } else {
      console.log("opinion = " + data);
    }
    })
      .catch((err) => {
      console.log("Error = " + err);
    })
  }

}
