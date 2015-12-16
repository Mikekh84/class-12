var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  //TODO: How would you like to fetch your repos?
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/Mikekh84/repos',
    header:{Authorization: 'token ' + token}
  }).done(function(data){
    repos.all = data;
    console.log('RequestReps')
  }).done(callback);
};
