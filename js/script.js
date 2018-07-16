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

function aboutEnter() {
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
  tl.to(aboutSection, 0.2, {
    height: window.innerHeight
  });
  aboutButton.innerHTML = '<span class="iconspan">Back</span>';
  aboutButton.classList.add("back");
}
function aboutBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, 0.2, {
    height: window.innerHeight / 4
  });
  aboutButton.innerHTML = '<span class="iconspan">Enter</span>';
  aboutButton.classList.remove("back");
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
  tl.to(mainSection, 0.2, {
    height: 0,
    x: -1600
  });
  tl.to(aboutSection, 0.2, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(contactSection, 0.2, {
    opacity: 0,
    x: -1600
  });
  tl.to(portfolioSection, 0.2, {
    height: window.innerHeight
  });
  portfolioButton.innerHTML = '<span class="iconspan">Back</span>';
  portfolioButton.classList.add("back");
}
function portfolioBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  portfolioButton.innerHTML = '<span class="iconspan">Enter</span>';
  portfolioButton.classList.remove("back");
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
  tl.to(mainSection, 0.2, {
    height: 0,
    x: -1600
  });
  tl.to(aboutSection, 0.2, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(portfolioSection, 0.2, {
    opacity: 0,
    x: -1600,
    height: 0
  });
  tl.to(contactSection, 0.2, {
    height: window.innerHeight
  });
  contactButton.innerHTML = '<span class="iconspan">Back</span>';
  contactButton.classList.add("back");
}
function contactBack() {
  var tl = new TimelineMax();
  tl.to(mainSection, 0.2, {
    height: window.innerHeight / 4,
    x: 0,
    opacity: 1
  });
  tl.to(portfolioSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(contactSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  tl.to(aboutSection, 0.2, {
    height: window.innerHeight / 4,
    opacity: 1,
    x: 0
  });
  contactButton.innerHTML = '<span class="iconspan">Enter</span>';
  contactButton.classList.remove("back");
}

contactButton.addEventListener("click", function() {
  if (!state) {
    contactEnter();
  } else {
    contactBack();
  }
  state = !state;
});
