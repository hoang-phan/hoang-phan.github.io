import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { Blog } from '../models/blog';
import { Config } from '../app.config';

@Injectable()
export class BlogService {
  private actionUrl: string;
  private apiParams: string;
  private headers: Headers;

  constructor(private _http: Http, private _config: Config) {
    this.actionUrl = _config.Server + 'blogs'
    this.apiParams = '?access_token=' + _config.getAccessToken();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getAll = (): Observable<Object[]> => {
    return this._http.get(this.actionUrl, {headers: this.headers})
                     .map((response: Response) => <Object[]>response.json())
                     .catch(this.handleError);
  }

  public get = (id: number): Observable<Object> => {
    return this._http.get(this.actionUrl + '/' + id + this.apiParams, {headers: this.headers})
                     .map((response: Response) => <Object>response.json())
                     .catch(this.handleError);
  }

  public create = (blog: Object): Observable<Object> => {
    return this._http.post(this.actionUrl + this.apiParams, JSON.stringify(blog), {headers: this.headers})
                     .map((response: Response) => <Object>response.json() )
                     .catch(this.handleError);
  }

  public update = (id: number, blog: Object): Observable<Object> => {
    return this._http.put(this.actionUrl + '/' + id + this.apiParams, JSON.stringify(blog), {headers: this.headers})
                     .map((response: Response) => <Object>response.json())
                     .catch(this.handleError);
  }

  public delete = (id: number): Observable<Object> => {
    return this._http.delete(this.actionUrl + '/' + id + this.apiParams, {headers: this.headers})
                     .map((response: Response) => <Object>response.json())
                     .catch(this.handleError);
  }

  private handleError = (error: Response) => {
    console.log(error);  
    return Observable.throw(error.json().error || 'Server error');
  }
}
