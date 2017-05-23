import { DataBrowserPage } from './app.po';

describe('data-browser App', () => {
  let page: DataBrowserPage;

  beforeEach(() => {
    page = new DataBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
