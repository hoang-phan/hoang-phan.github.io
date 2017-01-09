import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class Config {
  public Server: string = 'http://lvh.me:3000/';
  public FacebookId: string = '324256877723842';
  
  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  tokenExpiresAt(): number {
    return parseInt(localStorage.getItem('expiresAt')) || 0;
  }

  signedIn() {
    return this.tokenExpiresAt() > new Date().getTime();
  }

  isWriter() {
    return this.signedIn() && localStorage.getItem('role') == 'writer';
  }

  setUser(user: User) {
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('userName', user.name);
    localStorage.setItem('expiresAt', user.expiresAt.toString());
    localStorage.setItem('role', user.role);
  }
}
