import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');




document.getElementById("header__hamburger-menu-nav-button").addEventListener("click", function() {
    document.getElementById("header__hamburger-menu-activity").classList.toggle("header__hamburger-menu-activity-off");
    document.querySelector(".header__logo").classList.toggle("header__wrapper-displace");
    document.getElementById("header-hamburger-menu-nav__switch").classList.toggle("header__hamburger-menu-nav__switched-on");
});



// //


document.querySelector(".main").addEventListener("click", function() {

    if (document.getElementById("header__hamburger-menu-activity").classList.contains("header__hamburger-menu-activity-off") && document.getElementById("header-hamburger-menu-nav__switch").classList.contains("header__hamburger-menu-nav__switched-on")) {
        document.getElementById("header__hamburger-menu-activity").classList.remove("header__hamburger-menu-activity-off");
        document.getElementById("header-hamburger-menu-nav__switch").classList.remove("header__hamburger-menu-nav__switched-on");
    }
});

document.querySelector(".footer").addEventListener("click", function() {

    if (document.getElementById("header__hamburger-menu-activity").classList.contains("header__hamburger-menu-activity-off") && document.getElementById("header-hamburger-menu-nav__switch").classList.contains("header__hamburger-menu-nav__switched-on")) {
        document.getElementById("header__hamburger-menu-activity").classList.remove("header__hamburger-menu-activity-off");
        document.getElementById("header-hamburger-menu-nav__switch").classList.remove("header__hamburger-menu-nav__switched-on");
    }
});


// //

document.getElementById("phone-vertical__button").addEventListener("click", function() {
    document.getElementById("phone-vertical__switch").classList.toggle("phone-screen__switched-off");
});

document.getElementById("phone-horizontal__button").addEventListener("click", function() {
    document.getElementById("phone-horizontal__switch").classList.toggle("phone-screen__switched-off");
});

document.getElementById("phone-big__button").addEventListener("click", function() {
    document.getElementById("phone-big__switch").classList.toggle("phone-screen__switched-off");
});

document.getElementById("phone-small-left__button").addEventListener("click", function() {
    document.getElementById("phone-small-left__switch").classList.toggle("phone-screen__switched-off");
});

document.getElementById("phone-small-right__button").addEventListener("click", function() {
    document.getElementById("phone-small-right__switch").classList.toggle("phone-screen__switched-off");
});


// //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });
        console.log(this);
    });
});


// //

let arrowRight = document.querySelector(".slider__controls-right");
let arrowLeft = document.querySelector(".slider__controls-left");
let slides = document.querySelectorAll('div[class^="slider__slide"]');


let i = 0;
arrowRight.addEventListener("click", function() {
    if (i === slides.length - 1) {
        slides[i].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
    } else {
        slides[i].classList.remove("block");
        slides[i + 1].classList.add("block");
        i++;
    }
});

arrowLeft.addEventListener("click", function() {
    if (i === 0) {
        slides[i].classList.remove("block");
        i = slides.length - 1;
        slides[i].classList.add("block");
    } else {
        slides[i].classList.remove("block");
        slides[i - 1].classList.add("block");
        i--;
    }
});

// //

let img;
let imgAll;
// // function portfolioSort(sort) { console.log(sort) }

const portfolioCategory = document.querySelectorAll(".portfolio-category__filter");
for (let i = 0; i < portfolioCategory.length; i++) {
    portfolioCategory[i].addEventListener("click", function() {
        portfolioSort(portfolioCategory[i].dataset.sort);
    });
}

function portfolioSort(sort) {

    const portfolioCard = document.querySelectorAll(".portfolio__card-pic");
    for (var i = 0; i < portfolioCard.length; i++) {
        portfolioCard[i].parentNode.removeChild(portfolioCard[i])
    }

    if (sort == "all") {
        let portfolioCategoryAllFileName = portfolioCategoryAll.map(item => item.fileName)
        portfolioCategoryAllFileName.forEach(function(allFileName) {
            imgAll = document.createElement('div');
            imgAll.classList.add('portfolio__card-pic');
            console.log(allFileName)
            imgAll.innerHTML = `<img src="img/portfolio/${allFileName}" alt="Photo" class="portfolio__card-thumb">`;
            portfolio__cards.append(imgAll);
        });
    } else {
        const portfolioCategoryNew = portfolioCategoryAll.filter(function(e) {
            return e.category == sort;
        });

        let portfolioCategoryNewFileName = portfolioCategoryNew.map(item => item.fileName)
        for (let i = 0; i < portfolioCategoryAll.length; i++) {
            if (portfolioCategoryAll[i].category == sort) {}
        }
        portfolioCategoryNewFileName.forEach(function(newFileName) {
            img = document.createElement('div');
            img.classList.add('portfolio__card-pic');
            console.log(newFileName)
            img.innerHTML = `<img src="img/portfolio/${newFileName}" alt="Photo" class="portfolio__card-thumb">`;
            portfolio__cards.append(img);
        });
    }
}

//

let portfolioCategoryAll = [
    { fileName: "portfolio-1.jpg", category: "graphicDesign" },
    { fileName: "portfolio-2.jpg", category: "artwork" },
    { fileName: "portfolio-3.jpg", category: "graphicDesign" },
    { fileName: "portfolio-4.jpg", category: "webDesign" },
    { fileName: "portfolio-5.jpg", category: "graphicDesign" },
    { fileName: "portfolio-6.jpg", category: "artwork" },
    { fileName: "portfolio-7.jpg", category: "webDesign" },
    { fileName: "portfolio-8.jpg", category: "webDesign" },
    { fileName: "portfolio-9.jpg", category: "webDesign" },
    { fileName: "portfolio-10.jpg", category: "artwork" },
    { fileName: "portfolio-11.jpg", category: "graphicDesign" },
    { fileName: "portfolio-12.jpg", category: "artwork" }
];

// //


// let linksMenu = document.querySelectorAll(".header-hamburger-menu__item");
// for (var i = 0; i < linksMenu.length; i++) {
//     linksMenu[i].onclick = function() {
//         document.getElementById("header__hamburger-menu-activity").classList.toggle("header__hamburger-menu-activity-off");
//         document.getElementById("header-hamburger-menu-nav__switch").classList.toggle("header__hamburger-menu-nav__switched-on");
//     };
// }