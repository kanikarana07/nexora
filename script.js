// ==========================================
// NEXORA - PREMIUM PORTFOLIO
// JavaScript by Kanika Rana
// ==========================================


// 1. MOBILE NAVIGATION

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menu && navLinks) {

    menu.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menu.setAttribute("aria-expanded", isOpen);

    });

    // Close menu when clicking a navigation link

    document.querySelectorAll(".nav-link, .nav-contact").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menu.setAttribute("aria-expanded", "false");

        });

    });

    // Close menu when clicking outside

    document.addEventListener("click", (event) => {

        if (
            !menu.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("show");

            menu.setAttribute("aria-expanded", "false");

        }

    });

}


// 2. TYPING ANIMATION

const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "Web Designer",
    "Creative Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


// 4. ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") === "#" + currentId
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


// 5. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// 6. CONSOLE MESSAGE

console.log(
    "%c Welcome to NEXORA ✨ ",
    "color: #c084fc; font-size: 18px; font-weight: bold;"
);

console.log(
    "Designed & developed by Kanika Rana 💜"
);
