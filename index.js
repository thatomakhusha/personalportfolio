// =========================
// NAVBAR ACTIVE LINK + SCROLL BUTTON
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    // Highlight active nav link
    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });

    // Show / hide scroll-to-top button
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});


// =========================
// SCROLL TO TOP BUTTON
// =========================

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// =========================
// TYPING EFFECT
// =========================

const text = "Hi, my name is Thato Makhusha";
const typingElement = document.querySelector(".description-intro p");

let index = 0;

function typeEffect() {
    if (typingElement && index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

if (typingElement) {
    typingElement.textContent = "";
    typeEffect();
}


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".grid-info, .heading-name, .description-paragraph, .image-2"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// =========================
// OPTIONAL: SMOOTH NAV CLICK (EXTRA CLEAN)
// =========================

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        }
    });
});