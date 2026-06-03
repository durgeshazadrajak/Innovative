(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const preloader = document.querySelector(".preloader");

      if (preloader) {
        preloader.classList.add("loaded");
      }
    }, 300);
  });

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");

      var HeaderHight = $(".main-header").height();
      if (windowpos >= HeaderHight) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    //$('.mobile-menu .menu-box').mCustomScrollbar();
    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Hide / Show Submenu
    $(".mobile-menu .navigation > li.dropdown > .dropdown-btn").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $(this).parent("li").children("ul");
        var target1 = $(this).parent("li").children("div.mega-menu");

        if ($(target).is(":visible")) {
          $(this).parent("li").removeClass("open");
          $(target).slideUp(500);
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown > ul.last-ul")
            .slideUp(500);
          return false;
        } else {
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .children("ul.last-ul")
            .slideUp(500);
          $(this).parent("li").toggleClass("open");
          $(this).parent("li").children("ul.last-ul").slideToggle(500);
        }
        if ($(target1).is(":visible")) {
          $(this).parent("li").removeClass("open");
          $(target1).slideUp(500);
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown > .mega-menu")
            .slideUp(500);
          // return false;
        } else {
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .removeClass("open");
          $(this)
            .parents(".navigation")
            .children("li.dropdown")
            .children(".mega-menu")
            .slideUp(500);
          $(".first-ul").css("display", "block");
          $(this).parent("li").toggleClass("open");
          $(this).parent("li").children(".mega-menu").slideToggle(500);
        }
      },
    );

    //3rd Level Nav
    $(
      ".mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn",
    ).on("click", function (e) {
      e.preventDefault();
      var targetInner = $(this).parent("li").children("ul");

      if ($(targetInner).is(":visible")) {
        $(this).parent("li").removeClass("open");
        $(targetInner).slideUp(500);
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown")
          .removeClass("open");
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown > ul")
          .slideUp(500);
        return false;
      } else {
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown")
          .removeClass("open");
        $(this)
          .parents(".navigation > ul")
          .find("li.dropdown > ul")
          .slideUp(500);
        $(this).parent("li").toggleClass("open");
        $(this).parent("li").children("ul").slideToggle(500);
      }
    });

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
        $(".mobile-menu .navigation > li").removeClass("open");
        $(".mobile-menu .navigation li ul").slideUp(0);
      },
    );

    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $("body").removeClass("mobile-menu-visible");
        $(".mobile-menu .navigation > li").removeClass("open");
        $(".mobile-menu .navigation li ul").slideUp(0);
      }
    });
  }

  //Event Countdown Timer
  if ($(".time-countdown").length) {
    $(".time-countdown").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              '<div class="counter-column"><span class="count">%D</span>Days</div> ' +
              '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' +
              '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' +
              '<div class="counter-column"><span class="count">%S</span>Seconds</div>',
          ),
        );
      });
    });
  }

  // Main Slider
  var slider = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".main-slider-next",
      prevEl: ".main-slider-prev",
      clickable: true,
    },
    //Pagination
    pagination: {
      el: ".slider-one_pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let formattedIndex = (index + 1).toString().padStart(2, "0"); // Ensures two-digit format
        return '<span class="' + className + '">' + formattedIndex + "</span>";
      },
    },
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Single One Slider
  var slider = new Swiper(".single-item_carousel", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".single-item_carousel-next",
      prevEl: ".single-item_carousel-prev",
      clickable: true,
    },
    //Pagination
    pagination: {
      el: ".single-item_carousel-pagination",
      clickable: true,
    },
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  //Custom Scroll Linsk / Sidebar
  if ($(".scroll-nav li a").length) {
    $(".scroll-nav li a").on("click", function (e) {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  if ($(".animation_mode-two").length) {
    $(".animation_mode-two").marquee({
      speed: 50,
      gap: 20,
      delayBeforeStart: 0,
      direction: "right",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }

  // Clients Slider
  var slider = new Swiper(".clients-one_slider", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 2000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".clients-one_slider_button-next",
      prevEl: ".clients-one_slider_button-prev",
      clickable: true,
    },
    //Pagination
    pagination: {
      el: ".clients-one_pagination",
      clickable: true,
    },
    speed: 500,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  // Active Class
  let selectedIndex = 0;
  $(".service-one_title").on("mousemove", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    let arr = [...$(".service-one_titles .service-one_title")];
    arr.forEach((value, index) => {
      if ($(value).hasClass("active")) {
        selectedIndex = index + 1;
      }
    });
    $(
      ".service-one_images_outer .service-one_image:nth-child(" +
        selectedIndex +
        ")",
    )
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500,
      );
    });
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });
})(window.jQuery);

$(document).ready(function () {
  $(".odometer").each(function () {
    var $this = $(this),
      countTo = parseInt($this.attr("data-count"));

    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum).toLocaleString());
        },
        complete: function () {
          $this.text(countTo.toLocaleString());
        },
      },
    );
  });
});

// Back To Top Progress Circle
$(function () {
  const circle = document.querySelector(".progress-circle-path");

  if (!circle) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  function updateProgress() {
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height() - $(window).height();

    let progress = scrollTop / docHeight;

    let offset = circumference - progress * circumference;

    circle.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
      $(".progress-wrap").addClass("active");
    } else {
      $(".progress-wrap").removeClass("active");
    }
  }

  $(window).on("scroll", updateProgress);

  updateProgress();

  $(".progress-wrap").on("click", function (e) {
    e.preventDefault();

    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      600,
    );

    return false;
  });
});


// aos animation 
AOS.init();