var reposController = {};

reposController.index = function() {
  repos.requestRepos(repoView.index);
  console.log('Request Repos');
};
