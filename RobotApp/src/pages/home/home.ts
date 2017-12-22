import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvProvider } from '../../providers/http-prov/http-prov';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  a = 0;
  b = 0;
  c = 0;

  constructor(public navCtrl: NavController, public http: HttpProvProvider) {

  }

  send(){
    this.http.send(this.a, this.b).then(res => {
      this.c = res.result;
    });
  }

}
