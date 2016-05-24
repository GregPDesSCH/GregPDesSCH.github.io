/* 
    Gregory Desrosiers' Personal Website v2.0
    Photo Gallery Script
    
    Start Date: February 14, 2016
    End Date:
    
    File Name: Photo Gallery.js
    
    
    
    Validated using JSHint version 2.9.1.
    Coding by Gregory Desrosiers
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

// Constants (MUST NOT BE MODIFIED BY PROGRAM)
    
var ORIGINAL_ALBUMS_WII_U_PHOTO_DIRECTORY = "../../Photos/Albums (Wii U)/",
    ORIGINAL_ALBUMS_RESPONSIVE_PHOTO_DIRECTORY = "../../Photos/Albums (Responsive)/",
    ORIGINAL_ALBUMS_PC_PHOTO_DIRECTORY = "../../Photos/Albums (PC)/",
    ORIGINAL_ALBUM_THUMBNAILS_WII_U_PHOTO_DIRECTORY = "../../Photos/Thumbnails (Wii U)/",
    ORIGINAL_ALBUM_THUMBNAILS_RESPONSIVE_PHOTO_DIRECTORY = "../../Photos/Thumbnails (Responsive)/",
    ORIGINAL_ALBUM_THUMBNAILS_PC_PHOTO_DIRECTORY = "../../Photos/Thumbnails (PC)/",
    JSON_FILE_DIRECTORY = "../../Photos/JSON Object Files/";

var ALBUM_1_DIRECTORY = "Album 1 - Splatoon! Stay fresh!/",
    ALBUM_2_DIRECTORY = "Album 2 - Some of the most liked Instagram photos/",
    ALBUM_3_DIRECTORY = "Album 3 - University of Waterloo/",
    ALBUM_4_DIRECTORY = "Album 4 - Volunteering Involvement/",
    ALBUM_5_DIRECTORY = "Album 5 - Most Liked Facebook Photos/",
    ALBUM_6_DIRECTORY = "Album 6 - Selfies/",
    ALBUM_7_DIRECTORY = "Album 7 - Some Personal Favourites/";

var ALBUM_1_JSON_FILE = "Album 1.json",
    ALBUM_2_JSON_FILE = "Album 2.json",
    ALBUM_3_JSON_FILE = "Album 3.json",
    ALBUM_4_JSON_FILE = "Album 4.json",
    ALBUM_5_JSON_FILE = "Album 5.json",
    ALBUM_6_JSON_FILE = "Album 6.json",
    ALBUM_7_JSON_FILE = "Album 7.json";
    

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
    console.log("Thumbnail directory: " + thumbnailDirectory);
    console.log("Album directory: " + albumDirectory);
    console.log("JSON File Directory: " + jsonFileDirectory);
    
    $("#loadingMessageBlock").text("Now loading...");
    
    
    var listOfActualPhotoLocations = [], regexp = new RegExp("\.png|\.jpg"), arrayIndex = 0;
    //console.log(albumDirectory);
    
    
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
            console.log("Album Calls Directory: " + albumData);
            console.log("Album Calls Files: " + albumData.imageFiles);
            console.log("Album Calls Files: " + albumData.imageFiles);
            /*$(albumData).find("a").filter(function () {return regexp.test($(this).text());}).each(function () {
                //console.log($(this).html());
                //var albumPictureFilename = this.href.replace(window.location.host, "").replace("http://", "");
                //console.log("File Name: " + albumPictureFilename);
                console.log(albumDirectory + $(this).html());
                listOfActualPhotoLocations.push(albumDirectory + $(this).html());
                //console.log(listOfActualPhotoLocations);
            });*/

            $.each(albumData.imageFiles, function(index, value) {
                console.log("Current File:" + value);
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

            //console.log(listOfActualPhotoLocations);
            
            
            
            
            
            
            
            
            
            
            
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


/* 
    This function loads up all the photos for the album requested. 
    Code inspired by the following: http://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery

function loadUpAlbumPhotos(albumDirectory, numberOfPhotos)
{
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: thumbnailDirectory,
        success: function (data) {
            //List all .png file names in the page
            var regexp = new Regexp("\.png|\.jpg");
            $(data).find("a").filter(function () {return regexp.test($(this).text());}).each(function () {
                var filename = this.href.replace(window.location, "").replace("http://", "");
                //$("body").append("<img src='" + dir + filename + "'>");
            });
        }
    });
}*/

var doc = document.currentScript;

$(function () {
    "use strict";
    
    //console.log(document);
    //console.log(document.currentScript);
    
    //console.log(document.querySelector('script#photoGalleryScript'));
    //console.log(document.querySelector('script#photoGalleryScript').getAttribute("data-systemindex"));
    //console.log(document.currentScript.getAttribute("data-systemindex"));
    
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
        
            if ($("#responsiveCurrentImageDisplayed").attr("src") === "../../Photos/Page Photos (Responsive)/Photo Gallery Intro.png")
                $("#responsiveCurrentImageDisplayed").css({"height": "auto", "max-width": "100%"});
        
            if ($("#desktopSelectAPhotoMessage").is(":visible"))
            {
                $("#desktopSelectAPhotoMessage").hide();
                $("#desktopCurrentImageDisplayed").show();
            }
        
            //console.log("Error?");
            //console.log(eventObject.currentTarget.getAttribute("photoHref"));
        
        
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
        
        
            //console.log("Original HREF: " + eventObject.currentTarget.getAttribute("photoHref"));
        
            if (currentSystemUsedForDisplayingTheWebsite !== systemsForWebsite.PC)
                $("#currentImageCaption").text("Original Album: " + albumFromWhereThePhotoBelongs);
            else
                $("#currentImageCaptionDesktop").text("Original Album: " + albumFromWhereThePhotoBelongs);
        
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
        
            /* 
                Scroll to the image caption.
                http://stackoverflow.com/questions/6677035/jquery-scroll-to-element 
            */
            
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