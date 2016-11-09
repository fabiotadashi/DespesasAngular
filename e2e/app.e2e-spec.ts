import { TesteAngular2Page } from './app.po';

describe('teste-angular2 App', function() {
  let page: TesteAngular2Page;

  beforeEach(() => {
    page = new TesteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
