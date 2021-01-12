import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');


// let linksMenu = document.querySelectorAll(".header__item");
// for (let i = 0; i < linksMenu.length; i++) {
//     linksMenu[i].onclick = function() {
//         document.getElementById("burger-icon").classList.toggle("rotated");
//         document.querySelector(".header__nav").classList.toggle("opened");
//     };
// }

// // menu start // //


//

const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".header__logo-text");
const navBar = document.querySelector(".header__nav");
const burgerIcon = document.querySelector(".header__hamburger-menu-icon");
const linksMenu = document.querySelectorAll(".header__item");



// linksMenu.addEventListener("click", () => {
//     linksMenu.querySelectorAll(".header__item").forEach()
//     burgerIcon.classList.toggle("rotated");
//     navBar.classList.toggle("opened");
// });


for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].onclick = () => {
        burgerIcon.classList.toggle("rotated");
        navBar.classList.toggle("opened");
    };
}


navBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("header__link")) {
        navBar.querySelectorAll("a").forEach(el => el.classList.remove("header__link-active"));
        if (event.target.classList.contains("header__link")) { event.target.classList.add("header__link-active"); }
    }
});


burgerIcon.addEventListener("click", () => {
    navBar.classList.toggle("opened");
    logo.classList.toggle("centered");
    burgerIcon.classList.toggle("rotated");

});


main.addEventListener("click", () => {
    if (navBar.classList.contains("opened")) {
        navBar.classList.remove("opened");
    }
    if (burgerIcon.classList.contains("rotated")) {
        burgerIcon.classList.remove("rotated");
    }
    if (!logo.classList.contains("centered")) {
        logo.classList.add("centered");
    }
});

footer.addEventListener("click", () => {
    if (navBar.classList.contains("opened")) {
        navBar.classList.remove("opened");
    }
    if (burgerIcon.classList.contains("rotated")) {
        burgerIcon.classList.remove("rotated");
    }
    if (!logo.classList.contains("centered")) {
        logo.classList.add("centered");
    }
});

// // menu end // //
// // phone screen start // //

document.getElementById("phone-vertical__button").addEventListener("click", () => {
    document.getElementById("phone-vertical__switch").classList.toggle("hidden");
});

document.getElementById("phone-horizontal__button").addEventListener("click", () => {
    document.getElementById("phone-horizontal__switch").classList.toggle("hidden");
});

document.getElementById("phone-big__button").addEventListener("click", () => {
    document.getElementById("phone-big__switch").classList.toggle("hidden");
});

document.getElementById("phone-small-left__button").addEventListener("click", () => {
    document.getElementById("phone-small-left__switch").classList.toggle("hidden");
});

document.getElementById("phone-small-right__button").addEventListener("click", () => {
    document.getElementById("phone-small-right__switch").classList.toggle("hidden");
});

// // phone screen end // //
// // scroll start // //


document.addEventListener("scroll", onScroll);

function onScroll() {
    let curPos = window.scrollY;
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".header__link");
    sections.forEach((el) => {
        if (el.offsetTop - 90 <= curPos && (el.offsetTop - 90 + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove("header__link-active");
                if (el.getAttribute("id").substring(1) == a.getAttribute("href").substring(1)) {
                    a.classList.add("header__link-active");
                }
            })
        }
    });
};



// document.addEventListener("scroll", onScroll);

// function onScroll() {
//     let curPos = window.scrollY;
//     const sections = document.querySelectorAll("section");
//     const links = document.querySelectorAll(".header__link");
//     sections.forEach((el) => {
//         console.log(el)
//     })
// }




// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

// // scroll end // //
// // slider   start // // 

const arrowRight = document.querySelector(".slider__controls-right");
const arrowLeft = document.querySelector(".slider__controls-left");
let slides = document.querySelectorAll('div[class^="slider__slide"]');


let i = 0;
arrowRight.addEventListener("click", () => {
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

arrowLeft.addEventListener("click", () => {
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

// // slider end // //
// //  portfolio filter start // // 

const navPortfolio = document.querySelector(".portfolio__category");

navPortfolio.addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio-category__filter")) {
        navPortfolio.querySelectorAll("div").forEach(el => el.classList.remove("portfolio-category__filter-active"));
        if (event.target.classList.contains("portfolio-category__filter")) { event.target.classList.add("portfolio-category__filter-active"); }
    }
});


//

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let img;
let imgAll;
// // function portfolioSort(sort) { console.log(sort) }
const portfolioCategory = document.querySelectorAll(".portfolio-category__filter");

for (let i = 0; i < portfolioCategory.length; i++) {
    portfolioCategory[i].addEventListener("click", () => {
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
        shuffle(portfolioCategoryAllFileName);
        portfolioCategoryAllFileName.forEach((allFileName) => {
            imgAll = document.createElement("div");
            imgAll.classList.add("portfolio__card-pic");
            imgAll.innerHTML = `<img src="/img/portfolio/${allFileName}" alt="Photo" class="portfolio__card-thumb">`;
            portfolio__cards.append(imgAll);
        });
    } else {
        const portfolioCategoryNew = portfolioCategoryAll.filter((e) => {
            return e.category == sort;
        });

        let portfolioCategoryNewFileName = portfolioCategoryNew.map(item => item.fileName)
        for (let i = 0; i < portfolioCategoryAll.length; i++) {
            if (portfolioCategoryAll[i].category == sort) {}
        }
        shuffle(portfolioCategoryNewFileName);
        portfolioCategoryNewFileName.forEach((newFileName) => {
            img = document.createElement("div");
            img.classList.add("portfolio__card-pic");
            img.innerHTML = `<img src="/img/portfolio/${newFileName}" alt="Photo" class="portfolio__card-thumb">`;
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
    { fileName: "portfolio-12.jpg", category: "artwork" },
    { fileName: "portfolio-13.jpg", category: "webDesign" },
    { fileName: "portfolio-14.jpg", category: "webDesign" },
    { fileName: "portfolio-15.jpg", category: "graphicDesign" },
    { fileName: "portfolio-16.jpg", category: "artwork" },
    { fileName: "portfolio-17.jpg", category: "graphicDesign" },
];
//


// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }


const portfolioCards = document.querySelector(".portfolio__cards");

portfolioCards.addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio__card-thumb")) {
        portfolioCards.querySelectorAll("img").forEach(el => el.classList.remove("portfolio__card-thumb-active"));
        if (event.target.classList.contains("portfolio__card-thumb")) { event.target.classList.add("portfolio__card-thumb-active"); }
    }
});


// // portfolio filter end // //
// //  modal window start // // 

const popup = document.querySelector(".modal");
const closePopupButton = popup.querySelector(".modal__button");
const form = document.querySelector(".form");


form.onsubmit = function(evt) {

    evt.preventDefault();

    // let regExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;
    // let regExp = /^[A-Za-z0-9_-]$/;

    let regExp = /^([A-Za-z0-9_-]{1,80})$/u;
    let valueUserName = document.getElementById("name").value.toLowerCase();
    let valid = regExp.test(valueUserName.trim());
    let popupError = document.querySelector(".modal__error");
    let closePopupErrorButton = popupError.querySelector(".modal-error__button");
    if (!valid) {
        {
            popupError.classList.add("block");
        };
        closePopupErrorButton.addEventListener("click", () => {
            popupError.classList.remove("block");
        });
        document.addEventListener("keydown", (evt) => {
            if (evt.keyCode === 27) {
                popupError.classList.remove("block");
            }
        });
        return false;

    } else {
        let userName = valueUserName[0].toUpperCase() + valueUserName.slice(1);
        document.querySelectorAll(".modal__title")[0].innerText = `${userName}, Ваше сообщение отправлено!`;


        let userSubject = document.getElementById("subject").value;
        if (!userSubject) {
            document.querySelector(".subject__wrapper").classList.add("hidden");
        } else {
            document.querySelector(".subject__wrapper").classList.remove("hidden");
            document.querySelectorAll(".modal__desc")[0].innerText = `${userSubject}`;
        }

        let userDetails = document.getElementById("details").value;
        if (!userDetails) {
            document.querySelector(".details__wrapper").classList.add("hidden");
        } else {
            document.querySelector(".details__wrapper").classList.remove("hidden");
            document.querySelectorAll(".modal__desc")[1].innerText = `${userDetails}`;
        }


        let userEmail = document.getElementById("email").value;
        document.querySelectorAll(".modal__title")[3].innerText = `Ответ будет отправлен Вам на указанный email ${userEmail}`;

        popup.classList.add("block");

        closePopupButton.addEventListener("click", () => {
            popup.classList.remove("block");
        });

        document.addEventListener("keydown", (evt) => {
            if (evt.keyCode === 27) {
                popup.classList.remove("block");
            }
        })
    }
}

// // modal window end // //
// //   start // //