const humberger = document.querySelector(".humberger");
const nav = humberger.children;
humberger.addEventListener("click", () => {

    for (const n of nav) {
        n.classList.toggle("active");
    }

    const navContainer = document.querySelector(".navContainer");
    navContainer.classList.toggle("navbar");

});

const navContainer = document.querySelector("nav");

const scroll = document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        navContainer.classList.remove("scroll");
    } else {
        navContainer.classList.add("scroll");
    }
})
