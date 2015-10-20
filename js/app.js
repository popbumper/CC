var blogSample = angular.module('blogSample', ['ngRoute','ui.bootstrap']);
var db;
var dbCreated = false;
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

var viewportScale = 1 / window.devicePixelRatio;
$("#viewport").attr("content","user-scalable=no, initial-scale="+viewportScale+", minimum-scale=0.2, maximum-scale=2, width=device-width");



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
