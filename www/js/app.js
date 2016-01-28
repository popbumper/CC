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
var app = {
    // Application Constructor
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);

        console.log("initializing");
        console.log("initializing done");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

		var Puship = window.plugins.puship;
		Puship.EnableLog = true;
		Puship.PushipAppId = Y1vJJkgR9m61W4q; // I.E.: puship_id = "h1mCVGaP9dtGnwG"

		if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
			var GCMCode = 102955784975; // This is the senderID provided by Google. I.E.: "28654934133"
			Puship.GCM.Register(GCMCode,
			{
				successCallback: function (pushipresult){
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
					navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
				},
				failCallback: function (pushipresult){
					navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
				}
			});
		} else {
			Console.log("Not supported platform");
		}

    }
};





