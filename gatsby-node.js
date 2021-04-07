exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
  
    if (page.path.match(/^\//)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      // eslint-disable-next-line no-param-reassign
      page.matchPath = '//*';
      // Update the page.
      createPage(page);
    }
  };
   