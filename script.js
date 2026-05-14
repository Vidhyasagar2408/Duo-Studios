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

function page1Animation() {
  let cursor = document.querySelector(".cursor");
  let main = document.querySelector(".main");
  let video = document.querySelector(".page1 video");
  main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
      duration: 0.6,
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
}

page1Animation();

function page2Animation() {
  let h1 = document.querySelector(".page2 h1");
  let h2 = document.querySelector(".page2 h2");
  let p = document.querySelector(".page2 p");

  let tl3 = gsap.timeline();

  tl3.from(
    h1,
    {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        scroller: ".main",
        trigger: h1,
        start: "top 40%",
        end: "top 80%",
        scrub: 3,
      },
    },
    "page2",
  );

  tl3.from(
    h2,
    {
      x: -80,
      opacity: 0,
      scrollTrigger: {
        scroller: ".main",
        trigger: h2,
        start: "top 40%",
        end: "top 80%",
        scrub: 3,
      },
    },
    "page2",
  );

  tl3.from(
    p,
    {
      x: 160,
      opacity: 0,
      scrollTrigger: {
        scroller: ".main",
        trigger: p,
        start: "top 40%",
        end: "top 80%",
        scrub: 3,
      },
    },
    "page2",
  );
}

page2Animation();

function page3Animation() {
  _;
  let page3 = document.querySelector(".page3-part2");

  gsap.from(page3, {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: page3,
      start: "top 40%",
      end: "top 80%",
    },
  });
}

page3Animation();
