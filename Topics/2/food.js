window.onload = () => {
    $('.topshowdor').slick({
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.single-item').slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
    });
    $('.anyfoodlist').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        // prevArrow:'<button type="button" class="slick-prev w-100"><img src="./pic/back_left_icon.png" alt=""></button>',
        // nextArrow:'<button type="button" class="slick-next"><img src="./pic/back_left_icon.png" alt=""></button>',
        prevArrow:'<div><button type="button" class="slick-prev"><</button></div>',
        nextArrow:'<div><button type="button" class="slick-next">></button></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.eatcantlost').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        // prevArrow:'<button type="button" class="slick-prev w-100"><img src="./pic/back_left_icon.png" alt=""></button>',
        // nextArrow:'<button type="button" class="slick-next"><img src="./pic/back_left_icon.png" alt=""></button>',
        prevArrow:'<div><button type="button" class="slick-prev"><</button></div>',
        nextArrow:'<div><button type="button" class="slick-next">></button></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.whanteat').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        // prevArrow:'<button type="button" class="slick-prev w-100"><img src="./pic/back_left_icon.png" alt=""></button>',
        // nextArrow:'<button type="button" class="slick-next"><img src="./pic/back_left_icon.png" alt=""></button>',
        prevArrow:'<div><button type="button" class="slick-prev"><</button></div>',
        nextArrow:'<div><button type="button" class="slick-next">></button></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.cityaround').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows:2,
        // prevArrow:'<button type="button" class="slick-prev w-100"><img src="./pic/back_left_icon.png" alt=""></button>',
        // nextArrow:'<button type="button" class="slick-next"><img src="./pic/back_left_icon.png" alt=""></button>',
        prevArrow:'<div><button type="button" class="slick-prev"><</button></div>',
        nextArrow:'<div><button type="button" class="slick-next">></button></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows:1,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows:1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows:1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}