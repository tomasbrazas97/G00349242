import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the LosefatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-losefat',
  templateUrl: 'losefat.html',
})
export class LosefatPage {
activityLevel: string;
weight : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LosefatPage');
  }

  calculate(){
    this.storage.set("activityLevel", this.activityLevel);
    this.storage.set("weight", this.weight);
    console.log("activityLevel " + this.activityLevel);
    console.log("weight " + this.weight);
  }

  show(){
    this.storage.get("weight")
    .then((data) => {
    if (data == null) {
      console.log("weight not in storage");
    } else {
      console.log("weight = " + data);
    }
    })
      .catch((err) => {
      console.log("Error = " + err);
    })
  }
}
