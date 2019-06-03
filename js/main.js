var app = angular.module('MyApp', ['ngFileUpload'])
    app.controller('MyController', function ($scope, $window) {
        $scope.SelectFile = function (file) {
            $scope.SelectedFile = file;
        };
        $scope.Upload = function () {
            
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var locations = new Array();
                        var rows = e.target.result.split("\r\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            if (cells.length > 1) {
                                var location = {};
                                for(var j=32;j<cells.length;j+=20)
                                {
                                    location.from_lat = cells[j];
                                    location.from_long = cells[j+1];
                                    location.to_lat = cells[j+2];
                                    location.to_long = cells[j+3];
                                }
                                locations.push(location);
                                $scope.$apply(function () {
                                    $scope.Locations = locations;
                                    $scope.IsVisible = true;
                                });
                            }
                        }
 
                    }
                    reader.readAsText($scope.SelectedFile);
                
        }
        
        
    });


