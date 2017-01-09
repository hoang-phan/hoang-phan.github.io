export class User {
  accessToken: string;
  name: string;
  expiresAt: number;
  role: string;

  constructor(values: Object = {}) {
    this.accessToken = values['access_token'];
    this.name = values['name'];
    this.expiresAt = values['expires_at'];
    this.role = values['role'];
  }
}
