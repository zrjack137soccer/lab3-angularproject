angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  
  $scope.users = [];
  
  $scope.addNew = function (user) {
    //alert(user.name + ' ' + user.url + ' ' + user.email);
    
    $scope.users.push({ 
    name: user.name,
    avatarEmail: user.email,
    avatarUrl: user.url
    
    });
    user.name = '';
    user.email = '';
    user.url = '';
    
  };
  
}

function avatarDirective () {
  return {
    scope: {
      user: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    replace: 'true',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
        '<h5>{{user.avatarEmail}}</h5>' +
      '</div>'
    ), /* [3] */
    link: link
  };
  
  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'penguin.jpg';
    }
    if (!scope.user.name) {
      scope.user.name = 'Guest';
    }
    //if (!scope.user.email) {
      //scope.user.avatarEmail = 'No Email';
    //}
  }

}