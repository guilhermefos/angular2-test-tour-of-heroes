import { Angular2TestTourOfHeroesPage } from './app.po';

describe('angular2-test-tour-of-heroes App', function() {
  let page: Angular2TestTourOfHeroesPage;

  beforeEach(() => {
    page = new Angular2TestTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
