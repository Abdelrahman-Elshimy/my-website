

// play in my name

var counter = 0;
setInterval(function() {
    $('.top .profile-name h1 span:eq('+ counter +')').css({
        "animation": "beBig .5s ease-in-out",
        "display": "inline-block"
    });
    counter++;
}, 500);