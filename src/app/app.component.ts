import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Config } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _config: Config) { }

  signedIn() {
    return this._config.signedIn();
  }
}
