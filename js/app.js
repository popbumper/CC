var blogSample = angular.module('blogSample', ['ngRoute','ui.bootstrap']);
var db;
var dbCreated = false;

var app = {
    // Application Constructor
    initialize: function() {

        console.log("initializing");
        this.bindEvents();
        console.log("initializing done");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        var viewportScale = 1 / window.devicePixelRatio;
		$("#viewport").attr("content","user-scalable=no, initial-scale="+viewportScale+", minimum-scale=0.2, maximum-scale=2, width=device-width");

		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var age = document.getElementById("age").value;
		var username = document.getElementById("username").value;
		var password = document.getElementById("psw").value;

		db = window.openDatabase("RegistrationDB", "1.0", "Registration", 200000);
		if (dbCreated)
		else
		db.transaction(populateDB, transaction_error, populateDB_success);



    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    },

    onErr: function(error)
    {
        alert('Unable to get your location. Without location you will not be able to use navigate feature! Error:' + '\n' + error.message);
    },

    onSuccess: function(position)
    {
        blogSample.latitude = position.coords.latitude;
        blogSample.longitude = position.coords.longitude;
    }
};
