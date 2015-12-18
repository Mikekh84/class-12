var articlesController = {};

articlesController.index = function() {
  Article.loadAll(articleView.index);
};

articlesController.category = function (ctx, data) {
  var categorydata = function(data) {
    console.log(data);
  }

};
