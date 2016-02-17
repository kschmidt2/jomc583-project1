var app = angular.module('myApp', []);

app.controller('SenateController', function($http) {

    console.log("success!");

    this.seats = [];
    var _this = this;
    $http.get('js/data.json')
      .success(function(data){
        _this.seats = data;
      })
      .error(function(msg) {
      });

    //show and hide more info div
    this.getInfo = function(seatName) {

      for (i = 0; i < this.seats.length; i++) {

        if (seatName == this.seats[i].name) {

          var seatInfo = "";

          console.log("this worked!");

          seatInfo += '<div class="seatname">' + this.seats[i].name + '</div>';

          if (this.seats[i].incumbent.party == "Republican") {

            seatInfo += '<div class="repstrip"><h3>current senator</h3></div>';

          } else if (this.seats[i].incumbent.part == "Democrat"){

            seatInfo += '<div class="demstrip"><h3>current senator</h3></div>';

          } else {
            seatInfo += '<div class="otherstrip"><h3>current senator</h3></div>';
          }

          seatInfo += '<div class="senatorname">' + this.seats[i].incumbent.name + '</div><div class="senatorparty">' + this.seats[i].incumbent.party + "</div>";

          if (this.seats[i].open == "open") {

            if (this.seats[i].featuredCandidate.party == "Republican") {

              seatInfo += '<div class="repstrip"><h3>featured candidate</h3></div>';

            } else {

              seatInfo += '<div class="demstrip"><h3>featured candidate</h3></div>';

            }

            seatInfo += '<img class="candidatephoto" src="' + this.seats[i].featuredCandidate.photo + '">';
            seatInfo += '<div class="senatorname">' + this.seats[i].featuredCandidate.name + '</div><div class="featuredparty">' + this.seats[i].featuredCandidate.party + "</div>";
            seatInfo += '<div class="moreinfo"><b style="text-transform:uppercase">About: </b>' + this.seats[i].featuredCandidate.bio + '<br /><b style="text-transform:uppercase">Platform points: </b>' + this.seats[i].featuredCandidate.platform + '</div>';
            seatInfo += '<div class="otherstrip"><h3>other candidates</h3></div>';

            if (this.seats[i].otherCandidates !== "none") {

              console.log("this also worked!");


              for (j = 0; j < this.seats[i].otherCandidates.length; j++) {
                console.log("more candidates success");

                seatInfo += '<div class="othercandidates"><b>' + this.seats[i].otherCandidates[j].name + '</b>, ' + this.seats[i].otherCandidates[j].party + '</div>';
              }

            } else {
              seatInfo += 'None';
            }

          }

          document.getElementById("sidebar").innerHTML = seatInfo;

        }
      }

    }
});


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
