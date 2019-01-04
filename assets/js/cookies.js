/**
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2017 Michał Daniel
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

function cookies_warning_initialize() {
	if(cookies_warning_getCookie("cookie_warning") != 'true'){
		var toggleContent = document.getElementById("cookie_warning");
		toggleContent.classList.remove("collapsed");
	}
}

function cookies_warning_close() {
	var toggleContent = document.getElementById("cookie_warning");
	toggleContent.classList.add("collapsed");
	cookies_warning_setCookie("cookie_warning", "true", 365*3);
}

function cookies_warning_getCookie(cookie_name) {
	var name = cookie_name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var cookie = ca[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return null;
}
function cookies_warning_setCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + (days*24*60*60*1000));
	var expires = "expires="+date.toUTCString();
	document.cookie = name + "=" + value + "; " + expires;
}
