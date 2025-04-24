(function ($) {
  "use strict";
  // Theme color control js
  $(document).ready(function () {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    $("body").toggleClass("dark-theme", isDarkMode);

    $("#page-content").fadeIn(0);

    $(".theme-control-btn").on("click", function () {
      $("body").toggleClass("dark-theme");

      const isDark = $("body").hasClass("dark-theme");
      localStorage.setItem("darkMode", isDark);
    });
  });

  // Mobile menu control js
  $(".mobile-menu-control-bar").on("click", function () {
    $(".mobile-menu-overlay").addClass("show");
    $(".navbar-main").addClass("show");
  });
  $(".mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay").removeClass("show");
    $(".navbar-main").removeClass("show");
  });

  // Parallax scroll effect js
  document.querySelectorAll(".move-with-cursor").forEach((a) => {
    document.addEventListener("mousemove", function (e) {
      var t = e.clientX,
        e = e.clientY;
      (a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"),
        (a.style.transform = `translate(${0.01 * t}px, ${0.01 * e}px) rotate(${
          0.01 * (t + e)
        }deg)`);
    });
  }),
    // Email copy button js
    new ClipboardJS(".btn-copy");

  // Email copy button tooltip js
  $(document).ready(function () {
    $(".btn-copy").on("click", function () {
      $(this).addClass("active");

      setTimeout(() => {
        $(this).removeClass("active");
      }, 1000);
    });
  });

  // 내부에서 정의
  window.goToAboutPage = function () {
    const age = document.querySelector('input[name="age"]').value;
    const sex = document.querySelector('select[name="sex"]').value;
    const height = document.querySelector('input[name="height"]').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const budget = document.querySelector('select[name="budget"]').value;

    if (!age || !sex || !height || !weight || !budget) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    window.location.href = "about.html";
  };

  // 📌 복사 기능: 'Copy Phone' 버튼 따로 연결
  new ClipboardJS(".btn-call");

  // 📌 클릭 시 애니메이션 효과
  $(document).ready(function () {
    $(".btn-call").on("click", function () {
      $(this).addClass("active");

      setTimeout(() => {
        $(this).removeClass("active");
      }, 1000);
    });
  });

  // Magnific popup js
  $(".parent-container").magnificPopup({
    delegate: ".gallery-popup",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Client feedback slider js
  $(".client-feedback-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
    nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Article publications slider js
  $(".article-publications-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
    nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})(jQuery);
