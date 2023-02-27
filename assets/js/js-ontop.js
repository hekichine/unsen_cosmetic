let scrollBtn = document.querySelector(".t4s-ontop");

window.addEventListener("scroll", () => {
  if (window.scrollY < 501) {
    let activeScroll = document.querySelector(
      ".t4s-ontop.t4s-scroll-top_active"
    );
    if (activeScroll) {
      activeScroll.classList.remove("t4s-scroll-top_active");
    }
  }
  if (window.scrollY > 500) {
    scrollBtn.classList.add("t4s-scroll-top_active");
  }
});
scrollBtn.onclick = function () {
  window.scroll(0, 0);
};
$(".t4s-menu-mobie").click(function () {
  $(".t4s-menu-mobile").toggleClass("t4s-menu-active");
  $(".t4s-overlay-mobile").toggleClass("t4s-overlay-mobile-active");
});

// header- menu-mobile

$(document).mouseup(function (e) {
  var container = $(".t4s-navigation");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    // container.hide(300);
    $(".t4s-menu-mobile").removeClass("t4s-menu-active");
    $(".t4s-overlay-mobile").removeClass("t4s-overlay-mobile-active");
  }
});

$(".t4s-navigation ul li").click(function () {
  $(this).find(".t4s-btn-show-nav").toggleClass("t4s-btn-show-nav-active");
  $(this).find(".t4s-page-nav").slideToggle(300);
});

$(".t4s-shopping-mobile").click(function () {
  $(".t4s-mobile-slide-icon").slideToggle(300);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 45) {
    $(".t4s-header-bottom").addClass("t4s-header-sticky");
  } else {
    $(".t4s-header-bottom").removeClass("t4s-header-sticky");
  }
});

// header sticky
$(".t4s-item-control").click(function () {
  $(this).siblings(".t4s-item-inner").slideToggle(300);
  $(this)
    .find(".t4s-icon-footer-control")
    .toggleClass("t4s-icon-footer-active");
});

//  footer menu -mobile
