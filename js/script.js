// Variables Declarations
"use strict";
const wrapper = document.querySelector(".wrapper");
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".portfolio");
const contactSection = document.querySelector(".contact");
const icon = document.querySelectorAll(".icon");
const span = document.querySelectorAll(".iconspan");
const aboutButton = document.querySelector(".aboutbutton");
const portfolioButton = document.querySelector(".portfoliobutton");
const contactButton = document.querySelector(".contactbutton");
const sectioncontenta = document.querySelector(".section-content-a");
const sectioncontentp = document.querySelector(".section-content-p");
const sectioncontentc = document.querySelector(".section-content-c");
const time = 0.3;
// Grapping the enter buttons in array and loop through it to get the right button and apply the mouseenter and mouseleave event
for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("mouseenter", function() {
    TweenMax.to(this, time, {
      scale: 1.2
    });
  });
  icon[i].addEventListener("mouseleave", function() {
    TweenMax.to(this, time, {
      scale: 1
    });
  });
}

function aboutEnter() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: 0,
    x: -1600
  });
  tl.to(portfolioSection, time, {
    opacity: 0,
    x: -1600
  });
  tl.to(contactSection, time, {
    opacity: 0,
    x: -1600
  });
  tl.to(aboutSection, time, {
    height: window.innerHeight
  });
  aboutButton.innerHTML = '<span class="iconspan">Back</span>';
  aboutButton.classList.add("back");
  aboutSection.classList.toggle("section-full");
  tl.from(sectioncontenta, time, { opacity: 1, x: -2000 });
  sectioncontenta.style.display = "block";
}
function aboutBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, time, {
    height: window.innerHeight / 4
  });
  aboutButton.innerHTML = '<span class="iconspan">Enter</span>';
  aboutButton.classList.remove("back");
  aboutSection.classList.toggle("section-full");
  sectioncontenta.style.display = "none";
}
// Toggle between function of the button
var state = false;
aboutButton.addEventListener("click", function() {
  if (!state) {
    aboutEnter();
  } else {
    aboutBack();
  }
  state = !state;
});

function portfolioEnter() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: 0,
    x: -1600
  });
  tl.to(aboutSection, time, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(contactSection, time, {
    opacity: 0,
    x: -1600
  });
  tl.to(portfolioSection, time, {
    height: window.innerHeight
  });
  portfolioButton.innerHTML = '<span class="iconspan">Back</span>';
  portfolioButton.classList.add("back");
  portfolioSection.classList.toggle("section-full");
  sectioncontentp.style.display = "block";
  tl.from(sectioncontentp, time, { opacity: 0, x: -2000 });
}
function portfolioBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  portfolioButton.innerHTML = '<span class="iconspan">Enter</span>';
  portfolioButton.classList.remove("back");
  portfolioSection.classList.toggle("section-full");
  sectioncontentp.style.display = "none";
}

portfolioButton.addEventListener("click", function() {
  if (!state) {
    portfolioEnter();
  } else {
    portfolioBack();
  }
  state = !state;
});

function contactEnter() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: 0,
    x: -1600
  });
  tl.to(aboutSection, time, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(portfolioSection, time, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(contactSection, time, {
    height: window.innerHeight
  });
  contactButton.innerHTML = '<span class="iconspan">Back</span>';
  contactButton.classList.add("back");
  contactSection.classList.toggle("section-full");
  sectioncontentc.style.display = "block";
  tl.from(sectioncontentc, time, { opacity: 0, x: -2000 });
}
function contactBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, time, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, time, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  contactButton.innerHTML = '<span class="iconspan">Enter</span>';
  contactButton.classList.remove("back");
  contactSection.classList.toggle("section-full");
  sectioncontentc.style.display = "none";
}
contactButton.addEventListener("click", function() {
  if (!state) {
    contactEnter();
  } else {
    contactBack();
  }
  state = !state;
});
