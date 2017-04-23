import { StartupFilesPage } from './app.po';

describe('startup-files App', () => {
  let page: StartupFilesPage;

  beforeEach(() => {
    page = new StartupFilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
