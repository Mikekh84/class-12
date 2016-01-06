var articlesController = {};

articlesController.index = function() {
  Article.loadAll(articleView.index);
};

articlesController.category = function(ctx, next) {
  var categoryData = function(data) {
    ctx.articles = data;
    next();
  };
  Article.findByCategory(ctx.params.category, articleView.populateCat);
};
