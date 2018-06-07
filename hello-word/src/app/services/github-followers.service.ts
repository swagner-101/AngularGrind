import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: Http) {
      super('https://api.github.com/users/mosh-hamedani/followers',http)
   }
}
