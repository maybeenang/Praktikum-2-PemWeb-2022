const humberger = document.querySelector(".humberger");
const nav = humberger.children;
humberger.addEventListener("click", () => {

    for (const n of nav) {
        n.classList.toggle("active");
    }

    const navContainer = document.querySelector(".navContainer");
    navContainer.classList.toggle("navbar");

});

document.addEventListener("click", (e) => {

    for (const n of nav) {
        if (n.classList.contains("active") && e.target != humberger) {
            n.classList.remove("active");
        }
    }

    const navContainer = document.querySelector(".navContainer");

    if (navContainer.classList.contains("navbar") && e.target != humberger) {
        navContainer.classList.remove("navbar");
    }
});

const navContainer = document.querySelector("nav");

const scroll = document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        navContainer.classList.remove("scroll");
    } else {
        navContainer.classList.add("scroll");
    }
})
