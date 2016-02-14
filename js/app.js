var app = angular.module('myApp', []);

app.controller('SenateController', ['$http', function($http) {

    console.log("success!");

    this.seats = [];
    var _this = this;
    $http.get('js/data.json')
      .success(function(data){
        _this.seats = data;
      })
      .error(function(msg) {
      });

      // _this.isClosed = false;
      // _this.isClosed {
      //   if (_this.open === false) {
      //     _this.isClosed = true;
      //   } else {
      //     _this.isClosed = false;
      //   }
      // };
}]);


// app.controller(‘PlayersController’, [‘$http’, function($http) {
// this.players = [ ];
// var _this = this;
// $http.get(‘basketball.json’)
//      .success(function(data) {
//      _this.players = data;
//      })
//      .error(function(msg) {
//      });
// }];
