/* 
    Gregory Desrosiers' Personal Website v2.0
    E-mail Form Script
    
    Start Date: March 22, 2016
    End Date:
    
    File Name: Read on My Blogs.js
    

    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

function focusOnNewWindow(newWindow) {
    if (newWindow)
        newWindow.focus();
    else
        alert('You must disable your popup blocker in order to open pages from clicking on the thumbnails.');
}


$(function () { 
    "use strict";
    
    var win;
    
    $("#SplatoonForPerseverance").click(function () {
        win = window.open("https://medium.com/@gregdesMED100/splatoon-for-perseverance-oh-it-s-my-new-years-resolution-f7ecc49bc177#.7ldnv6a42");
        focusOnNewWindow(win);
    });
    
    $("#UWaterlooAutism").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2015/11/my-uwaterloo-demonstration-to-accept.html");
        focusOnNewWindow(win);
    });
    
    $("#CircleCannonShooter").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2013/06/java-program-circle-cannon-shooter.html");
        focusOnNewWindow(win);
    });
    
    $("#TheMentallyHandicappedStranger").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2013/06/the-asperger-computer-second-edition.html");
        focusOnNewWindow(win);
    });
    
    $("#ElementarySchoolGraduation").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2013/06/the-asperger-computer-second-edition.html");
        focusOnNewWindow(win);
    });
    
    $("#N64Games").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2013/06/the-asperger-computer-second-edition.html");
        focusOnNewWindow(win);
    });
    
    $("#LongueuilRTL83").click(function () {
        win = window.open("http://gregorypdesrosiersmontreal.blogspot.ca/2012/12/longueuil-rtl-83-sec-5-english-short.html");
        focusOnNewWindow(win);
    });
});