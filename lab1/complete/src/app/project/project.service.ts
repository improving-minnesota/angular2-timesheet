import { Injectable } from '@angular/core';
import { Project } from './Project';

@Injectable()
export class ProjectService {

  constructor() {}

  getProjects(): Project[] {
    return [
      new Project({
        name: 'Great Project',
        description: 'A great project!'
      }),
      new Project({
        name: 'Good Project',
        description: 'A pretty good project.'
      }),
      new Project({
        name: 'The Worst Project',
        description: 'Nobody wants to work on this.'
      })
    ];
  }
}
