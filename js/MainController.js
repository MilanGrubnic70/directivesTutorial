app.controller('MainController', ['$scope', function($scope) {
    $scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'Move, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Milan',
        price: 1.99
    };

    $scope.forecast = {
        icon: 'img/forecast.jpg',
        title: 'Forecast',
        developer: 'Forecast Devs',
        price: 1.5
    };

}]);