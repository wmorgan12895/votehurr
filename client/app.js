(function(){
    /**$(document).ready(function(){
       $('div').hide(); 
    });**/
    

    var app = angular.module('voter', []);
    
    app.directive('pageHeader', function(){
       return {
       restrict: "E",
       templateUrl: 'top.html' 
        };
    });
    
})();