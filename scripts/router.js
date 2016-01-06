page('/', articlesController.index);

page('/about', reposController.index);

page('/category/:category', articlesController.category);


page.start();
