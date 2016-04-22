var agendaApp = angular.module('agendaApp', []);

agendaApp.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];
        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

agendaApp.controller('agendaCtrl', ['$scope', '$filter', function($scope, $filter) {

    $scope.showAll = true;
    $scope.checkChange = function() {
        for (t in $scope.categoryArray) {
            if ($scope.categoryArray[t].on) {
                $scope.showAll = false;
                return;
            }
        }
        $scope.showAll = true;
    };

    $scope.myFunc = function(a) {
        if ($scope.showAll) {
            return true; }

        var sel = false;

        for (cat in $scope.categoryArray) {
            var t = $scope.categoryArray[cat];
            if (t.on) {
                if (a.category.indexOf(t.name) == -1) {
                    return false;
                } else {
                    sel = true;
                }
            }
        }
        return sel;
    };

    $scope.theFilter = {
        day: 'day 1'
    }

    $scope.isVisible = false;
    $scope.showDesc = function() {
        $scope.isVisible = true;
    }


    $scope.categoryArray = [{ name: "A", on: false }, { name: "B", on: false }, { name: "C", on: false }, { name: "D", on: false }, { name: "E", on: false }, { name: "F", on: false }, { name: "G", on: false }, { name: "H", on: false }];

    $scope.sessionArray = [{
        "time": "09:00",
        "day": "day 1",
        "date": "September 19th, 2016",
        "name": "Session One and a Half",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "E", "D"]
    }, {
        "time": "9:00",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session One",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "E", "D"]
    }, {
        "time": "10:01",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session Two",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "10:01",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session TTTTTwo",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "11:00",
        "day": "day 1",
        "date": "September 19th, 2016",
        "name": "Session Three",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["G", "F", "D", "E"]
    }, {
        "time": "12:00",
        "day": "day 1",
        "date": "September 19th, 2016",
        "name": "Intermission A",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "12:00",
        "day": "day 1",
        "date": "September 19th, 2016",
        "name": "Intermission B",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "B", "C", "D"]
    }, {
        "time": "13:00",
        "day": "day 1",
        "date": "September 19th, 2016",
        "name": "Session Four",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["H", "A", "E"]
    }, {
        "time": "09:00",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session Five",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["D", "E", "B", "G"]
    }, {
        "time": "11:00",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session Six",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["A", "E", "C"]
    }, {
        "time": "12:00",
        "day": "day 2",
        "date": "September 20th, 2016",
        "name": "Session Seven",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate, eius atque voluptatum perspiciatis voluptatibus ex. Quo eum at nam porro sed placeat officia reiciendis eaque velit! Fugit, ducimus veritatis!",
        "category": ["G", "H", "B", "C"]
    }]


}]);
