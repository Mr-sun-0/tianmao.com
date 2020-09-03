function stairs() {
    $('.list>li>a').on('click', function() {
        let top = $(`.${$(this).attr('title')}`).offset().top;
        console.log(top);
        $('html,body').animate({
            scrollTop: top,
        }, 600);
    });
    $(window).on('scroll', function() {
        let top = $(document).scrollTop();
        if (top < 700) {

            $('.list').addClass('hide');
        } else {
            $('.list').removeClass('hide');
            let i = Math.round((top - 600) / 700);
            $('.list>li').removeClass('active').eq(i).addClass('active');
        }
    });
};

export { stairs };