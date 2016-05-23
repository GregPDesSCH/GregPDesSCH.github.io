/* 
    Gregory Desrosiers' Personal Website v2.0
    Responsive Orientation Script
    
    Start Date: April 10, 2016
    End Date:
    
    File Name: Responsive Orientation.js
    
    
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    //console.log("Hf?");
    // http://www.w3schools.com/jquerymobile/jquerymobile_events_orientation.asp
    
    /*var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    
    $(window).on(orientationEvent,function(){
        console.log("Hello?");
        console.log(window.orientation);
        console.log(window.matchMedia("(orientation: portrait)"));
        if(window.orientation == 0) // Portrait
        {
            console.log("Portrait")
            $("#responsivePageBodyBlock").css({"background-color": "white", "padding-left": "0.5em", "padding-right": "0.5em", "height": "100%", "padding-top": "20px"});
        }
        else // Landscape
        {
            console.log("Landscape")
            $("#responsivePageBodyBlock").css({"background-color": "white", "padding-left": "0.5em", "padding-right": "0.5em", "height": "100%", "padding-top": "20px", "width": "80%", "margin-left": "auto", "margin-right": "auto", "border": "0.5em solid black", "border-radius": "1em;"});
        }
    })*/
    
    // http://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery
    var pageID = $(document.body).attr("id");
    
    if(window.innerHeight > window.innerWidth) // Portrait
    {
        //console.log("removeID");
        $("#responsivePageBodyBlock").css({"width": "auto", "margin-left": "0", "margin-right": "0"});
        $(document.body).removeAttr("id");
    }
    else
    {
        //console.log("addID");
        $("#responsivePageBodyBlock").css({"width": "80%", "margin-left": "auto", "margin-right": "auto"});
        $(document.body).attr("id", pageID);
    }
    
    window.addEventListener("resize", function() {
        if(window.innerHeight > window.innerWidth) // Portrait
        {
            //console.log("1");
            $("#responsivePageBodyBlock").css({"width": "auto", "margin-left": "0", "margin-right": "0"});
            $(document.body).removeAttr("id");
        }
        else
        {
            //console.log("2");
            $("#responsivePageBodyBlock").css({"width": "80%", "margin-left": "auto", "margin-right": "auto"});
            $(document.body).attr("id", pageID);
        }
    }, false);
});