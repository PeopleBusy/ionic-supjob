import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { RegisterProvider } from '../../providers/register/register';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  responseData: any;

  userData = {"nom": "", "prenom": "", "email": "", "password": "", "confirmation": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public registerProvider: RegisterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    //Api call
    this.registerProvider.postData(this.userData, "users").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        //Go to login page
        this.goToLoginPage();
    }, (err) => {
        //Conncection failed
        console.log("Connection failed");
    });
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
