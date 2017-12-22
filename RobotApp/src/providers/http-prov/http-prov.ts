import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

/*
  Generated class for the HttpProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvProvider Provider');
  }

  send(a,b){
    var val = {
      "func": "add",
      "a": a,
      "b": b
    };
    return this.http.post("http://localhost:3000/", val).map(res => res.json()).toPromise();
  }

}
