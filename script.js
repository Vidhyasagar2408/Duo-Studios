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
  let h1 = document.querySelector(".page1 h1");
  let h2 = document.querySelector(".page1 h2");
  window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
      duration: 0.5,
    });
  });

  video.addEventListener("mouseenter", function () {
    cursor.innerHTML = "SOUND ON";
    gsap.to(cursor, {
      width: 140,
      height: 70,
      borderRadius: "20px",
      duration: 0.3,
    });
  });

  video.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      width: 60,
      height: 60,
      borderRadius: "50%",
      duration: 0.3,
    });
  });

  h1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: 200,
      width: 200,
    });
  });

  h1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      height: 60,
      width: 60,
    });
  });

  h2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: 200,
      width: 200,
    });
  });

  h2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      height: 60,
      width: 60,
    });
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
  let button = document.querySelector(".page2 button");

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

  tl3.from(
    button,
    {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        scroller: ".main",
        trigger: button,
        start: "top 80%",
        end: "top 80%",
        scrub: 3,
      },
    },
    "page2",
  );
}

page2Animation();

function page3Animation() {
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

function page4Animation() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      start: "top -350%",
      end: "top -360%",
      scrub: 3,
    },
  });

  tl3.to(".main", {
    backgroundColor: "#0f0d0d",
  });
}

page4Animation();

function page5Animation() {
  let boxes = document.querySelectorAll(".box");
  let cursor = document.querySelector(".cursor");
  boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      let att = elem.getAttribute("data-image");
      cursor.style.height = "300px";
      cursor.style.width = "250px";
      cursor.style.borderRadius = "0";
      cursor.style.backgroundImage = `url(${att})`;
    });

    elem.addEventListener("mouseleave", function () {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
      cursor.style.borderRadius = "50%";
      cursor.style.backgroundImage = `none`;
    });
  });
}

page5Animation();

function navAnimation() {
  let work = document.querySelector("#work");
  let studio = document.querySelector("#studio");
  let contact = document.querySelector("#contact");
  let purple1 = document.querySelector(".purple1");
  let purple2 = document.querySelector(".purple2");
  let purple3 = document.querySelector(".purple3");

  work.addEventListener("mouseenter", function () {
    purple1.style.opacity = 1;
  });

  work.addEventListener("mouseleave", function () {
    purple1.style.opacity = 0;
  });

  studio.addEventListener("mouseenter", function () {
    purple2.style.opacity = 1;
  });

  studio.addEventListener("mouseleave", function () {
    purple2.style.opacity = 0;
  });

  contact.addEventListener("mouseenter", function () {
    purple3.style.opacity = 1;
  });

  contact.addEventListener("mouseleave", function () {
    purple3.style.opacity = 0;
  });

  gsap.to(".marquee1", {
    x: "-100%",
    duration: 10,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".marquee2", {
    x: "-100%",
    duration: 10,
    repeat: -1,
    ease: "none",
  });
  gsap.to(".marquee3", {
    x: "-100%",
    duration: 10,
    repeat: -1,
    ease: "none",
  });
}

navAnimation();
