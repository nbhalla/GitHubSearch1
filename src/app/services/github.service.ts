import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string = '6d6a81be8e785f637b47';
  private client_secret:string = '152e2b23d01ebd28d9a54652b140ab7471362deb';
  constructor(private _http: Http) { 
    console.log('Github service ready');
    this.username = 'bradtraversy';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+ this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='+ this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
