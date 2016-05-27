/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 9, 2016
    End Date:
    
    File Name: footer_bar.js
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function () {
    "use strict";
    
    /* Developing on the system used, we select what template to load.*/
    var idNumberForSystem = document.querySelector('script#footerBarScript').getAttribute("data-systemType");
    
    if (idNumberForSystem === "1") // Responsive
    {
        $("#responsivePageBodyBlock").append("<div id=\"footerBarResponsive\"></div>");
        $("#footerBarResponsive").load("../templates/footer_bar_responsive.html");
    }
    else if (idNumberForSystem === "2") // Wii U or Desktop
    {
        $(".pageBodyBlock").append("<div id=\"footerBarWiiU\"></div>");
        $("#footerBarWiiU").load("../templates/footer_bar_wii_u.html");
    }
    else // Desktop
    {
        $(document.body).append("<div id=\"footerBarDesktop\"></div>");
        $("#footerBarDesktop").load("../templates/footer_bar_desktop.html");
    }
    
});