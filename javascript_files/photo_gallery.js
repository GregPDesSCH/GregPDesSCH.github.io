/* 
    Gregory Desrosiers' Personal Website v2.0
    Photo Gallery Script
    
    Start Date: February 14, 2016
    End Date: May 27, 2016
    
    File Name: photo_gallery.js
    
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

// Constants (MUST NOT BE MODIFIED BY PROGRAM)
    
var ORIGINAL_ALBUMS_WII_U_PHOTO_DIRECTORY = "../../photos/albums_wii_u/",
    ORIGINAL_ALBUMS_RESPONSIVE_PHOTO_DIRECTORY = "../../photos/albums_responsive/",
    ORIGINAL_ALBUMS_PC_PHOTO_DIRECTORY = "../../photos/albums_pc/",
    ORIGINAL_ALBUM_THUMBNAILS_WII_U_PHOTO_DIRECTORY = "../../photos/thumbnails_wii_u/",
    ORIGINAL_ALBUM_THUMBNAILS_RESPONSIVE_PHOTO_DIRECTORY = "../../photos/thumbnails_responsive/",
    ORIGINAL_ALBUM_THUMBNAILS_PC_PHOTO_DIRECTORY = "../../photos/thumbnails_pc/",
    JSON_FILE_DIRECTORY = "../../photos/json_object_files/";

var ALBUM_1_DIRECTORY = "album_1_splatoon_stay_fresh/",
    ALBUM_2_DIRECTORY = "album_2_instagram_photos/",
    ALBUM_3_DIRECTORY = "album_3_university_of_waterloo/",
    ALBUM_4_DIRECTORY = "album_4_volunteering_involvement/",
    ALBUM_5_DIRECTORY = "album_5_most_liked_facebook_photos/",
    ALBUM_6_DIRECTORY = "album_6_selfies/",
    ALBUM_7_DIRECTORY = "album_7_some_personal_favourites/";

var ALBUM_1_JSON_FILE = "album_1_splatoon_stay_fresh.json",
    ALBUM_2_JSON_FILE = "album_2_instagram_photos.json",
    ALBUM_3_JSON_FILE = "album_3_university_of_waterloo.json",
    ALBUM_4_JSON_FILE = "album_4_volunteering_involvement.json",
    ALBUM_5_JSON_FILE = "album_5_most_liked_facebook_photos.json",
    ALBUM_6_JSON_FILE = "album_6_selfies.json",
    ALBUM_7_JSON_FILE = "album_7_some_personal_favourites.json";
    

// System Variable
var systemsForWebsite = {
    WII_U: 1,
    RESPONSIVE: 2,
    PC: 3
};
var currentSystemUsedForDisplayingTheWebsite;

// Album Variable
var albumSelection = {
    ALBUM_1_SPLATOON_STAY_FRESH: 1,
    ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS: 2,
    ALBUM_3_UNIVERSITY_OF_WATERLOO: 3,
    ALBUM_4_VOLUNTEERING_INVOLVEMENT: 4,
    ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS: 5,
    ALBUM_6_SELFIES: 6,
    ALBUM_7_SOME_PERSONAL_FAVOURITES: 7
};
var currentAlbumOpened;

function loadUpThumbnails(albumIndex)
{
    $("#thumbnailBlock").html("");
    
    var thumbnailDirectory, albumDirectory;
    
    if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.WII_U)
    {
        thumbnailDirectory = ORIGINAL_ALBUM_THUMBNAILS_WII_U_PHOTO_DIRECTORY;
        albumDirectory = ORIGINAL_ALBUMS_WII_U_PHOTO_DIRECTORY;
    }
    else if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.RESPONSIVE)
    {
        thumbnailDirectory = ORIGINAL_ALBUM_THUMBNAILS_RESPONSIVE_PHOTO_DIRECTORY;
        albumDirectory = ORIGINAL_ALBUMS_RESPONSIVE_PHOTO_DIRECTORY;
    }
    else
    {
        thumbnailDirectory = ORIGINAL_ALBUM_THUMBNAILS_PC_PHOTO_DIRECTORY;
        albumDirectory = ORIGINAL_ALBUMS_PC_PHOTO_DIRECTORY;
    }

    
    
    if (albumIndex == albumSelection.ALBUM_1_SPLATOON_STAY_FRESH)
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_1_DIRECTORY, albumDirectory + ALBUM_1_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_1_JSON_FILE);
    else if (albumIndex == albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS)    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_2_DIRECTORY, albumDirectory + ALBUM_2_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_2_JSON_FILE);
    else if (albumIndex == albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO)    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_3_DIRECTORY, albumDirectory + ALBUM_3_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_3_JSON_FILE);
    else if (albumIndex == albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT)    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_4_DIRECTORY, albumDirectory + ALBUM_4_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_4_JSON_FILE);
    else if (albumIndex == albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS)    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_5_DIRECTORY, albumDirectory + ALBUM_5_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_5_JSON_FILE);
    else if (albumIndex == albumSelection.ALBUM_6_SELFIES)    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_6_DIRECTORY, albumDirectory + ALBUM_6_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_6_JSON_FILE);
    else    
        loadUpThumbnailsForAlbums(thumbnailDirectory + ALBUM_7_DIRECTORY, albumDirectory + ALBUM_7_DIRECTORY, JSON_FILE_DIRECTORY + ALBUM_7_JSON_FILE);
    
    
}

/* 
    This function loads up all the thumbnails for the album requested.
    Code inspired by the following: http://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
*/
function loadUpThumbnailsForAlbums(thumbnailDirectory, albumDirectory, jsonFileDirectory) 
{
    
    $("#loadingMessageBlock").text("Now loading...");
    
    
    var listOfActualPhotoLocations = [], regexp = new RegExp("\.png|\.jpg"), arrayIndex = 0;
    
    
    /* 
        This is where we perform the requests to get the URLs for the thumbnail and album directories,
        as well as putting together the thumbnail elements where the image's source is the URL for the
        thumbnail, and one attribute of each element holds the URL to the actual picture in the album.
    */
    
    // Use the when-and-then method calls to control the sequence of calls to make them synchronous.
    // http://stackoverflow.com/questions/6250022/waiting-for-jquery-ajax-responses
    
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: jsonFileDirectory,
        success: function (albumData) {
            $.each(albumData.imageFiles, function(index, value) {
                listOfActualPhotoLocations.push();
                
                if (currentSystemUsedForDisplayingTheWebsite === systemsForWebsite.WII_U)
                    $("#thumbnailBlock").append("<div class=\"photoGalleryThumbnails\">" +
                                                    "<div class=\"thumbnails\" photoHref='" + albumDirectory + value + "'>" +
                                                        "<img src='" + thumbnailDirectory + value + "' alt='"  + thumbnailDirectory + value +  "' />" + 
                                                    "</div>" +
                                                "</div>").load();
                else if (currentSystemUsedForDisplayingTheWebsite === systemsForWebsite.RESPONSIVE)
                    $("#thumbnailBlock").append("<div class=\"photoGalleryThumbnails\">" +
                                                    "<div class=\"responsiveThumbnails\" photoHref='" + albumDirectory + value + "'>" +
                                                        "<img src='" + thumbnailDirectory + value + "' alt='"  + thumbnailDirectory + value +  "' />" + 
                                                    "</div>" +
                                                "</div>").load();
                else
                    $("#thumbnailBlock").append("<div class=\"photoGalleryThumbnails\"  >" +
                                                    "<div class=\"desktopThumbnails\" photoHref='" + albumDirectory + value + "' ng-click=\"respondToPhotoThumbnailClick()\">" +
                                                        "<img src='" + thumbnailDirectory + value + "' alt='"  + thumbnailDirectory + value +  "' />" + 
                                                    "</div>" +
                                                "</div>").load();
            });

            

            /* Display the caption that tells the user which album is opened. */
            var currentAlbumOpenedCaption = "";

            if (currentAlbumOpened == albumSelection.ALBUM_1_SPLATOON_STAY_FRESH)
                currentAlbumOpenedCaption = "Splatoon! Stay fresh!";
            else if (currentAlbumOpened == albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS)
                currentAlbumOpenedCaption = "Some of the most liked Instagram photos";
            else if (currentAlbumOpened == albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO)
                currentAlbumOpenedCaption = "University of Waterloo";
            else if (currentAlbumOpened == albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT)
                currentAlbumOpenedCaption = "Volunteering Involvement";
            else if (currentAlbumOpened == albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS)
                currentAlbumOpenedCaption = "Most Liked Facebook Photos";
            else if (currentAlbumOpened == albumSelection.ALBUM_6_SELFIES)
                currentAlbumOpenedCaption = "Selfies";
            else
                currentAlbumOpenedCaption = "Some Personal Favourites";


            $("#loadingMessageBlock").text("Current Album opened: " + currentAlbumOpenedCaption);

            /* 
                Perform a quick animation so that the user can see the thumbnails.
                http://stackoverflow.com/questions/6677035/jquery-scroll-to-element 
            */
            $('html, body').animate({
                scrollTop: $("#thumbnailBlock").offset().top
            }, 500);
            
            
        }
    });
    
    
}


var doc = document.currentScript;

$(function () {
    "use strict";
    
    // Identify the system this website page is running on.
    var idNumberForSystem = document.querySelector('script#photoGalleryScript').getAttribute("data-systemindex");
    if (idNumberForSystem == systemsForWebsite.WII_U)
        currentSystemUsedForDisplayingTheWebsite = systemsForWebsite.WII_U;
    else if (idNumberForSystem == systemsForWebsite.RESPONSIVE)
        currentSystemUsedForDisplayingTheWebsite = systemsForWebsite.RESPONSIVE;
    else
        currentSystemUsedForDisplayingTheWebsite = systemsForWebsite.PC;
    
    /* When the user clicks on one of the links, load the thumbnails accordingly. */
    
    $("#linkToAlbum1").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_1_SPLATOON_STAY_FRESH)
        {
            currentAlbumOpened = albumSelection.ALBUM_1_SPLATOON_STAY_FRESH;
            loadUpThumbnails(albumSelection.ALBUM_1_SPLATOON_STAY_FRESH);
        }
    });
    
    $("#linkToAlbum2").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS)
        {
            currentAlbumOpened = albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS;
            loadUpThumbnails(albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS);
        }
    });
    
    $("#linkToAlbum3").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO)
        {
            currentAlbumOpened = albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO;
            loadUpThumbnails(albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO);
        }
    });
    
    $("#linkToAlbum4").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT)
        {
            currentAlbumOpened = albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT;
            loadUpThumbnails(albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT);
        }
    });
    
    $("#linkToAlbum5").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS)
        {
            currentAlbumOpened = albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS;
            loadUpThumbnails(albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS);
        }
    });
    
    $("#linkToAlbum6").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_6_SELFIES)
        {
            currentAlbumOpened = albumSelection.ALBUM_6_SELFIES;
            loadUpThumbnails(albumSelection.ALBUM_6_SELFIES);
        }
    });
    
    $("#linkToAlbum7").click(function () {
        if (currentAlbumOpened != albumSelection.ALBUM_7_SOME_PERSONAL_FAVOURITES)
        {
            currentAlbumOpened = albumSelection.ALBUM_7_SOME_PERSONAL_FAVOURITES;
            loadUpThumbnails(albumSelection.ALBUM_7_SOME_PERSONAL_FAVOURITES);
        }
    });
    
    
    
    // http://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements
    $("#thumbnailBlock").on("click", "div.thumbnails, div.responsiveThumbnails, div.desktopThumbnails", function(eventObject){
        
            if ($("#responsiveCurrentImageDisplayed").attr("src") === "../../photos/page_photos responsive/photo_gallery_intro.png")
                $("#responsiveCurrentImageDisplayed").css({"height": "auto", "max-width": "100%"});
        
            if ($("#desktopSelectAPhotoMessage").is(":visible"))
            {
                $("#desktopSelectAPhotoMessage").hide();
                $("#desktopCurrentImageDisplayed").show();
            }
        
        
            var albumFromWhereThePhotoBelongs = "";
        
            if (currentAlbumOpened == albumSelection.ALBUM_1_SPLATOON_STAY_FRESH)
                albumFromWhereThePhotoBelongs = "Splatoon! Stay fresh!";
            else if (currentAlbumOpened == albumSelection.ALBUM_2_SOME_OF_THE_MOST_LIKED_INSTAGRAM_PHOTOS)
                albumFromWhereThePhotoBelongs = "Some of the most liked Instagram photos";
            else if (currentAlbumOpened == albumSelection.ALBUM_3_UNIVERSITY_OF_WATERLOO)
                albumFromWhereThePhotoBelongs = "University of Waterloo";
            else if (currentAlbumOpened == albumSelection.ALBUM_4_VOLUNTEERING_INVOLVEMENT)
                albumFromWhereThePhotoBelongs = "Volunteering Involvement";
            else if (currentAlbumOpened == albumSelection.ALBUM_5_MOST_LIKED_FACEBOOK_PHOTOS)
                albumFromWhereThePhotoBelongs = "Most Liked Facebook Photos";
            else if (currentAlbumOpened == albumSelection.ALBUM_6_SELFIES)
                albumFromWhereThePhotoBelongs = "Selfies";
            else
                albumFromWhereThePhotoBelongs = "Some Personal Favourites";
        
        
        
            if (currentSystemUsedForDisplayingTheWebsite !== systemsForWebsite.PC)
                $("#currentImageCaption").text("Original Album: " + albumFromWhereThePhotoBelongs);
            else
                $("#currentImageCaptionDesktop").text("Original Album: " + albumFromWhereThePhotoBelongs);
        
        
            /* 
                Scroll to the image caption.
                http://stackoverflow.com/questions/6677035/jquery-scroll-to-element 
            */
            if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.WII_U)
            {
                $("#currentImageDisplayed").attr("src", eventObject.currentTarget.getAttribute("photoHref")).load();
                $('html, body').animate({
                    scrollTop: $("#currentImageCaption").offset().top
                }, 500);
            }
            else if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.RESPONSIVE)
            {
                $("#responsiveCurrentImageDisplayed").attr("src", eventObject.currentTarget.getAttribute("photoHref")).load();
                $('html, body').animate({
                    scrollTop: $("#currentImageCaptionResponsive").offset().top
                }, 500);
            }
            else
            {
                $("#desktopCurrentImageDisplayed").attr("src", eventObject.currentTarget.getAttribute("photoHref")).load();
                $('html, body').animate({
                    scrollTop: $("#currentImageCaptionDesktop").offset().top
                }, 500);
            }
        }
    );
    
    
    /* 
        Scroll to the thumbnails
        http://stackoverflow.com/questions/6677035/jquery-scroll-to-element 
    */
    $("#currentImageCaption, #currentImageCaptionDesktop").click(function (){
        if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.WII_U)
            $('html, body').animate({
                scrollTop: $("#thumbnailBlock").offset().top
            }, 500);
        else if (currentSystemUsedForDisplayingTheWebsite == systemsForWebsite.RESPONSIVE)
            $('html, body').animate({
                scrollTop: $("#thumbnailBlockResponsive").offset().top
            }, 500);
        else
            $('html, body').animate({
                scrollTop: $("#loadingMessageBlock").offset().top
            }, 500);
    });
});