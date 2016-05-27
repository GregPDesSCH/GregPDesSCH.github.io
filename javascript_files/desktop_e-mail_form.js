/* 
    Gregory Desrosiers' Personal Website v2.0
    Desktop Menu (MVC App Controller)
    
    Start Date: April 19, 2016
    End Date: May 27, 2016
    
    File Name: desktop_e-mail_form.js
    
    
    
    Coding by Gregory Desrosiers
    Validated using JSHint version 2.9.1.
    
    Please see the Copyright file for info on copyrights.
    
    © 2016 Gregory Desrosiers. All rights reserved.
*/

app.controller('desktopEmailValidator', ['$scope', function($scope) {
    
    // Data Models
    $scope.masterObject = {};
    $scope.email = {
        emailAddress: '',
        type: 'Personal Comment',
        sendAsAnonymous: false,
        sendCopyToEmailAddress: false,
        typeOfBusinessInquiry: "",
        typeOfPublicRelations: "",
        subject: ''
    };
    
    
    
    // Event Listeners
    $scope.sendMessage = function (email){
        console.log($scope.email);
        $scope.masterObject = angular.copy(email);
    };
    
    
    
    
    // Element To-show flag functions
    $scope.isBusinessInquirySelected = function() {
        return $scope.email.type === "Business Inquiry";
    };
    
    $scope.isPublicRelationsSelected = function() {
        return $scope.email.type === "Public Relations";
    };
    
    $scope.phoneNumberProvidedIsNotValid = function (phoneNumber) {
        var re = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/;
        return !re.test(phoneNumber);
    }
    
    $scope.eMailAddressProvidedIsNotValid = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    }
    
    $scope.noBusinessInquiryOptionHasBeenSelected = function() {
        return $scope.email.typeOfBusinessInquiry === "";
    }
    
    $scope.theBusinessInquiryOptionSelectedIsOther = function() {
        return $scope.email.typeOfBusinessInquiry === "Other";
    }
    
    $scope.noPublicRelationsOptionHasBeenSelected = function() {
        return $scope.email.typeOfPublicRelations === "";
    }
    
    $scope.thePublicRelationsOptionSelectedIsOther = function() {
        return $scope.email.typeOfPublicRelations === "Other";
    }
}]);