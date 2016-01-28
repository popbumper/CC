var clubCare = angular.module('clubCare', ['ngRoute','ui.bootstrap']);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Puship=null;
var watchId=null;
var currentdeviceid=null;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

		Puship = window.plugins.puship;
		Puship.EnableLog = true;
		Puship.EnableHtmlLog = true;
		Puship.PushipAppId = "Y1vJJkgR9m61W4q"; // I.E.: puship_id = "h1mCVGaP9dtGnwG"
		Puship.Common.Log("device uuid: " + device.uuid);

		Puship.Common.OnPushReceived(function(event) {
			console.log("Push received");
			navigator.notification.alert("Message: " + event.notification.Alert);
			console.log("Sound: " + event.notification.Sound);
			console.log("Badge: " + event.notification.Badge);
			//console.log("Param1: " + event.notification.Param1);

		});

		if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
			var GCMCode = "102955784975"; // This is the senderID provided by Google. I.E.: "28654934133"
			Puship.GCM.Register(GCMCode,
			{
				successCallback: function (pushipresult){
					currentdeviceid=pushipresult.DeviceId;
					navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
				},
				failCallback: function (pushipresult){
					navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
				}
			});
		} else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
			Puship.APNS.Register(
			{
				successCallback: function (pushipresult){
					currentdeviceid=pushipresult.DeviceId;
					navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
				},
				failCallback: function (pushipresult){
					navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
				}
			});
		} else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
			Puship.WP.Register(
			{
				successCallback: function (pushipresult){
					currentdeviceid=pushipresult.DeviceId;
					navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
				},
				failCallback: function (pushipresult){
					navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
				}
			});
		} else {
			Console.log("Not supported platform");
		}

    },
	registerPositionEvent: function()
	{
		Puship.Common.RegisterCurrentPosition(
		{
			minimumAccuracy: 100,
			callMinutes: 5,
			enableHighAccuracy: true,
			successCallback: function (regresult){
				console.log("RegisterCurrentPosition done");
				navigator.notification.alert("RegisterCurrentPosition done");
			},
			failCallback: function (regresult){
				console.log("error during RegisterCurrentPosition: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during RegisterCurrentPosition: "+ JSON.stringify(regresult));
			}
		});
	},
	activateWatch: function()
	{
		watchId=Puship.Common.WatchPosition({ minimumAccuracy: 5000, callMinutes: 1, enableHighAccuracy: true });
	},
	deActivateWatch: function()
	{
		if (watchId!=null){
			Puship.Common.ClearWatch(watchId);
		}
	},
	getPushByCurrentPosition: function(){
		Puship.Common.GetPushMessages(
			{
			//limit: 10, //max limit is 50 default is 20
			//offset: 100,
			byCurrentPosition: true,
			successCallback: function (regresult){
				console.log("GetPushMessages done");

				if (regresult.length>0)
				{
					navigator.notification.alert("Message 1 of "+regresult.length+": "+regresult[0].Message);
				}else{
					navigator.notification.alert("No message found");
				}
			},
			failCallback: function (regresult){
				console.log("error during GetPushMessages by Pos: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during GetPushMessages by Pos: "+ JSON.stringify(regresult));
			}
		});
	},
	getPush: function(){
		Puship.Common.GetPushMessages(
			{
			//limit: 10, //max limit is 50 default is 20
			//offset: 100,
			successCallback: function (regresult){
				console.log("GetPushMessages done");

				if (regresult.length>0)
				{
					navigator.notification.alert("Message 1 of "+regresult.length+": "+regresult[0].Message);
				}else{
					navigator.notification.alert("No message found");
				}
			},
			failCallback: function (regresult){
				console.log("error during GetPushMessages: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during GetPushMessages: "+ JSON.stringify(regresult));
			}
		});
	},
	getPushByLibra: function(){
		Puship.Common.GetPushMessages(
			{
			//limit: 10, //max limit is 50 default is 20
			//offset: 100,
			tag: "Libra",
			successCallback: function (regresult){
				console.log("GetPushMessages done");

				if (regresult.length>0)
				{
					navigator.notification.alert("Message 1 of "+regresult.length+": "+regresult[0].Message);
				}else{
					navigator.notification.alert("No message found");
				}
			},
			failCallback: function (regresult){
				console.log("error during GetPushMessages: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during GetPushMessages: "+ JSON.stringify(regresult));
			}
		});
	},
	getPushByDevice: function(){
		Puship.Common.GetPushMessagesByDevice(
			{
			//limit: 10, //max limit is 50 default is 20
			//offset: 100,
			successCallback: function (regresult){
				console.log("GetPushMessagesByDevice done");

				if (regresult.length>0)
				{
					navigator.notification.alert("Message 1 of "+regresult.length+": "+regresult[0].Message);
				}else{
					navigator.notification.alert("No message found");
				}
			},
			failCallback: function (regresult){
				console.log("error during GetPushMessagesByDevice: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during GetPushMessagesByDevice: "+ JSON.stringify(regresult));
			}
		});
	},
	addLibraFilter: function(){
		console.log("addLibraFilter");
		Puship.Common.AddTagFilter("Libra",
		{
			successCallback: function (regresult){
				console.log("Libra filter added");
				navigator.notification.alert("Libra filter added");
			},
			failCallback: function (regresult){
				console.log("error during addLibraFilter: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during addLibraFilter: "+ JSON.stringify(regresult));
			}
		});
	},
	addVirgoFilter: function(){
		console.log("addVirgoFilter");
		Puship.Common.AddTagFilter("Virgo",
		{
			successCallback: function (regresult){
				console.log("Virgo filter added");
				navigator.notification.alert("Virgo filter added");
			},
			failCallback: function (regresult){
				console.log("error during addVirgoFilter: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during addVirgoFilter: "+ JSON.stringify(regresult));
			}
		});
	},
	removeFilter: function(){
		console.log("removeFilter");
		Puship.Common.RemoveTagFilter("Libra",
		{
			successCallback: function (regresult){
				console.log("Libra filter removed");
				navigator.notification.alert("Libra filter removed");
			},
			failCallback: function (regresult){
				console.log("error during removeFilter: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during removeFilter: "+ JSON.stringify(regresult));
			}
		});
	},
	clearFilters: function(){
		console.log("removeFilter");
		Puship.Common.CleanTagFilter(
		{
			successCallback: function (regresult){
				console.log("clearFilters done");
				navigator.notification.alert("clearFilters done");
			},
			failCallback: function (regresult){
				console.log("error during clearFilters: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during clearFilters: "+ JSON.stringify(regresult));
			}
		});
	},
	getFilters: function(){
		Puship.Common.GetTagFilters(
			{
			successCallback: function (regresult){
				console.log("GetTagFilters done");

				if (regresult.length>0)
				{
					navigator.notification.alert("Filter 1 of "+regresult.length+": "+regresult[0]);
				}else{
					navigator.notification.alert("No filter found");
				}
			},
			failCallback: function (regresult){
				console.log("error during GetTagFilters: "+ JSON.stringify(regresult));
				navigator.notification.alert("error during GetTagFilters: "+ JSON.stringify(regresult));
			}
		});
	}
};


