import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  talks: FirebaseListObservable<any>;
  content: string;
  constructor(public navCtrl: NavController, angularFire: AngularFire) {
    this.talks = angularFire.database.list('/talks');
  }
  addTalk() {
    this.talks.push({
      name: "名無しさん",
      content: this.content
    });
    this.content = "";
  }
 
}