export class Name {
  constructor(private _first: string, private _last: string) {};
  public get first(): string {
    return this._first;
  };
  public get last(): string {
    return this._last;
  };
}

export interface UserData {
  name: Name;
  token: string;
  id: string;
  authenticated: boolean;
}

export class User {
  name: Name;
  token: string;
  id: string;
  authenticated: boolean;

  constructor(userData: UserData) {
    this.name = userData.name;
    this.token = userData.token;
    this.authenticated = userData.authenticated;
    this.id = userData.id;
  }
}
