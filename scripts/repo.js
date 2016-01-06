var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/github/users/Mikekh84/repos',
  }).done(function(data){
    repos.all = data;
    // console.log('RequestReps')
  }).done(callback);
};
