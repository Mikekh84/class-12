page('/', articlesController.index);

page('/about', reposController.index);

page('/catergory/:catergory', articlesController.category);
page.start();
