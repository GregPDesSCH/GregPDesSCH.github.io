/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 10, 2016
    End Date:
    
    File Name: Responsive Menu.js
    
    
    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    //console.log("Hello?");
    $(document.head).append("<link href=\"../../CSS Files/Wii U Menu.css\" type=\"text/css\" rel=\"stylesheet\">");
    
    $(document.body).prepend("<div id=\"responsiveVersionNavigationMenuIcon\" class=\"navigationMenuIcon\"> "+
                "<i class=\"fa fa-bars\"></i>" +
            "</div>" +
        "<div id=\"responsiveVersionNavigationMenuBlock\" class=\"menuBlockResponsive\" style=\"display: none\">" +
                /* "<iframe id=\"menuBlock\" src=\"../Templates/Wii U Menu and Settings.html\" style=\"display: none\"></iframe>" + */
        "</div>");
    
    $("#responsiveVersionNavigationMenuBlock").load("../Templates/Responsive%20Menu.html");
    
    $("#responsiveVersionNavigationMenuIcon").click(function () {
        if ($("#responsiveVersionNavigationMenuBlock").is(":visible"))
            $("#responsiveVersionNavigationMenuBlock").slideUp(200);
        else
            $("#responsiveVersionNavigationMenuBlock").slideDown(200);
    });
});