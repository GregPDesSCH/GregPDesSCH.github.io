/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 10, 2016
    End Date:
    
    File Name: follow_me_links.js
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    /* Developing on the system used, we select what template to load.*/
    var idNumberForSystem = document.querySelector('script#footerBarScript').getAttribute("data-systemType");
    
    if (idNumberForSystem === "1") /* Responsive */
    {
        $("#responsivePageBodyBlock").append("<div id=\"followMeLinksBlockResponsive\" class=\"followMeBlock\"></div>");
        $("#followMeLinksBlockResponsive").load("../templates/social_networking_block_responsive.html");
    }
    else if (idNumberForSystem === "2") /* Wii U */
    {
        $(document.body).prepend("<div id=\"followMeLinksBlockWiiU\" class=\"followMeBlock\"></div>");
        $("#followMeLinksBlockWiiU").load("../templates/social_networking_block_wii_u.html");
    }
});