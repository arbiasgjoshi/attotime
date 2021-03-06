exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    // eslint-disable-next-line no-param-reassign
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};
