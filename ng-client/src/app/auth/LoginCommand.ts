export class LoginCommand {
  constructor(private _username:String = '', private _password:String = '') {
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  set username(username) {
    this._username = username;
  }

  set password(password) {
    this._password = password;
  }
}
