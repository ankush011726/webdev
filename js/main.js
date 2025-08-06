(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Leadership Section Dynamic Cards
    const leadershipData = [
      {
        name: "Poonam Jhajharia",
        designation: "Director",
        image: "img/istockphoto-2062236772-612x612.jpg"
      },
      {
        name: "Vikash Kumar Singh",
        designation: "Director",
        image: "img/male-default-placeholder-avatar-profile-260nw-387516193.webp"
      }
    ];

    function renderLeadershipCards() {
      const placeholder = 'img/avatar-placeholder.png';
      const containers = [
        document.getElementById('leadership-cards'),
        document.getElementById('leadership-cards-about'),
        document.getElementById('leadership-cards-contact')
      ];
      containers.forEach(container => {
        if (!container) return;
        container.innerHTML = `<div class='leadership__featured'>` + leadershipData.map(member => `
          <div class="leadership-card">
            <div class="leadership-card__avatar">
              <img src="${member.image || placeholder}" alt="${member.name}" onerror="this.onerror=null;this.src='${placeholder}';">
            </div>
            <div class="leadership-card__name">${member.name}</div>
            <div class="leadership-card__designation">${member.designation}</div>
          </div>
        `).join('') + `</div>`;
      });
    }

    document.addEventListener('DOMContentLoaded', renderLeadershipCards);


})(jQuery);

