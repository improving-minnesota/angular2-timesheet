export class Name {
  constructor(private _first:string, private _last:string){};
  public get first(): string {
    return this._first;
  };
  public get last(): string {
    return this._last;
  };
}

export class User {
  name: Name;
  token: string;
  authenticated: boolean;
  constructor(name:Name, authenticated:boolean, token?: string) {
    this.name = name;
    this.token = token;
    this.authenticated = authenticated;
  }

}
