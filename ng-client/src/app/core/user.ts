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

  constructor({ authenticated, id, name, token }: UserData) {
    this.authenticated = authenticated;
    this.id = id;
    this.name = name;
    this.token = token;
  }
}
