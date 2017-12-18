window.onclick = function(event) {
    var modal = document.getElementById('modal1');
    if (event.target == modal) {
        $(".modal").hide();
    }
}

$(document).ready(function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var scrolled = false;
    var timeDelay = 200;

    $(".debug").on('click', function(event) {
        day = 24;
    });

    //day=24; // uncomment to skip
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

            var image = getImage(adventwindow);
            $(this).append(image);
            $(this).children('img').addClass('preview');

            if (adventwindow == 24) {
                $(this).children('.preview').css("width", 200); // Set new width
                $(this).children('.preview').css("height", 275); // Scale height based on ratio
            } else {
                $(this).children('.preview').css("width", 130);
                $(this).children('.preview').css("height", 130);
            }


            //Open doors saved in cookies
            if (Cookies.get(cookieName) == "open") {
                $(this).children('.door').addClass('open')
            }


            // On clicking a window, toggle it open/closed and
            // handle other things such as removing jiggle
            $(this).on("click", function() {
                if (adventwindow <= day) {
                    if ($(this).children('.door').hasClass("open")) {
                        $(this).children(".door").removeClass("open");
                        Cookies.set(cookieName, "closed", {
                            expires: 0
                        });
                    } else {
                        $(this).children(".door").addClass("open");
                        Cookies.set(cookieName, "open", {
                            expires: 200
                        });
                        $(".modal-content").html(image);
                        $(".modal").show();
                    }
                }
                $(this).removeClass("jiggle");
            });

        });

    }

});

function getImage(day) {
    var code = "";

    switch (day) {
        case 1:
            code = "<img src='http://www.gedichte-zitate.com/weihnachtsgedichte/bild-sprueche/weihnachtszitate-theodorfontane.jpg'>"
            break;

        case 2:
            code = "<img src='http://www.weihnachtsgedichte-sprueche.net/weihnachtszitate/bildersprueche/ausgewaehlte.jpg'>"
            break;

        case 3:
            code = "<img src='https://i.pinimg.com/736x/76/1a/be/761abee40ce326dbcb08a45fd08efffb--ab-gautama-buddha.jpg'>"
            break;

        case 4:
            code = "<img src='https://image.brigitte.de/10410420/uncropped-0-0/437b8be05f30eb14fb08b6d52cf67351/ve/der-zauber-dieser-stillen-zeit-fs.png'>"
            break;

        case 5:
            code = "<img src='https://image.brigitte.de/10410344/uncropped-500-500/fdf1b699e46d96ed9475267a0b53ac70/nW/besinnung-und-geschenke-muessen-minder-fs.png'>"
            break;

        case 6:
            code = "<img src='http://www.heidis-internetseite.de/wp-content/uploads/2012/12/weihnachten.jpg'>"
            break;

        case 7:
            code = "<img src='https://image.brigitte.de/10410412/uncropped-0-0/2e0f13168568181fad419b3e38004781/kC/schenke-herzlich-und-frei-fs.png'>"
            break;

        case 8:
            code = "<img src='http://www.weihnachtsgedichte-sprueche.net/bilder-sprueche/sprueche-derzauber.jpg'>"
            break;

        case 9:
            code = "<img src='https://www.allmystery.de/static/upics/5ae570_hollyday13.jpg'>"
            break;

        case 10:
            code = "<img src='https://i.pinimg.com/736x/b6/40/03/b64003f3c0a6d0c5ef6964e9903b9b86--regine-advent.jpg'>"
            break;

        case 11:
            code = "<img src='http://www.zitateinbildern.de/wp-content/uploads/weihnachten_unscheinbares_kleines.jpg'>"
            break;

        case 12:
            code = "<img src='https://i.pinimg.com/736x/72/e7/82/72e7820a36f73eee84f28b90e5df6180--advent.jpg'>"
            break;

        case 13:
            code = "<img src='https://www.wandtattoo.com/blog/wp-content/uploads/2012/12/wandtattoo-weihnachten-geschenk-spruch.jpg'>"
            break;

        case 14:
            code = "<img src='http://static.woxikon.com/images/zitate/1422.gif'>"
            break;

        case 15:
            code = "<img src='https://www.spruch-des-tages.org/images/sprueche/zeit-zu-schweigen-zu-lauschen-in-sich-zu-gehen-nur-in-der-stille-kannst-du-die-wunder-sehen-die-der-geist-der-weihnacht-den-menschen-schenkt-ich-wuensche-euch-eine-besinnliche-weihnachtszeit.jpg'>"
            break;

        case 16:
            code = "<img src='http://weihnachtssprueche.info/files/theme/images/Weihnachtssprueche_26.jpg'>"
            break;

        case 17:
            code = "<img src='http://www.weihnachtsgedichte-sprueche.net/wintergedicht/bilder-sprueche/im-winter.jpg'>"
            break;

        case 18:
            code = "<img src='http://www.weihnachtsgedichte-sprueche.net/spruchbilder/anscheinend-sw.jpg'>"
            break;

        case 19:
            code = "<img src='https://klebeheld.de/media/image/38/70/68/kategorie-wandtattoo-zitate.jpg'>"
            break;

        case 20:
            code = "<img src='https://thumbs.dreamstime.com/b/teddyb%C3%A4rspielzeug-mit-schneeflocken-glauben-sie-die-magie-von-weihnachten-inspirierend-weihnachtszitat-roter-80185141.jpg'>"
            break;

        case 21:
            code = "<img src='https://i.pinimg.com/736x/d2/6d/b8/d26db8c3c63b188b05834967e608dbc1--german-quotes-motivation-quotes.jpg'>"
            break;

        case 22:
            code = "<img src='http://www.weihnachtsgedichte24.de/files/Weihnachtskarten/6.jpg'>"
            break;

        case 23:
            code = "<img src='http://www.weihnachtsgedichte-sprueche.net/advent/adventsbilder/adventskalender-29-gross.jpg'>"
            break;

        case 24:
            code = "<img src='https://www-froheweihnachten.org/wp-content/uploads/2017/11/Weihnachtsbilder.jpg'>"
            break;

    }

    return code;
}
