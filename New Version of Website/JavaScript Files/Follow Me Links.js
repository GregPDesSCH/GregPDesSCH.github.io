/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 10, 2016
    End Date:
    
    File Name: Follow Me Links.js
    
    
    Coding by Gregory Desrosiers
    
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
        $("#followMeLinksBlockResponsive").load("../Templates/Social%20Networking%20Block%20(Responsive).html");
    }
    else if (idNumberForSystem === "2") /* Wii U */
    {
        $(document.body).prepend("<div id=\"followMeLinksBlockWiiU\" class=\"followMeBlock\"></div>");
        $("#followMeLinksBlockWiiU").load("../Templates/Social%20Networking%20Block%20(Wii%20U).html");
    }
});