app.controller('MainController', ['$scope', function($scope) {
    $scope.apps = [{
        icon: 'img/forecast.jpg',
        title: 'Forecast',
        developer: 'Forecast',
        price: 1.99
    }, {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Milan G.',
        price: 1.99
    }, {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    }, {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'Move, Inc.',
        price: 0.99
    }]
}]);