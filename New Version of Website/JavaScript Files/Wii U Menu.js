/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 2, 2016
    End Date:
    
    File Name: Wii U Menu.js
    
    
    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    //console.log("Hello?");
    $(document.head).append("<link href=\"../../CSS Files/Wii U Menu.css\" type=\"text/css\" rel=\"stylesheet\">");
    
    $(document.body).prepend("<div id=\"navigationBlock\"> " +
            "<div id=\"wiiUVersionNavigationMenuIcon\" class=\"navigationMenuIcon\"> "+
                "<i class=\"fa fa-bars\"></i>" +
            "</div>" +
        "</div>" +
        "<div id=\"wiiUVersionNavigationMenuBlock\" class=\"menuBlock\" style=\"display: none\">" +
                /* "<iframe id=\"menuBlock\" src=\"../Templates/Wii U Menu and Settings.html\" style=\"display: none\"></iframe>" + */
        "</div>");
    
    $("#wiiUVersionNavigationMenuBlock").load("../Templates/Wii%20U%20Menu.html");
    
    $("#wiiUVersionNavigationMenuIcon").click(function () {
        if ($("#wiiUVersionNavigationMenuBlock").is(":visible"))
            $("#wiiUVersionNavigationMenuBlock").slideUp(200);
        else
            $("#wiiUVersionNavigationMenuBlock").slideDown(200);
    });
});