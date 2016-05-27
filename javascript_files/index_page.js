/* 
    Gregory Desrosiers' Personal Website v2.0
    Index Page Script
    
    Start Date: May 14, 2016
    End Date: May 27, 2016
    
    File Name: index_page.js
    

    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.

    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

$(function() {
    
    "use strict";
    
    // Welcome Message Definition and Decision Making
    // These are all the different messages available for the index page.
    var indexPageMessages = [
                                "Howdy; Gregory Desrosiers here!", 
                                "I would like to welcome you to my personal website.", 
                                "Splat! Gregory 'Inkling' Desrosiers here.",
                                "Can you picture? I'm Gregory Desrosiers, UWaterloo.",
                                "Why, hello there! Gregory at your service.",
                                "YouTube, video gaming, programming... all discussed here!",
                                "I carry an engineering hardhat, but I do love computers!",
                                "Greetings from UWaterloo.",
                                "Konichiwa!",
                                "Que pasa, amigo?",
                                "Please select a system to view the website.",
                                "Which system are you using to view this website?",
                                "Which one will you use to visit?",
                                "Pick a system!"
                            ];  
    $("#welcomeMessage").text(indexPageMessages[Math.floor((Math.random() * indexPageMessages.length))]);
    
    
    
    // Deciding on the background color
    var differentBackgroundColors = [
                                        "red",
                                        "blue",
                                        "yellow",
                                        "green",
                                        "orange",
                                        "purple"
                                    ];
    
    $(document.body).css('background-color', differentBackgroundColors[Math.floor((Math.random() * differentBackgroundColors.length))]);
    
    
    
    // Icon Click Listeners
    $("#wiiULogo, #wiiULogo2").on('click', function() {
        window.open("/pages/wii_u/home_page","_self");
    });
    
    $("#phonesAndTabletsLogo, #phonesAndTabletsLogo2").on('click', function() {
        window.open("/pages/responsive/home_page","_self");
    });
    
    $("#pcLogo, #pcLogo2").on('click', function() {
        window.open("/pages/pc/home_page","_self");
    });
    
    
    $("#wiiULogoImage").on('click', function() {
        window.open("https://www.nintendo.com/wiiu");
    });
    
});