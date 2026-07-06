// =======================
// AVANTAJ - script.js
// =======================

// Schimbă fundalul meniului la scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        nav.style.background = "#ffffff";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        nav.style.background = "#ffffff";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    }
});

// Animație la apariția secțiunilor
const elements = document.querySelectorAll(
    ".card, .feature, .app, .stat, .contact-box div"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";
    observer.observe(el);
});

// Buton Back to Top
const btn = document.createElement("button");
btn.innerHTML = "↑";
btn.id = "topBtn";

document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.right = "25px";
btn.style.bottom = "25px";
btn.style.width = "55px";
btn.style.height = "55px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#d71920";
btn.style.color = "white";
btn.style.fontSize = "24px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
btn.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Efect hover pe carduri
document.querySelectorAll(".card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});
