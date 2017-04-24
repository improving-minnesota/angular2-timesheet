import {} from 'jasmine'; // to get jasmine typescript hints
import { browser, by, element } from 'protractor';

import { ProjectListPage } from './pages/app.project.list';

describe('Project list', () => {
  let page: ProjectListPage;
  beforeEach(() => {
    page = new ProjectListPage();
  });

  it('contains at least 1 project', () => {
    expect(page.projects.count()).toBeGreaterThan(0);
  });
});
