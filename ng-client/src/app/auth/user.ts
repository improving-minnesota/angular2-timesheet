export class Name {
  constructor(private _first:String, private _last:String){};
  public get first(): String {
    return this._first;
  };
  public get last(): String {
    return this._last;
  };
}

export class User {
  name:Name;
  token: string;
  constructor(name:Name, token?: string) {
    this.name = name;
    this.token = token;
  }

}
