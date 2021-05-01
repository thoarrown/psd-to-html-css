const barToggle = document.querySelector(".header-hambuger");
const menuMobile = document.querySelector(".header-menu");
document.addEventListener("click", function (e) {
  console.log(e.target.classList.contains("is-active"));
  if (e.target.classList.contains("header-hambuger")) {
    menuMobile.querySelector("ul").classList.add("is-active");
  } else if (
    !e.target.classList.contains("is-active") &&
    !e.target.classList.contains("menu-item") &&
    !e.target.classList.contains("menu-link")
  ) {
    menuMobile.querySelector("ul").classList.remove("is-active");
  }
});
// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
