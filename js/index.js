
$(document).ready(function () {
    changeNavbar();
})

$(window).scroll(function () {
    changeNavbar();
    parallax();
})

function changeNavbar() {
    if ($(window).scrollTop() < 300) {
        $(".navbar").css({ "background": "linear-gradient(black, transparent)" });
        $(".navbar").css({ "border-bottom": "transparent" });
    }
    else {
        $(".navbar").css({ "background": "#000000" });
        $(".navbar").css({ "border-bottom": "1px solid #002266" });
    }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
});


function parallax() {
    scrollPos = $(this).scrollTop();
    $('.intro').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });
    $('.bg1').css({
        'background-position': '50% ' + (-scrollPos / 8) + "px"
    });
    $('.bg2').css({
        'background-position': '70% ' + (-scrollPos / 16) + "px"
    });

}
