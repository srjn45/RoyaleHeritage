import { RoyaleHeritagePage } from './app.po';

describe('royale-heritage App', () => {
  let page: RoyaleHeritagePage;

  beforeEach(() => {
    page = new RoyaleHeritagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
