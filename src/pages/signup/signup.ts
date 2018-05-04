import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  myform: FormGroup;

  //reactive form
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.myform = new FormGroup({
      //nested formgroup
      userdetails: new FormGroup({
          username: new FormControl('', [Validators.required, Validators.minLength(5)]),
          firstname: new FormControl('', Validators.required),       
      }),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern("_+\@.+\__+")), 
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signup(value: any): void{
     // window.localStorage.setItem('username', value.username);
     // window.localStorage.setItem('password', value.password);
      
      this.navCtrl.push(TabsPage);
  }
}
