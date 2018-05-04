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
activityLevel: number;
weight : number;
sum : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LosefatPage');
  }

  //store data
  store(){
    this.storage.set("activityLevel", this.activityLevel);
    this.storage.set("weight", this.weight);
    console.log("activityLevel " + this.activityLevel);
    console.log("weight " + this.weight);
  }

  //retrieve data from storage and calculate
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

    this.storage.get("activityLevel")
    .then((data) => {
    if (data == null) {
      console.log("activityLevel not in storage");
    } else {
      console.log("activityLevel = " + data);
    }
    })
      .catch((err) => {
      console.log("Error = " + err);
    })
    
    this.sum = this.weight * this.activityLevel - 500;
  }
}
