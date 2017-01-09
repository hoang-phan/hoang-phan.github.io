import { Component } from '@angular/core';
import { Config } from '../../app.config';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

declare const FB:any;

@Component({
  selector: 'facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css'],
  providers: [AuthService]
})
export class FacebookAuthComponent {

  constructor(private _config: Config, private _auth: AuthService) {
    FB.init({
      appId      : _config.FacebookId,
      cookie     : false,
      xfbml      : true,
      version    : 'v2.8'
    });
  }

  onFacebookAuthenticate() {
    FB.login((response) => {
      this._auth.authenticate(response.authResponse.accessToken)
                .subscribe((data: Object) => {
                  this._config.setUser(new User(data));
                });
    });
  }
}
