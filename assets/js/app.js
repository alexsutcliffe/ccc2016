var agendaApp = angular.module('agendaApp', []);

agendaApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];
      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

agendaApp.controller('agendaCtrl', ['$scope', '$filter',function($scope,$filter) {

    $scope.showAll = true;
    $scope.checkChange = function() {
    		for(d in $scope.dayArray){
            if($scope.dayArray[d].on){
                $scope.showAll = false;
                return;
            } 
        }
        
        for(t in $scope.categoryArray){
            if($scope.categoryArray[t].on){
                $scope.showAll = false;
                return;
            }
        }

        $scope.showAll = true;
    };
    
   $scope.myFunc = function(a) {
       if($scope.showAll) { return true; }
       
       var sel = false;
      
       //DAY ARRAY
        for(day in $scope.dayArray){
            var d = $scope.dayArray[day];
            if(d.on){
                if(a.day.indexOf(d.name) == -1){
                    return false;
                }else{
                    sel = true;
                }
            }           
        }
        //CATEGORY ARRAY
        for(cat in $scope.categoryArray){
            var c = $scope.categoryArray[cat];
            if(c.on){
                if(a.category.indexOf(c.name) == -1){
                    return false;
                }else{
                    sel = true;
                }
            }           
        }
       return sel;
    };

    $scope.isVisible = false;
    $scope.showDesc = function() {
        $scope.isVisible = true;
    }

    $scope.dayArray = [{ name: "day 1", on: false}, {name:"day 2", on: false}];

    $scope.categoryArray = [{ name: "A", on: false}, {name:"B", on: false}, {name:"C", on: false}, {name:"D", on: false}, {name:"E", on: false}, {name:"F", on: false}, {name:"G", on: false}, {name:"H", on: false}];

    $scope.sessionArray = [{
        "time": "09:00",
        "day": "day 1",
        "name": "Session One and a Half",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "E", "D"]
    }, {
        "time": "09:00",
        "day": ["day 1", "day 2"],
        "name": "Session One",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "E", "D"]
    }, {
        "time": "10:01",
        "day": "day 2",
        "name": "Session Two",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "10:01",
        "day": "day 2",
        "name": "Session TTTTTwo",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "11:00",
        "day": "day 1",
        "name": "Session Three",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["G", "F", "D", "E"]
    }, {
        "time": "12:00",
        "day": "day 1",
        "name": "Intermission A",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "12:00",
        "day": "day 1",
        "name": "Intermission B",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "13:00",
        "day": "day 1",
        "name": "Session Four",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["H", "A", "E"]
    }, {
        "time": "09:00",
        "day": "day 2",
        "name": "Session Five",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["D", "E", "B", "G"]
    }, {
        "time": "11:00",
        "day": "day 2",
        "name": "Session Six",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "E", "C"]
    }, {
        "time": "12:00",
        "day": "day 2",
        "name": "Session Seven",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["G", "H", "B", "C"]
    }]


}]);