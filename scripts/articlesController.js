var articlesController = {};

articlesController.index = function() {
  Article.loadAll(articleView.index);
};

articlesController.category = function (ctx, next) {
  console.log('this is AC.category');
  var categorydata = function(data) {
    ctx.articles = data
    console.log('this is the categorydata');
  }
  next();
};


articlesController.category = function(ctx, next) {
  var categoryData = function(data) {
    ctx.articles = data;
    next();
  };
  Article.findByCategory(ctx.params.category, categoryData );
};
