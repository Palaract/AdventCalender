/*! v1.2 | based on https://github.com/LucasHuber/AdventCalender/blob/master/js/main.js */
function cookie(callback) {
	if(Cookies.get("cookie_consent") == "yes") {
		callback();
	}
}

$(document).ready(function() {
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var scrolled = false;
	var timeDelay = 200;

	// Check if cookies accepted
	if(Cookies.get("cookie_consent") != "yes") {
		$("#cookiesConsent").show();
		$("#cookiesAccept").on("click", function() {
			Cookies.set("cookie_consent", "yes", {expires: 1095});
			$("#cookiesConsent").hide();
		});
		$("#cookiesDecline").on("click", function() {
			$("#cookiesConsent").hide();
		});
	}

	// Add onclick function to close modal
	$("#modal1-button").on("click", function() {
		$("#modalVideo").trigger("pause");
		$("#modal1").hide();
	});

	// Only work in December
	if (month === 12) {
		// Loop through each calendar window
		$("li").each(function(index) {
			var adventwindow = index + 1;
			var item = $(this);
			var cookieName = "door" + adventwindow;

			// Add jiggle animation to current day window
			if (adventwindow === day) {
				$(this).addClass("current");
				$(this).addClass("jiggle");
			}

			var image = '<img src="files/image' + adventwindow + '.jpg" alt="">', video = '<source src="files/video' + adventwindow + '.mp4" type="video/mp4">';
			$(this).append(image);
			$(this).children('img').addClass('preview');

			if (adventwindow == 24) {
				$(this).children('.preview').css("width", 200); // Set new width
				$(this).children('.preview').css("height", 275); // Scale height based on ratio
			} else {
				$(this).children('.preview').css("width", 120);
				$(this).children('.preview').css("height", 120);
			}


			// Open doors saved in cookies
			if (Cookies.get(cookieName) == "open" && adventwindow <= day) {
				$(this).children('.door').addClass('open')
			}


			// On clicking a window, toggle it open/closed and handle other things such as removing jiggle
			$(this).on("click", function() {
				if (adventwindow <= day) {
					if ($(this).children('.door').hasClass("open")) {
						$(this).children(".door").removeClass("open");
						cookie(function() {Cookies.set(cookieName, "closed", {expires: 1095});});
					} else {
						$(this).children(".door").addClass("open");
						cookie(function() {Cookies.set(cookieName, "open", {expires: 200});});
						$("#modalVideo").html(video);
						$("#modalVideo")[0].load();
						$("#modal1").show();
						$("#modalVideo").trigger("play");
					}
				}
				$(this).removeClass("jiggle");
			});

		});

	}

});
