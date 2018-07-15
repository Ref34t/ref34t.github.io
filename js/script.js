// Variables Declarations
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".portfolio");
const contactSection = document.querySelector(".contact");
const icon = document.querySelectorAll(".icon");
const span = document.querySelectorAll(".iconspan");
const aboutButton = document.querySelector(".aboutbutton");
const portfolioButton = document.querySelector(".portfoliobutton");
const contactButton = document.querySelector(".contactbutton");

// Grapping the enter buttons in array and loop through it to get the right button and apply the mouseenter and mouseleave event
for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("mouseenter", function() {
    TweenMax.to(this, 0.2, {
      x: 10,
      scale: 1.5,
      rotation: 90,
      y: 80
    });
    TweenMax.to(this.children, 0.2, {
      opacity: 0
    });
  });
  icon[i].addEventListener("mouseleave", function() {
    TweenMax.to(this, 0.2, {
      x: 0,
      scale: 1,
      y: 0,
      rotation: 0
    });
    TweenMax.to(this.children, 0.2, {
      opacity: 1
    });
  });
}

// Open section by clicking on the button
aboutButton.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: 0,
    x: -1600
  });
  tl.to(portfolioSection, 0.2, {
    opacity: 0,
    x: -1600
  });
  tl.to(contactSection, 0.2, {
    opacity: 0,
    x: -1600
  });
  tl.to(aboutSection, 0.1, {
    height: window.innerHeight
  });
  if ((aboutButton.innerText = "Enter")) {
    aboutButton.innerText = "Back";
  } else {
    aboutButton.innerText = "Enter";
  }
});

portfolioButton.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: 0,
    x: -1600
  });
  tl.to(aboutSection, 0.2, {
    opacity: 0,
    height: 0,
    x: -1600
  });
  tl.to(contactSection, 0.2, {
    opacity: 0,
    x: -1600
  });
  tl.to(portfolioSection, 0.1, {
    height: window.innerHeight
  });
});

contactButton.addEventListener("click", function() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: 0,
    opacity: 0,
    x: -1600
  });
  tl.to(aboutSection, 0.2, {
    opacity: 0,
    height: 0,
    x: -1600
  });
  tl.to(portfolioSection, 0.2, {
    opacity: 0,
    height: 0,
    x: -1600
  });
  tl.to(contactSection, 0.1, {
    height: window.innerHeight
  });
});
