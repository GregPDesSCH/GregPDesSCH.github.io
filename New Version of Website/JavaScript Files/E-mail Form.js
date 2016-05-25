/* 
    Gregory Desrosiers' Personal Website v2.0
    E-mail Form Script
    
    Start Date: February 14, 2016
    End Date: April 5, 2016
    
    File Name: E-mail Form.js
    
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

/* Enum Set for the different message types */
var currentMessageType = {
    COMMENT: 1,
    COMPLAINT: 2,
    COMPLEMENT: 3,
    BUSINESS_INQUIRY: 4,
    PUBLIC_RELATIONS: 5
};

var currentMessageTypeIndex = currentMessageType.COMMENT;


// Update the e-mail form when the type is changed
function updateEmailForm() {
    "use strict";
    
    $("#contactMeWarningMessages").html("");
    $("#contactMeSendingStatus").html("");
    $(".inputMissingBorder").removeClass("inputMissingBorder");
    
     /* Checkboxes */
    if ($("#sendAsAnonymousCheckbox").is(':checked'))
    {
        $("#nameBlock").hide();
        $("#eMailAddressBlock").hide();
        $("#phoneNumberBlock").hide();
    } else 
    {
        $("#nameBlock").show();
        $("#eMailAddressBlock").show();
        $("#phoneNumberBlock").show();
    }
    
    if ($("#sendCopyToEMailAddressCheckbox").is(':checked'))
    {
        if ($("#sendAsAnonymousCheckbox").is(':checked'))
            $("#eMailAddressBlock").show();
        
        return;
    }
    else
    {
        if ($("#sendAsAnonymousCheckbox").is(':checked'))
            $("#eMailAddressBlock").hide();
        
        return;
    }
    
    /* Radio Buttons */
    if (currentMessageTypeIndex === currentMessageType.BUSINESS_INQUIRY ||
       currentMessageTypeIndex === currentMessageType.PUBLIC_RELATIONS)
    {
        if ($("#sendAsAnonymousCheckbox").is(':checked'))
        {
            $("#nameBlock").show();
            $("#eMailAddressBlock").show();
            $("#phoneNumberBlock").show();
        }
        $("#sendAnAnonymousMessageBlock").hide();
    }
    else
    {
        if ($("#sendAsAnonymousCheckbox").is(':checked'))
        {
            $("#nameBlock").hide();
            $("#phoneNumberBlock").hide();
            if ($("#sendCopyToEMailAddressCheckbox").is(':checked'))
                $("#eMailAddressBlock").show();
        }
        $("#sendAnAnonymousMessageBlock").show();
    }
    
    
    /* Business Inquiry or Public Relations Block */
    if (currentMessageTypeIndex === currentMessageType.BUSINESS_INQUIRY)
        $(".businessInquiryBlock").show();
    else
        $(".businessInquiryBlock").hide();
    
    if (currentMessageTypeIndex === currentMessageType.PUBLIC_RELATIONS)
        $(".publicRelationsBlock").show();
    else
    {
        $(".publicRelationsBlock").hide();
        if (currentMessageTypeIndex === currentMessageType.BUSINESS_INQUIRY)
        {
            $("#companyNameBlock").show();
            $("#positionOrOccupationBlock").show();
            $("#linkedinProfileBlock").show();
        }
        
    }
}


// From http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
// E-mail Validator (using regular expression)
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Based on http://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
// Phone Number validator (using regular expression)
function validatePhoneNumber(phoneNumber) {
    var re = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/;
    return re.test(phoneNumber);
}


// Based on http://stackoverflow.com/questions/13532149/jquery-url-validation-needs-to-contain-linkedin-com
// LinkedIn URL validator (using regular expression)
function validateLinkedInURL(linkedInURL) {
    var re = /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return re.test(linkedInURL);
}


// 
function addHeaderToErrorMessages() {
    if ($("#contactMeWarningMessages").html().trim().length === 0)
        $("#contactMeWarningMessages").html("<div id=\"contactMeWarningHeader\">Your message could not be sent. Please review and make changes based on what\'s below:</div>");
}



$(function () {
    "use strict";
    
    
    /* Radio Buttons - event listeners */
    $("#personalCommentRadioButton").click(function () {
        if (currentMessageTypeIndex != currentMessageType.COMMENT)
        {
            currentMessageTypeIndex = currentMessageType.COMMENT;
            updateEmailForm();
        }
    });
    
    $("#complaintRadioButton").click(function () {
        if (currentMessageTypeIndex != currentMessageType.COMPLAINT)
        {
            currentMessageTypeIndex = currentMessageType.COMPLAINT;
            updateEmailForm();
        }
    });
    
    $("#complementRadioButton").click(function () {
        if (currentMessageTypeIndex != currentMessageType.COMPLEMENT)
        {
            currentMessageTypeIndex = currentMessageType.COMPLEMENT;
            updateEmailForm();
        }
    });
    
    $("#businessInquiryRadioButton").click(function () {
        if (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY)
        {
            currentMessageTypeIndex = currentMessageType.BUSINESS_INQUIRY;
            updateEmailForm();
        }
    });
    
    $("#publicRelationsRadioButton").click(function () {
        if (currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS)
        {
            currentMessageTypeIndex = currentMessageType.PUBLIC_RELATIONS;
            updateEmailForm();
        }
    });
        
    /* Checkbox listeners */
    $("#sendAsAnonymousCheckbox").change(function () {
        updateEmailForm();
    });
    
    $("#sendCopyToEMailAddressCheckbox").change(function () {
        updateEmailForm();
    });
    
    
    
    /* Send Message algorithm */
    $("#sendMessageButton").click(function () {
        
        /* 
            Validation Code    
        */
        
        /*  
        if ($("#sendCopyToEMailAddressCheckbox").is(":checked") && $("#sendAsAnonymousCheckbox").is(":checked") && (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS) 
            || !$("#sendAsAnonymousCheckbox").is(":checked") )*/
        
        //console.log(($('#eMailAddressField').val().trim().length == 0));
        
        //console.log((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS));
        
        //console.log((currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS && (!$("#sendAsAnonymousCheckbox").is(':checked') || ($("#sendAsAnonymousCheckbox").is(':checked') && $("#sendCopyToEMailAddressCheckbox").is(':checked')) )));
        
        /*console.log(($('#eMailAddressField').val().trim().length == 0) &&
            // Situation where we have a business inquiry or a public relations message
           ((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS) ||
            // All other situations 
           (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS && (!$("#sendAsAnonymousCheckbox").is(':checked') || ($("#sendAsAnonymousCheckbox").is(':checked') && $("#sendCopyToEMailAddressCheckbox").is(':checked')) ))));*/
        
        
        $("#contactMeWarningMessages").html("");
        $("#contactMeSendingStatus").html("");
        
        if ($("#nameTextField").val().trim().length === 0 && (!$("#sendAsAnonymousCheckbox").is(':checked') ||
                currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS)) 
        {
            $("#nameTextField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">Please enter your name in the \"Name\" field.</div>");
        }
        else
            $("#nameTextField").removeClass("inputMissingBorder");
        
        
        /* No e-mail address provided? */
        //console.log($('#eMailAddressField').val().trim().length === 0);
        if (($('#eMailAddressField').val().trim().length === 0) &&
            /* Situation where we have a business inquiry or a public relations message */
           ((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS) ||
            /* All other situations */
           (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS && (!$("#sendAsAnonymousCheckbox").is(':checked') || ($("#sendAsAnonymousCheckbox").is(':checked') && $("#sendCopyToEMailAddressCheckbox").is(':checked')) ))))
        {
            
            //console.log(1);
            $("#eMailAddressField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">You are missing an e-mail address. Please enter it in the \"E-mail Address\" field before sending.</div>");
        }
        else
        {
            //console.log(2);
            $("#eMailAddressField").removeClass("inputMissingBorder");
        }
        
        
        /* Do we have a valid e-mail address? */
        //console.log($('#eMailAddressField').val().trim().length != 0);
        if ($('#eMailAddressField').val().trim().length !== 0 && !validateEmail($('#eMailAddressField').val()) &&
            /* Situation where we have a business inquiry or a public relations message */
           ((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS) ||
            /* All other situations */
           (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS && (!$("#sendAsAnonymousCheckbox").is(':checked') || ($("#sendAsAnonymousCheckbox").is(':checked') && $("#sendCopyToEMailAddressCheckbox").is(':checked')) ))))
        {
            //console.log(3);
            $("#eMailAddressField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">The e-mail address you\'ve provided is invalid. It has to be a form of the following: johndoe@example.com. Please provide a valid e-mail address.</div>");
        }
        else if ($('#eMailAddressField').val().trim().length !== 0 && $("#eMailAddressField").hasClass("inputMissingBorder"))
        {
            //console.log(4);
            $("#eMailAddressField").removeClass("inputMissingBorder");
        }
        
        
        /* Do we have a phone number? */
        if (($('#phoneNumberTextField').val().trim().length !== 0 && !validatePhoneNumber($('#phoneNumberTextField').val())) &&
            /* Situation where we have a business inquiry or a public relations message */
           ((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY || currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS) ||
            /* All other situations */
           (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS && (!$("#sendAsAnonymousCheckbox").is(':checked') || ($("#sendAsAnonymousCheckbox").is(':checked') && $("#sendCopyToEMailAddressCheckbox").is(':checked')) ))))
        {
            $("#phoneNumberTextField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"phoneNumberWarningMessage\">The phone number you provided is not in a valid form. It must be one of the following:" +
                                    "<div>(XYY) XYY YYYY</div><div>(XYY) XYY-YYYY</div><div>(XYY)-XYY YYYY</div><div>XYY XYY YYYY</div><div>XYY XYY-YYYY</div><div>XYY-XYY YYYY</div><div>XYY-XYY-YYYY</div><div>(XYY)-XYY-YYYY</div><div>(XYY)XYY YYYY</div><div class=\"phoneNumberWarningMessage\">(XYY)XYY-YYYY</div>" + 
                                    "where X is a digit on 2-9 and Y is a digit on 0-9.</div>");
        }
        else
            $("#phoneNumberTextField").removeClass("inputMissingBorder");
        
        
        
        
        /* If the user wants to send a business inquiry, did they make a choice? */
        if (currentMessageTypeIndex === currentMessageType.BUSINESS_INQUIRY && $("#typeOfBusinessInquiryComboBox").val() === "")
        {
            $("#typeOfBusinessInquiryComboBox").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">Please select a type of business inquiry.</div>");
        }
        else
            $("#typeOfBusinessInquiryComboBox").removeClass("inputMissingBorder");
        
        
        /* If the user wants to send a public relations message, did they make a choice? */
        if (currentMessageTypeIndex === currentMessageType.PUBLIC_RELATIONS && $("#typeOfPublicRelationsComboBox").val() === "")
        {
            $("#typeOfPublicRelationsComboBox").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">Please select a type of public relations message.</div>");
        }
        else
            $("#typeOfPublicRelationsComboBox").removeClass("inputMissingBorder");
        
        
        
        /* Is the subject field empty? */
        if ($("#subjectTextField").val().trim().length === 0 && (($("#typeOfPublicRelationsComboBox").val() === "Other" && currentMessageTypeIndex === currentMessageType.PUBLIC_RELATIONS) || (currentMessageTypeIndex === currentMessageType.BUSINESS_INQUIRY && $("#typeOfBusinessInquiryComboBox").val() === "Other")))
        {
            $("#subjectTextField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">Please specify a subject for your e-mail.</div>");
            
        }
        else
            $("#subjectTextField").removeClass("inputMissingBorder");
        
        
        
        /* Check that the URL is in the proper format if the user decides to submit their LinkedIn URL in the message. */
        if ($('#linkedInProfileTextField').val().length !== 0 && !validateLinkedInURL($('#linkedInProfileTextField').val()))
        {
            $("#linkedInProfileTextField").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">The URL you provided for your LinkedIn profile is not valid. Please enter a proper URL to your LinkedIn profile by going on your profile page, then copying and pasting the URL from the right of the \"Contact Info\" button. The first four letters of the domain name must be \"www.\"</div>");
        }
        else
            $("#linkedInProfileTextField").removeClass("inputMissingBorder");
        
        
        
        
        /* No message is written in the Message text area. */
        if ($('#messageBox').val().trim().length === 0)
        {
            $("#messageBox").addClass("inputMissingBorder");
            addHeaderToErrorMessages();
            $("#contactMeWarningMessages").html($("#contactMeWarningMessages").html() + "<div class=\"contactMeWarningMessageBlocks\">You are missing a message. Please enter it in the \"Message\" textbox before sending.</div>");
        }
        else
            $("#messageBox").removeClass("inputMissingBorder");
        
        
        
        
        /* An error exists in the form. */
        if ($("#contactMeWarningMessages").html().trim().length !== 0)
            return;
        
        
         
            
            
        /* If there's no non-whitespace characters in the subject field, a confirmation dialog pops up. */
        if ($('#subjectTextField').val().trim().length === 0)
        {
            if (!confirm("Are you sure you want to send your e-mail without a subject?\n\nClick OK to send, or Cancel to change what you've entered in the e-mail form."))
                return;
        }
        
        
        
        /* Send e-mail */
        $("#contactMeSendingStatus").text("Now sending message...");
        
        
        // Use fields for dynamic manipulation, already using the message box as the message.
        var eMailAddress = "";
        var nameOfSender = "";
        var dataObject = {
            message: $('#messageBox').val().trim()
        };
        
        
        // Assign our e-mail address, then put it into the data object.
        // We also check to see if we are to get the name.
        if ($("#sendAsAnonymousCheckbox").is(':checked') && (currentMessageTypeIndex != currentMessageType.BUSINESS_INQUIRY && currentMessageTypeIndex != currentMessageType.PUBLIC_RELATIONS)) {
            eMailAddress = "Anonymous";
            nameOfSender = "Anonymous User";
        }
        else
        {
            eMailAddress = $('#eMailAddressField').val().trim();
            nameOfSender = $("#nameTextField").val();
        }
        
        dataObject._replyto = eMailAddress;
        
        
        
        
        
        
        
        /* 
        var currentMessageType = {
    COMMENT: 1,
    COMPLAINT: 2,
    COMPLEMENT: 3,
    BUSINESS_INQUIRY: 4,
    PUBLIC_RELATIONS: 5
};
        */
        
        // Now we determine what our message subject is. 
        
        dataObject.subject = nameOfSender + " - ";
        
        if (currentMessageTypeIndex == currentMessageType.COMMENT)
            dataObject.subject = dataObject.subject + "Comment: ";
        else if (currentMessageTypeIndex == currentMessageType.COMPLAINT)
            dataObject.subject = dataObject.subject + "Complaint: ";
        else if (currentMessageTypeIndex == currentMessageType.COMPLEMENT)
            dataObject.subject = dataObject.subject + "Complement: ";
        else if (currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY)
        {
            dataObject.subject = "Business Inquiry | " + nameOfSender;
            
            if ($("#companyName").val().trim().length !== 0)
                dataObject.subject = dataObject.subject + " of " + $("#companyName").val() + " ";
            
            if ($("#positionOrOccupation").val().trim().length !== 0)
                dataObject.subject = dataObject.subject + "(" + $("#positionOrOccupation").val() + ") "; 
            
            if ($("#typeOfBusinessInquiryComboBox").val() !== "")
                dataObject.subject = dataObject.subject + " | " + $("#typeOfBusinessInquiryComboBox").val() + " : ";
        }
        else
        {
            dataObject.subject = "Public Relations | " + nameOfSender;
            
            if ($("#companyName").val().trim().length !== 0)
                dataObject.subject = dataObject.subject + " of " + $("#companyName").val() + " ";
            
            if ($("#positionOrOccupation").val().trim().length !== 0)
                dataObject.subject = dataObject.subject + "(" + $("#positionOrOccupation").val() + ") ";
            
            if ($("#typeOfPublicRelationsComboBox").val() !== "")
                dataObject.subject = dataObject.subject + " | " + $("#typeOfPublicRelationsComboBox").val() + " : ";
        }
        
        
        // If we have a subject in our form, we append it to our data object.
        if ($('#subjectTextField').val().trim().length !== 0)
            dataObject.subject = dataObject.subject + $('#subjectTextField').val();
        else
            dataObject.subject = dataObject.subject + "No Subject Provided";
        
        
        if ($("#phoneNumberTextField").val().length !== 0)
            dataObject.subject = dataObject.subject + " || Phone: " + $("#phoneNumberTextField").val();
        
        
        if ((currentMessageTypeIndex == currentMessageType.BUSINESS_INQUIRY ||
           currentMessageTypeIndex == currentMessageType.PUBLIC_RELATIONS) &&
           $("#linkedInProfileTextField").val().length !== 0)
            dataObject.message = "LinkedIn URL: " + $("#linkedInProfileTextField").val() + "\n\n" + $('#messageBox').val().trim();
        
            
        
        //console.log(dataObject);
            
            
        $.ajax({
            url: "//formspree.io/gdesrosi@uwaterloo.ca", 
            method: "POST",
            data: dataObject,
            dataType: "json",
            success: function() {
                
                if ($("#sendCopyToEMailAddressCheckbox").is(':checked'))
                {
                    // Get rid of the reply-to field for user's convenience.
                    delete dataObject._replyto;
                    
                    $.ajax({
                        url:"//formspree.io/" + $('#eMailAddressField').val().trim(),
                        method: "POST",
                        data: dataObject,
                        dataType: "json",
                        error: function(jqXHR, textStatus, errorThrown) {
                            $("#contactMeWarningMessages").html("<div class=\"contactMeWarningMessageBlocks\">We were unable to send you a copy of your e-mail.</div><div class=\"contactMeWarningMessageBlocks\"><div>Error Code: " + jqXHR.status.toString() + "</div><div>Error thrown: " + errorThrown + "</div></div>");
                        }
                        
                    });
                }
                $("#contactMeSendingStatus").text("Message sent! It will be looked at as soon as possible. Thank you!");
            },
            
            error: function(jqXHR) {
                $("#contactMeSendingStatus").text("");
                $("#contactMeWarningMessages").html("<div class=\"contactMeWarningMessageBlocks\">Something went wrong with sending your e-mail.</div><div class=\"contactMeWarningMessageBlocks\">Error Code: " + jqXHR.status.toString() +  "</div><div class=\"contactMeWarningMessageBlocks\">Please try again.</div>");
            }
         });
        
    });
});


