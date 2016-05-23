/* 
    Gregory Desrosiers' Personal Website v2.0
    Desktop Custom Directives
    
    Start Date: April 23, 2016
    End Date: 
    
    File Name: Desktop Menu.js
    
    
    
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/


/* Explore More about Myself - About Me Directives */
// http://stackoverflow.com/questions/17284005/scrollto-function-in-angularjs
app.directive('scrollOnClick', function() {
    return {
        restrict: 'A',
            link: function(scope, $elm) {
                $elm.on('click', function() {
                //console.log("Hello?");
                //console.log($elm.attr("data-href"));
                $("body").animate({scrollTop: $($elm.attr("data-href")).offset().top}, 200);
            });
        }
    }
});