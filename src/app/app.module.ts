import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LosefatPage } from '../pages/losefat/losefat';
import { BuildmusclePage } from '../pages/buildmuscle/buildmuscle';
import { GetstrongerPage } from '../pages/getstronger/getstronger';
import { EndurancePage } from '../pages/endurance/endurance';
import { FlexibilityPage } from '../pages/flexibility/flexibility';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { RemoteProvider } from '../providers/remote/remote';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SignupPage,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LosefatPage,
    BuildmusclePage,
    GetstrongerPage,
    EndurancePage,
    FlexibilityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SignupPage,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LosefatPage,
    BuildmusclePage,
    GetstrongerPage,
    EndurancePage,
    FlexibilityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteProvider,
  ]
})
export class AppModule {}
