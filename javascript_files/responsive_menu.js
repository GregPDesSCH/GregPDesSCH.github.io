/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 10, 2016
    End Date: May 27, 2016
    
    File Name: responsive_menu.js
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";

    $(document.head).append("<link href=\"../../css_files/wii_u_menu.css\" type=\"text/css\" rel=\"stylesheet\">");
    
    $(document.body).prepend("<div id=\"responsiveVersionNavigationMenuIcon\" class=\"navigationMenuIcon\"> "+
                "<i class=\"fa fa-bars\"></i>" +
            "</div>" +
        "<div id=\"responsiveVersionNavigationMenuBlock\" class=\"menuBlockResponsive\" style=\"display: none\">" +
        "</div>");
    
    $("#responsiveVersionNavigationMenuBlock").load("../templates/responsive_menu.html");
    
    $("#responsiveVersionNavigationMenuIcon").click(function () {
        if ($("#responsiveVersionNavigationMenuBlock").is(":visible"))
            $("#responsiveVersionNavigationMenuBlock").slideUp(200);
        else
            $("#responsiveVersionNavigationMenuBlock").slideDown(200);
    });
});