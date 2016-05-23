/* 
    Gregory Desrosiers' Personal Website v2.0
    Home Page Image Carousel
    
    Start Date: April 2, 2016
    End Date:
    
    File Name: Home Page.js
    
    
    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

var photoIndices = {
    PHOTO_1: 1,
    PHOTO_2: 2,
    PHOTO_3: 3
};
var currentPhotoBeingViewed;

function removeTheWhiteCircleFromAPhotoCircle() 
{
    if ($("#homePictureCarouselCircle1").hasClass("imageCurrentlyOpened"))
        $("#homePictureCarouselCircle1").removeClass("imageCurrentlyOpened");
    else if ($("#homePictureCarouselCircle2").hasClass("imageCurrentlyOpened"))
        $("#homePictureCarouselCircle2").removeClass("imageCurrentlyOpened");
    else
        $("#homePictureCarouselCircle3").removeClass("imageCurrentlyOpened");
}

function addTheWhiteCircleInTheSelectedPhotoCircle(photoIndex) 
{
    if (photoIndex == photoIndices.PHOTO_1)
        $("#homePictureCarouselCircle1").addClass("imageCurrentlyOpened");
    else if (photoIndex == photoIndices.PHOTO_2)
        $("#homePictureCarouselCircle2").addClass("imageCurrentlyOpened");
    else
        $("#homePictureCarouselCircle3").addClass("imageCurrentlyOpened");
}

function respondToLeftClick()
{
    if (currentPhotoBeingViewed == photoIndices.PHOTO_1)
        currentPhotoBeingViewed = photoIndices.PHOTO_3;
    else if (currentPhotoBeingViewed == photoIndices.PHOTO_2)
        currentPhotoBeingViewed = photoIndices.PHOTO_1;
    else
        currentPhotoBeingViewed = photoIndices.PHOTO_2;
    
    removeTheWhiteCircleFromAPhotoCircle();
    addTheWhiteCircleInTheSelectedPhotoCircle(currentPhotoBeingViewed);
    performFadeOutAndFadeInAnimations();
    
}

function respondToRightClick()
{
    if (currentPhotoBeingViewed == photoIndices.PHOTO_1)
        currentPhotoBeingViewed = photoIndices.PHOTO_2;
    else if (currentPhotoBeingViewed == photoIndices.PHOTO_2)
        currentPhotoBeingViewed = photoIndices.PHOTO_3;
    else
        currentPhotoBeingViewed = photoIndices.PHOTO_1;
    
    removeTheWhiteCircleFromAPhotoCircle();
    addTheWhiteCircleInTheSelectedPhotoCircle(currentPhotoBeingViewed);
    performFadeOutAndFadeInAnimations();
}

function performFadeOutAndFadeInAnimations()
{
    var $photoToFadeIn = null, $photoToFadeOut = null;
    
    if (currentPhotoBeingViewed == photoIndices.PHOTO_1)
        $photoToFadeIn = $("#homePagePhoto1");
    else if (currentPhotoBeingViewed == photoIndices.PHOTO_2)
        $photoToFadeIn = $("#homePagePhoto2");
    else
        $photoToFadeIn = $("#homePagePhoto3");
    
    /* http://stackoverflow.com/questions/178325/checking-if-an-element-is-hidden */
    if ($("#homePagePhoto1").is(":visible"))
        $photoToFadeOut = $("#homePagePhoto1");
    else if ($("#homePagePhoto2").is(":visible"))
        $photoToFadeOut = $("#homePagePhoto2");
    else
        $photoToFadeOut = $("#homePagePhoto3");
    
    
    /* http://stackoverflow.com/questions/6287308/jquery-fade-out-then-fade-in */
    $photoToFadeOut.fadeOut(100, function() {
       $photoToFadeIn.fadeIn(100); 
    });
}



$(function () {
    "use strict";
    
    /* Initialization */
    currentPhotoBeingViewed = photoIndices.PHOTO_1;
    
    
    /* Click listeners */
    $("#homePictureCarouselCircle1").click(function() {
        if (currentPhotoBeingViewed != photoIndices.PHOTO_1)
        {
            removeTheWhiteCircleFromAPhotoCircle();
            addTheWhiteCircleInTheSelectedPhotoCircle(photoIndices.PHOTO_1);
            currentPhotoBeingViewed = photoIndices.PHOTO_1;
            performFadeOutAndFadeInAnimations();
        }
    });
    
    $("#homePictureCarouselCircle2").click(function() {
        if (currentPhotoBeingViewed != photoIndices.PHOTO_2)
        {
            removeTheWhiteCircleFromAPhotoCircle();
            addTheWhiteCircleInTheSelectedPhotoCircle(photoIndices.PHOTO_2);
            currentPhotoBeingViewed = photoIndices.PHOTO_2;
            performFadeOutAndFadeInAnimations();
        }
    });
    
    $("#homePictureCarouselCircle3").click(function() {
        if (currentPhotoBeingViewed != photoIndices.PHOTO_3)
        {
            removeTheWhiteCircleFromAPhotoCircle();
            addTheWhiteCircleInTheSelectedPhotoCircle(photoIndices.PHOTO_3);
            currentPhotoBeingViewed = photoIndices.PHOTO_3;
            performFadeOutAndFadeInAnimations();
        }
    });
    
    $("#pictureCarouselLeftButtonSet").click(function() {
        respondToLeftClick();
    });
    
    $("#pictureCarouselLeftButtonSetResponsive").click(function() {
        respondToLeftClick();
    });
    
    $("#pictureCarouselRightButtonSet").click(function() {
        respondToRightClick();
    });
    
    $("#pictureCarouselRightButtonSetResponsive").click(function() {
        respondToRightClick();
    });
});