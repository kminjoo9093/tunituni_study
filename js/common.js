const swiper = new Swiper(".visual", {
  loop: true,
});
swiper.on("slideChange", function () {
  let index = swiper.realIndex;
  if (index == "0") {
    let menus = document.querySelectorAll(".gnb li");
    activeMenu("#F17785");
  } else if (index == "1") {
    activeMenu("#ABCD05");
  }
});

const activeMenu = (color) => {
  let menus = document.querySelectorAll(".gnb li");
  menus.forEach((menu) => {
    if (menu.classList.contains("active")) {
      menu.style.setProperty("--activeMenu", color);
      // menu.children[0].style.color = '#F17785';
    }
  });
};

const swiper2 = new Swiper(".thanks", {
  spaceBetween: 30,
  slidesPerView: 1.2,
});

const swiper3 = new Swiper(".review-slide", {
  spaceBetween: 30,
  slidesPerView: 1.7,
  breakpoints: {
    410: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2.7,
    },
    700: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".review-slide .paging",
  },
});

const swiper4 = new Swiper(".slide2", {
  spaceBetween: 30,
  slidesPerView: 2,
});

$(".btn_program_view").on("click", function () {
  $(".popup.type_1").stop().animate(
    {
      top: 0,
    },
    500
  );
  $(".dimmed").fadeIn(300);
  // 스크롤막기
  bodyHidden();
});
$(".popup.type_1 .btn_close").on("click", function () {
  $(".popup.type_1")
    .stop()
    .animate(
      {
        top: -100 + "%",
      },
      500
    );
  $(".dimmed").fadeOut(300);
  bodyVisible();
});

// popup type 2
$(".popup.type_2 .btn_close2").on("click", function () {
  $(".popup.type_2 .popup_wrap")
    .stop()
    .animate(
      {
        bottom: -100 + "%",
      },
      500,
      function () {
        $(".popup.type_2").fadeOut(300);
      }
    );
});

// popup type 3
$(".popup.type_3 .btn_close2").on("click", function () {
  $(".popup.type_3").fadeOut(300);
  bodyVisible();
});

$('.banner a').on('click', function(e){
  e.preventDefault();
  $(".popup.type_3").fadeIn(300)
  bodyHidden();
})

function bodyVisible(){
  $("body").css("overflow", "visible");
}
function bodyHidden(){
  $("body").css("overflow", "hidden");
}