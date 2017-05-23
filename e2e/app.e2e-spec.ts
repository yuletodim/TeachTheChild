import { TeachTheChildPage } from './app.po';

describe('teach-the-child App', () => {
  let page: TeachTheChildPage;

  beforeEach(() => {
    page = new TeachTheChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
