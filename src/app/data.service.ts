import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(){
  this.http.get('http://local.cpm.api.org/api/public/sd_test').map(
    (res) => res.json()
  ).subscribe(
    (data)=> console.log(data,'here is the data')
  );
}


}
