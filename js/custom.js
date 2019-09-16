

// play in my name

var counter = 0;
setInterval(function () {
    $('.top .profile-name h1 span:eq(' + counter + ')').css({
        "animation": "beBig .5s ease-in-out",
        "display": "inline-block"
    });
    counter++;
}, 500);

// go to specific section
$(document).ready(function(){
    $('.menu-items a').click(function(e){
        e.preventDefault();
        $('body, html').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 2000);
      });
  });
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    if (i == tabcontent.length - 1) {
        tabcontent[i].style.display = "block";
    }
    else {
        tabcontent[i].style.display = "none";
    }
}
function openForm(evt, typeForm) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(typeForm).style.display = "block";
    evt.currentTarget.className += " active";
}



