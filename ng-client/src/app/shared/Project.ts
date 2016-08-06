export interface ProjectData {
  _id?: string;
  name: string;
  description: string;
}

export class Project {
  _id: string;
  name: string;
  description: string;

  constructor(data: ProjectData) {
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
  }

}
