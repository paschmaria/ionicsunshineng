import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home-page/home-page';
import { ModuleInputPage } from '../pages/module-input-page/module-input-page';
import { InputPage } from '../pages/input-page/input-page';
import { UsagePage } from '../pages/usage-page/usage-page';
import { AnalysisPage } from '../pages/analysis-page/analysis-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home Page', component: HomePage },
      { title: 'Module Input Page', component: ModuleInputPage }, 
      { title: 'Input Page', component: InputPage }, 
      { title: 'Usage Page', component: UsagePage }, 
      { title: 'Analysis Page', component: AnalysisPage }, 
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
