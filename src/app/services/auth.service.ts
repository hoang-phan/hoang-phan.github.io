import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
import { Config } from '../app.config';

@Injectable()
export class AuthService {
  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _config: Config) {
    this.actionUrl = _config.Server + 'auths'
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public authenticate = (fbToken: string): Observable<Object> => {
    return this._http.post(this.actionUrl, {fb_token: fbToken}, {headers: this.headers})
                            .map((response: Response) => <Object>response.json())
                            .catch(this.handleError);
  }

  private handleError = (error: Response) => {
    console.log(error);  
    return Observable.throw(error.json().error || 'Server error');
  }
}
