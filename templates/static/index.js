import * as research from "./research.js";
import * as animations from "./animation.js";
research.tab_switch();
animations.animations();

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY

        if (currentScroll <= 0) {
            body.classList.remove("scroll-up")
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }

        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
        }

        lastScroll = currentScroll

    })
