var repoView = {};

repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.render(repo));

      };
      repos.all.forEach(_append);
};

repoView.render = function(repo) {
  //TODO: How would you like to render this?
  // replace(/\s+/g, '')
  $('#about ul').append('<li><a href="' + repo.html_url +'">'  + repo.name + '</a></li>');
  console.log(repo.html_url);
};

repoView.ui = function() {
  var $about = $('#about');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};
