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
        this.bindEvents();
        alert('sdf');
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
         alert('dispacth');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
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
       alert('Received Event: ' + id);
        
        if( window.AdMob ) {
            var adIdiOS = 'a1532fe002423dc';
            var adIdAndroid = 'a1532fdecfebb04';
            var adId = (navigator.userAgent.indexOf('Android') >=0) ? adIdAndroid : adIdiOS;
            
        	var am = window.AdMob;
        	am.createBannerView( 
        		{
        		'publisherId' : adId,
				'adSize' : am.AD_SIZE.BANNER,
				'bannerAtTop' : true
        		}, 
        		function() {
        			am.requestAd({
					'isTesting' : true,
					'extras' : {
						'color_bg' : 'AAAAFF',
						'color_bg_top' : 'FFFFFF',
						'color_border' : 'FFFFFF',
						'color_link' : '000080',
						'color_text' : '808080',
						'color_url' : '008000'
					}}, 
					function() {}, 
					function() {
						alert('Error requesting Ad');
					});
				}, 
				function() {
					alert('Error create Ad Banner');
				}
			);
        } else {
        	alert( 'AdMob plugin not loaded.' );
        }
    }
};
