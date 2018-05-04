import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
//import { RemoteProvider } from '../providers/remote/remote';

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  rootPage:any = WelcomePage;
  
  //weather:any = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    /*private RemoteProvider: RemoteProvider*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });   
  }

  /*ngOnInit(){
    this.RemoteProvider.GetWeatherData().subscribe(data =>
      {
      this.weather = data.weather;
      });}*/

}

