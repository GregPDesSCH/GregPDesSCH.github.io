/* 
    Gregory Desrosiers' Personal Website v2.0
    Desktop Menu (MVC App Controller)
    
    Start Date: April 19, 2016
    End Date: 
    
    File Name: Desktop Menu.js
    
    
    
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

app.controller('desktopMenuBlockController', function($scope) {
    
    /* Constants (all the messages used to show what page the user can go to on hover) */
    $scope.messages = ["Go to Home Page", "Resume", "Explore More about Myself", "GitHub Repositories / Portfolio", "Observe My Personality", "Read My Blogs", "You better contact me!"];
    
    /* Variables */
    $scope.showMeLinksForExploreMoreAboutMyself = false;
    $scope.showMeLinksForObserveMyPersonality = false;
    
    
    
    
    /* Event Listeners */
    // http://stackoverflow.com/questions/22532656/ng-mouseover-and-leave-to-toggle-item-using-mouse-in-angularjs
    
    // Mouse Hover listeners
    $scope.respondToMouseOverNavigationButton = function (menuButtonIndex) {
        //console.log(menuButtonIndex); 
        $("#desktopHoverOverLabelForAMenuButton").html($scope.messages[menuButtonIndex]);
    };
    
    $scope.respondToMouseExitNavigationButton = function () {
        $("#desktopHoverOverLabelForAMenuButton").html("");
    };
    
    // Mouse Click listeners
    $scope.respondToMouseClickOnExploreMoreAboutMyself = function() {
        //console.log("Hello?");
        
        if ($scope.showMeLinksForObserveMyPersonality === true)
            $scope.showMeLinksForObserveMyPersonality = !$scope.showMeLinksForObserveMyPersonality;
        
        $scope.showMeLinksForExploreMoreAboutMyself = !$scope.showMeLinksForExploreMoreAboutMyself;
        
        //console.log($scope.showMeLinksForExploreMoreAboutMyself);
    }
    
    $scope.respondToMouseClickOnObserveMyPersonality = function() {
        //console.log("Hdfsgsdfgsdf?");
        if ($scope.showMeLinksForExploreMoreAboutMyself === true)
            $scope.showMeLinksForExploreMoreAboutMyself = !$scope.showMeLinksForExploreMoreAboutMyself;
        
        $scope.showMeLinksForObserveMyPersonality = !$scope.showMeLinksForObserveMyPersonality;
        
        //console.log($scope.showMeLinksForObserveMyPersonality);
    }
});