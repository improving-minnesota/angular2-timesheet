export interface EmployeeData {
  _id?:string;
  username:string;
  email:string;
  admin:boolean;
  firstName:string;
  lastName:string;
}

export class Employee {
  _id:string;
  username:string;
  email:string;
  admin:boolean;
  firstName:string;
  lastName:string;

  constructor(private data:EmployeeData) {
    this._id = data._id;
    this.username = data.username;
    this.email = data.email;
    this.admin = data.admin;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

}
