const menuToggle = document.querySelector(".header-menu-toggle")
const menuBar = document.querySelector(".header-menu")
const serviceItem = document.querySelector(".wedo-item")
menuToggle.addEventListener("click", function () {
    menuBar.classList.add("is-expand");
})
window.addEventListener("click", function (e) {
    if (!menuBar.contains(e.target) && !e.target.matches(".header-menu-toggle"))
        menuBar.classList.remove("is-expand");
})

// sYfnzDWGS8!

// Slick slider
$(document).ready(function () {

    $(".wedo-item").click(function (e) {
        const element = e.target.closest('.wedo-item');

        document.querySelectorAll(".wedo-body").forEach(el => {
            if (el.parentElement.contains(e.target)) return
            let icon = el.parentElement.querySelector(".wedo-header-icon")
            icon.classList.remove("fa-chevron-down")
            icon.classList.add("fa-chevron-up")
            el.classList.remove("is-active")
        })
        const elementBody = element.querySelector(".wedo-body")
        const icon = element.querySelector(".wedo-header-icon")
        if (!element.querySelector(".is-active")) {
            icon.classList.remove("fa-chevron-up")
            icon.classList.add("fa-chevron-down")
            elementBody.classList.add("is-active")
        }
        else {
            icon.classList.add("fa-chevron-up")
            icon.classList.remove("fa-chevron-down")
            elementBody.classList.remove("is-active");
        }
    });
    $(".quote-list").slick({
        prevArrow:
            "<button type='button' class='slick-prev quote-icon-left quote-icon pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next quote-icon quote-icon-right pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});
