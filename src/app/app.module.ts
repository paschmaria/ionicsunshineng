import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home-page/home-page';
import { ModuleInputPage } from '../pages/module-input-page/module-input-page';
import { InputPage } from '../pages/input-page/input-page';
import { UsagePage, UsageBar } from '../pages/usage-page/usage-page';
import { AnalysisPage } from '../pages/analysis-page/analysis-page';

import { HttpModule } from '@angular/http';
import { SunshineService } from '../pages/home-page/sunshine.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModuleInputPage,
    InputPage,
    UsagePage,
    AnalysisPage,
    UsageBar
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModuleInputPage,
    InputPage,
    UsagePage,
    AnalysisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    SunshineService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
