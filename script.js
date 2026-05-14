function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
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

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
let video = document.querySelector(".page1 video");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    left: dets.x + "px",
    top: dets.y + "px",
    duration: 0.2,
  });
});

video.addEventListener("mouseenter", function () {
  cursor.classList.add("active");
  cursor.innerHTML = "SOUND ON";
});

video.addEventListener("mouseleave", function () {
  cursor.classList.remove("active");
  cursor.innerHTML = "";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top 28%",
    end: "top 0",
    scrub: 2,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -120,
    duration: 1,
  },
  "anim",
);

tl.to(
  ".page1 h2",
  {
    x: 100,
    duration: 1,
  },
  "anim",
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim",
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top -60%",
    end: "top -100%",
    scrub: 2,
  },
});

tl2.to(".main", {
  backgroundColor: "white",
  color: "black",
});
