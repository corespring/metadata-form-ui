angular.module('metadata-form-ui.controllers')
  .controller('Root', ['$scope', function ($scope) {
    console.log("Root");

    var toKeyValues = function(m){

      var out = [];

      for(var x in m){
        out.push( { key: x, value : m[x]});
      }
      return out;
    }

    com.corespring.metadataBridge.requestMetadata(function (metadata) {
      console.log("!Metadata received: ", metadata);
      if(!$scope.$$phase) {

        $scope.$apply(function(){
          $scope.metadata = toKeyValues(metadata);
        });
      }
    });

    $scope.addRow= function(){

      $scope.metadata.push({key: "Key", value: "Enter a value"});
    }

    $scope.remove = function(m){
      $scope.metadata = _.without($scope.metadata, _.findWhere($scope.metadata, m));
    }

    $scope.save = function(){

      console.log("save", $scope.metadata);
    }

  }]);
