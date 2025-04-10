window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline intro animation
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.from(".hero h1", { y: 50, opacity: 0, duration: 1 });
    tl.from(".hero p", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");
    tl.from(".hero-content__buttons button", {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.2,
    }, "-=0.4");

    // Animate nav on load
    gsap.from(".header__logo h4, .header__menu li", {
      y: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Scroll-triggered food card entrance
    gsap.from(".popular-foods__card", {
      scrollTrigger: {
        trigger: ".popular-foods__card",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    // Combined animation for About Us content
    gsap.from(".about-us__content", {
      scrollTrigger: {
        trigger: ".about-us__content",
        start: "top 75%"
      },
      opacity: 0,
      y: 40,
      clipPath: "circle(0% at 50% 50%)",
      duration: 0.75,
      ease: "power2.out"
    });

    // Animate Subscription section
    gsap.from(".subscription h2, .subscription p, .subscription__form", {
      scrollTrigger: {
        trigger: ".subscription",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

    // Animate footer
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
      },
      opacity: 0,
      y: 40,
      duration: 1
    });

    // Parallax sushi hero image
    gsap.to(".hero-image img", {
      yPercent: 20,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Floating sushi images
    gsap.to(".about-us__image-sushi3 img", {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });

    gsap.to(".about-us__image-sushi2 img", {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2.5,
    });

    // Hover effect on food cards
    document.querySelectorAll(".popular-foods__card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Magnetic Button Effect
    document.querySelectorAll(".hero-content__order-button").forEach(button => {
      button.addEventListener("mousemove", e => {
        const { offsetX, offsetY } = e;
        gsap.to(button, {
          x: (offsetX - button.offsetWidth / 2) * 0.2,
          y: (offsetY - button.offsetHeight / 2) * 0.2,
          duration: 0.3
        });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.3 });
      });
    });

    // Random floating sushi effect (ambient background elements with class .floating-sushi)
    gsap.utils.toArray('.floating-sushi').forEach((el, i) => {
      gsap.to(el, {
        y: 'random(-20, 20)',
        x: 'random(-10, 10)',
        repeat: -1,
        yoyo: true,
        duration: 'random(3, 6)',
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    // Mobile menu animation
    const mobileMenu = document.querySelector('.header__menu-mobile');
    if (mobileMenu) {
      gsap.set(mobileMenu, { xPercent: 100 });
      window.openMenu = function() {
        gsap.to(mobileMenu, { xPercent: 0, duration: 0.5, ease: 'expo.out' });
      }
      window.closeMenu = function() {
        gsap.to(mobileMenu, { xPercent: 100, duration: 0.5, ease: 'expo.in' });
      }
    }

    // Wave-like animation on hero Japanese text (fix with span)
    gsap.from(".kanji", {
        scrollTrigger: {
          trigger: ".kanji",
          start: "top 80%"
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "elastic.out(1, 0.3)",
        duration: 1.2
      });

      gsap.to(".hero-content__order-button", {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });
  
      // Glow pulse on explore button
      gsap.to(".popular-foods__button", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut"
      });
  
      // Subtle rotation on trending arrows
      gsap.to(".trending__arrow img", {
        rotation: 5,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut"
      });
});
