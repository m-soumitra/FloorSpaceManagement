import { FloorSpaceManagementPage } from './app.po';

describe('floor-space-management App', () => {
  let page: FloorSpaceManagementPage;

  beforeEach(() => {
    page = new FloorSpaceManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
