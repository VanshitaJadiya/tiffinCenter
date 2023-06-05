

function abcd(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
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
      height: window.innerHeight
    };
  }},

ScrollTrigger.addEventListener("refresh", () => locoScroll.update()));

ScrollTrigger.refresh();

}
abcd();

// function bcde(){
  
  var a=document.querySelector("#abcd h1");
        var clutter="";
        var j=0;
        for(var i=0;i<=Math.floor(a.textContent.length/2);i++){
            clutter+=`<span data-delay="${i}">${a.textContent.charAt(j)}</span>`
            console.log(i);
            j++;

        }
        for(var i=Math.floor(a.textContent.length/2);i>=0;i--){
            clutter+=`<span data-delay="${i}">${a.textContent.charAt(j)}</span>`
            console.log(i);
            j++;

        }
        document.querySelector("h1").innerHTML=clutter;
        document.querySelectorAll("h1 span").forEach(function(eleme){
    0
            gsap.to(eleme,{
                y:0,
                opacity:1,
                duration:1,
                ease:Expo.easeInOut,
                display:"inline",
                delay:eleme.dataset.delay*.1
            })
           
        })
        // var t1= gsap.timeline();
     
       
  //     }
  // bcde();

gsap.to(".test",{
    // scrollTrigger:{
    //     scroller:"#main",
    //     trigger:".test",
    //     start:"top 90%",
    //     // markers: true,
    // },
    opacity: 1,
    y:20,
    duration:1.5,
    ease:"expo.easeInOut"
})

function swipper(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swipper();  

function locomotive(){
  const scroller = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})
}
locomotive();


