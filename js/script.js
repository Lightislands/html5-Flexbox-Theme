$(document).ready(function () {

    // Header

    $(function () {
        var lastScroll = 0;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop(); //Sets current scroll position
            if (st > lastScroll) {
                $(".head").addClass( "hide" );
            }
            else {
                $(".head").removeClass( "hide" );
            }
            lastScroll = st;
        });
    });


    // Sharing panel

    $(function () {
        var sidePanel = '<div class="sharing-panel">share<a class="ico-heart"></a>4.8k<a class="ico-twitter-g"></a><a class="ico-facebook-g"></a><a class="ico-bookmark"></a></div>';
        var headHeight = $('.head ').height();
        var upHeight = $('.parallax').height();
        var sectionHeight = $('#addSharingPanel').height();
        $('#addSharingPanel').append(sidePanel);
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > headHeight && $(this).scrollTop() < upHeight+sectionHeight) {
                $('#addSharingPanel').css("display", "block");
                $('.sharing-panel').fadeIn();
            } else {
                $('.sharing-panel').fadeOut();
            }
        });
    });
    

});