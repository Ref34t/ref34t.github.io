var section1 = document.querySelector('.section-1');
var section2 = document.querySelector('.section-2');
var section3 = document.querySelector('.section-3');
var section4 = document.querySelector('.section-4');
var backbutton = document.querySelector('button');
var button1 = document.querySelector('.button1');

button1.addEventListener('click', function () {

    var tl = new TimelineMax();
    tl.to(section2, .2, {
        opacity: 0,
        x: -1000
    });
    tl.to(section3, .2, {
        opacity: 0,
        x: -1000
    });
    tl.to(section4, .2, {
        opacity: 1,
        x: -1000
    });

    tl.to(section1, .3, {
        height: window.innerHeight,
    });
    tl.to('button', .2, {
        x: 500,
    });
    tl.to(backbutton, .2, {
         opacity: 1,
        x: 500,
    });

});
section2.addEventListener('click', function () {
    var tl = new TimelineMax();
    tl.to(section1, .2, {
        opacity: 0,
        height: 0,
        x: -500
    });
    tl.to(section3, .2, {
        opacity: 0,
        x: -500
    });
    tl.to(section4, .2, {
        opacity: 0,
        x: -500
    });

    tl.to(section2, .2, {
        height: window.innerHeight,
    });
});
section3.addEventListener('click', function () {
    var tl = new TimelineMax();
    tl.to(section1, .2, {
        opacity: 0,
        height: 0,
        x: -500
    });
    tl.to(section2, .2, {
        opacity: 0,
        x: -500,
        height: 0,

    });
    tl.to(section4, .2, {
        opacity: 0,
        x: -500
    });

    tl.to(section3, .2, {
        height: window.innerHeight,
    });

});
section4.addEventListener('click', function () {
    var tl = new TimelineMax();
    tl.to(section1, .2, {
        opacity: 0,
        height: 0,
        x: -500
    });
    tl.to(section2, .2, {
        opacity: 0,
        x: -500,
        height: 0,

    });
    tl.to(section3, .2, {
        opacity: 0,
        x: -500,
        height: 0,

    });

    tl.to(section4, .2, {
        height: window.innerHeight,
    });

});
backbutton.addEventListener('click', function () {
    var tl = new TimelineMax();
    tl.to(backbutton, .1, {
         opacity: 0,
        x: -500,
    });
    tl.to(section1, .2, {
        opacity: 1,
        height: innerHeight / 4
    });
    tl.to(section2, .2, {
        opacity: 1,
        height: innerHeight / 4,
        x: 0

    });
    tl.to(section3, .2, {
        opacity: 1,
        height: innerHeight / 4,
        x: 0
    });

    tl.to(section4, .2, {
        opacity: 1,
        height: innerHeight / 4,
        x: 0

    });

});
