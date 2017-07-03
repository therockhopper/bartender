import { BartenderPage } from './app.po';

describe('bartender App', () => {
  let page: BartenderPage;

  beforeEach(() => {
    page = new BartenderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
