$(document).ready(function () {

    $('.slider').slick({

        dots: true,
        infinite: true,
        slidesToShow: 1,

    });

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    })

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    })
    $('.choose-us-slider').slick({

        dots: true,
        infinite: true,
        slidesToShow: 3,

    });
});
