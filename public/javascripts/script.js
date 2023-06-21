function abcd() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(
    "#main",
    {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    },

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
  );

  ScrollTrigger.refresh();
}
abcd();

var a = document.querySelector("#abcd h1");
var clutter = "";
var j = 0;
for (var i = 0; i <= Math.floor(a.textContent.length / 2); i++) {
  clutter += `<span data-delay="${i}">${a.textContent.charAt(j)}</span>`;
  console.log(i);
  j++;
}
for (var i = Math.floor(a.textContent.length / 2); i >= 0; i--) {
  clutter += `<span data-delay="${i}">${a.textContent.charAt(j)}</span>`;
  console.log(i);
  j++;
}
document.querySelector("h1").innerHTML = clutter;
document.querySelectorAll("h1 span").forEach(function (eleme) {
  gsap.to(eleme, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: Expo.easeInOut,
    display: "inline",
    delay: eleme.dataset.delay * 0.1,
  });
});

function swipper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    pauseOnMouseEnter:true,

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swipper();

function locomotive() {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
  });
  
}
// locomotive();
// var navopen=0;

// function openNav(){
//   document.querySelector("#linked>i").addEventListener("click",function(){
//     if(navopen===0){
//       document.querySelector("#linkbox").style.display="flex";
//       navopen=1;
//     }
//     else if(navopen===1){
//       document.querySelector("#linkbox").style.display="none";
//       navopen=0;
//     }
//   })
// }
// openNav();