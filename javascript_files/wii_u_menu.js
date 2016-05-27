/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 2, 2016
    End Date: May 27, 2016
    
    File Name: wii_u_menu.js
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    $(document.head).append("<link href=\"../../css_files/wii_u_menu.css\" type=\"text/css\" rel=\"stylesheet\">");
    
    $(document.body).prepend("<div id=\"navigationBlock\"> " +
            "<div id=\"wiiUVersionNavigationMenuIcon\" class=\"navigationMenuIcon\"> "+
                "<i class=\"fa fa-bars\"></i>" +
            "</div>" +
        "</div>" +
        "<div id=\"wiiUVersionNavigationMenuBlock\" class=\"menuBlock\" style=\"display: none\">" +
        "</div>");
    
    $("#wiiUVersionNavigationMenuBlock").load("../templates/wii_u_menu.html");
    
    $("#wiiUVersionNavigationMenuIcon").click(function () {
        if ($("#wiiUVersionNavigationMenuBlock").is(":visible"))
            $("#wiiUVersionNavigationMenuBlock").slideUp(200);
        else
            $("#wiiUVersionNavigationMenuBlock").slideDown(200);
    });
});