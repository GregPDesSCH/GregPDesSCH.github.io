/* 
    Gregory Desrosiers' Personal Website v2.0
    Desktop Menu (MVC App Controller)
    
    Start Date: April 19, 2016
    End Date: May 27, 2016
    
    File Name: desktop_menu.js
    
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

// Indices for the different pages
var pageRequested = {
    HOME_PAGE: 1,
    RESUME: 2,
    EXPLORE_MORE_ABOUT_MYSELF_ABOUT_ME: 3,
    EXPLORE_MORE_ABOUT_MYSELF_EDUCATION_HISTORY: 4,
    EXPLORE_MORE_ABOUT_MYSELF_PORTFOLIO_OF_PROJECTS: 5,
    GITHUB_REPOSITORIES_AND_PORTFOLIO: 6,
    OBSERVE_MY_PERSONALITY_FAQ: 7,
    OBSERVE_MY_PERSONALITY_PHOTO_GALLERY: 8,
    READ_MY_BLOGS: 9,
    YOU_BETTER_CONTACT_ME: 10
};

app.controller('desktopMenuBlockController', function($scope) {
    "use strict";
    
    /* Constants (all the messages used to show what page the user can go to on hover) */
    $scope.messages = ["Go to Home Page", "Resume", "Explore More about Myself", "GitHub Repositories / Portfolio", "Observe My Personality", "Read My Blogs", "You better contact me!"];
    
    /* Variables */
    $scope.showMeLinksForExploreMoreAboutMyself = false;
    $scope.showMeLinksForObserveMyPersonality = false;
    
    
    
    
    /* Event Listeners */
    // http://stackoverflow.com/questions/22532656/ng-mouseover-and-leave-to-toggle-item-using-mouse-in-angularjs
    
    // Mouse Hover listeners
    $scope.respondToMouseOverNavigationButton = function (menuButtonIndex) {
        $("#desktopHoverOverLabelForAMenuButton").html($scope.messages[menuButtonIndex]);
    };
    
    $scope.respondToMouseExitNavigationButton = function () {
        $("#desktopHoverOverLabelForAMenuButton").html("");
    };
    
    // Mouse Click listeners
    $scope.respondToMouseClickOnExploreMoreAboutMyself = function() {
        if ($scope.showMeLinksForObserveMyPersonality === true)
            $scope.showMeLinksForObserveMyPersonality = !$scope.showMeLinksForObserveMyPersonality;
        
        $scope.showMeLinksForExploreMoreAboutMyself = !$scope.showMeLinksForExploreMoreAboutMyself;
    }
    
    $scope.respondToMouseClickOnObserveMyPersonality = function() {
        if ($scope.showMeLinksForExploreMoreAboutMyself === true)
            $scope.showMeLinksForExploreMoreAboutMyself = !$scope.showMeLinksForExploreMoreAboutMyself;
        
        $scope.showMeLinksForObserveMyPersonality = !$scope.showMeLinksForObserveMyPersonality;
    }
    
    $scope.respondToMouseClick = function(index) {
        if (index === pageRequested.HOME_PAGE)
             window.open("/pages/pc/home_page","_self");
        else if (index === pageRequested.RESUME)
             window.open("/pages/pc/resume","_self");
        else if (index === pageRequested.EXPLORE_MORE_ABOUT_MYSELF_ABOUT_ME)
             window.open("/pages/pc/explore_more_about_myself-about_me","_self");
        else if (index === pageRequested.EXPLORE_MORE_ABOUT_MYSELF_EDUCATION_HISTORY)
             window.open("/pages/pc/explore_more_about_myself-education_history","_self");
        else if (index === pageRequested.EXPLORE_MORE_ABOUT_MYSELF_PORTFOLIO_OF_PROJECTS)
             window.open("/pages/pc/explore_more_about_myself-portfolio_of_projects","_self");
        else if (index === pageRequested.GITHUB_REPOSITORIES_AND_PORTFOLIO)
             window.open("/pages/pc/github_repositories_and_portfolio","_self");
        else if (index === pageRequested.OBSERVE_MY_PERSONALITY_FAQ)
             window.open("/pages/pc/observe_my_personality-faq","_self");
        else if (index === pageRequested.OBSERVE_MY_PERSONALITY_PHOTO_GALLERY)
             window.open("/pages/pc/observe_my_personality-photo_gallery","_self");
        else if (index === pageRequested.READ_MY_BLOGS)
             window.open("/pages/pc/read_my_blogs","_self");
        else if (index === pageRequested.YOU_BETTER_CONTACT_ME)
             window.open("/pages/pc/you_better_contact_me","_self");
    }
});