/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 9, 2016
    End Date:
    
    File Name: Footer Bar.js
    
    
    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    /* Developing on the system used, we select what template to load.*/
    var idNumberForSystem = document.querySelector('script#footerBarScript').getAttribute("data-systemType");
    
    if (idNumberForSystem === "1") // Responsive
    {
        $("#responsivePageBodyBlock").append("<div id=\"footerBarResponsive\"> " +
        "</div>");
        $("#footerBarResponsive").load("../Templates/Footer%20Bar%20(Responsive).html");
    }
    else if (idNumberForSystem === "2") // Wii U
    {
        $(".pageBodyBlock").append("<div id=\"footerBarWiiU\"> " +
        "</div>");
        $("#footerBarWiiU").load("../Templates/Footer%20Bar%20(Wii%20U).html");
    }
    
});