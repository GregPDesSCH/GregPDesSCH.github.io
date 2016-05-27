/* 
    Gregory Desrosiers' Personal Website v2.0
    Responsive Orientation Script
    
    Start Date: April 10, 2016
    End Date: May 27, 2016
    
    File Name: responsive_orientation.js
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    // http://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery
    var pageID = $(document.body).attr("id");
    
    if (window.innerHeight > window.innerWidth) // Portrait
    {
        $("#responsivePageBodyBlock").css({"width": "auto", "margin-left": "0", "margin-right": "0"});
        $(document.body).removeAttr("id");
    }
    else
    {
        $("#responsivePageBodyBlock").css({"width": "80%", "margin-left": "auto", "margin-right": "auto"});
        $(document.body).attr("id", pageID);
    }
    
    window.addEventListener("resize", function() {
        if (window.innerHeight > window.innerWidth) // Portrait
        {
            $("#responsivePageBodyBlock").css({"width": "auto", "margin-left": "0", "margin-right": "0"});
            $(document.body).removeAttr("id");
        }
        else
        {
            $("#responsivePageBodyBlock").css({"width": "80%", "margin-left": "auto", "margin-right": "auto"});
            $(document.body).attr("id", pageID);
        }
    }, false);
});