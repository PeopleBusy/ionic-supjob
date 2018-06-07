import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { App } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public app: App) {

  }

  logout(){
    //Api remove token

    //Remove token from storage

    //Go to login page
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
