import { Material2MenuTestPage } from './app.po';

describe('material2-menu-test App', function() {
  let page: Material2MenuTestPage;

  beforeEach(() => {
    page = new Material2MenuTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
