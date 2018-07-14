var mainSection = document.querySelector(".main");
var aboutSection = document.querySelector(".about");
var portfolioSection = document.querySelector(".portfolio");
var contactSection = document.querySelector(".contact");

TweenMax.from(mainSection, 1, {
  opacity: 0,
  x: -500
});

/*button1.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(section2, 0.2, {
    opacity: 0,
    x: -1000
  });
  tl.to(section3, 0.2, {
    opacity: 0,
    x: -1000
  });
  tl.to(section4, 0.2, {
    opacity: 1,
    x: -1000
  });

  tl.to(section1, 0.3, {
    height: window.innerHeight
  });
  tl.to("button", 0.2, {
    x: 500
  });
  tl.to(backbutton, 0.2, {
    opacity: 1,
    x: 500
  });
});
section2.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(section1, 0.2, {
    opacity: 0,
    height: 0,
    x: -500
  });
  tl.to(section3, 0.2, {
    opacity: 0,
    x: -500
  });
  tl.to(section4, 0.2, {
    opacity: 0,
    x: -500
  });

  tl.to(section2, 0.2, {
    height: window.innerHeight
  });
});
section3.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(section1, 0.2, {
    opacity: 0,
    height: 0,
    x: -500
  });
  tl.to(section2, 0.2, {
    opacity: 0,
    x: -500,
    height: 0
  });
  tl.to(section4, 0.2, {
    opacity: 0,
    x: -500
  });

  tl.to(section3, 0.2, {
    height: window.innerHeight
  });
});
section4.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(section1, 0.2, {
    opacity: 0,
    height: 0,
    x: -500
  });
  tl.to(section2, 0.2, {
    opacity: 0,
    x: -500,
    height: 0
  });
  tl.to(section3, 0.2, {
    opacity: 0,
    x: -500,
    height: 0
  });

  tl.to(section4, 0.2, {
    height: window.innerHeight
  });
});
backbutton.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(backbutton, 0.1, {
    opacity: 0,
    x: -500
  });
  tl.to(section1, 0.2, {
    opacity: 1,
    height: innerHeight / 4
  });
  tl.to(section2, 0.2, {
    opacity: 1,
    height: innerHeight / 4,
    x: 0
  });
  tl.to(section3, 0.2, {
    opacity: 1,
    height: innerHeight / 4,
    x: 0
  });

  tl.to(section4, 0.2, {
    opacity: 1,
    height: innerHeight / 4,
    x: 0
  });
});*/
