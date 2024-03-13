document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  //GSAP
  //name--> which element the animation applies on
  //trigger-->which elements start marker triggers animation

  //right t0 left slide
  function paraAnimation(name, trigger) {
    gsap.from(name, {
      x: "50%",
      duration: 2,
      scrollTrigger: {
        // markers: true,
        trigger: trigger,
        toggleActions: "play none none none",
        start: "top 85%",
        // end: "top 20%",
        // markers: true,
      },
    });
  }

  //left to right slide
  function imageAnimation(name, trigger) {
    gsap.from(name, {
      x: "-150%",
      duration: 2,
      scrollTrigger: {
        // markers: true,
        trigger: trigger,
        toggleActions: "play none none none",
        start: "top 85%",
        // end: "top 20%",
        // markers: true,
      },
    });
  }

  // top to down slide
  function vrAnimation(name, trigger) {
    gsap.from(name, {
      y: "-100%", // Start from above the view
      opacity: 0, // Start invisible
      duration: 2, // Animation duration
      ease: "power2.out", // Easing function for a smooth effect
      scrollTrigger: {
        // markers: true,
        trigger: trigger,
        toggleActions: "play none none none",
        start: "top 85%",
        // end: "top 20%",
        // markers: true,
      },
    });
  }

  //Slowly appear
  function fade(name, duration, trigger) {
    gsap.from(name, {
      duration: duration,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: trigger,
        start: "top 50%",
      },
    });
  }

  //smooth zoom in effect
  function animateGroups(parent, child) {
    // Target each .group element within .whatsapp-groups
    const selector = `${parent} ${child}`;
    gsap.utils.toArray(selector).forEach((group) => {
      gsap.from(group, {
        scrollTrigger: {
          // markers: true,
          trigger: group,
          start: "top 95%", // Adjust this value as needed to control when the animation starts
          toggleActions: "play none none none",
        },
        opacity: 0, // Start fully transparent
        scale: 0.95, // Start slightly scaled down for a zoom-out effect
        duration: 1, // Duration of the animation in seconds
        ease: "power1.out", // This eases the animation out for a smooth finish
      });
    });
  }

  //Slow domain pop effect
  function regAndDomain() {
    gsap.utils.toArray(".domain").forEach((domain) => {
      gsap.from(domain, {
        duration: 0.5, // Duration of the animation
        opacity: 0, // Start from transparent
        scale: 0.75, // Start slightly smaller
        ease: "power1.out", // Use a slight easing for a smoother effect
        scrollTrigger: {
          // markers: true,
          trigger: domain, // Use the domain itself as the trigger
          start: "top 80%", // Start the animation when the top of the domain is 80% from the top of the viewport
          toggleActions: "play none none none", // Play the animation once when the criteria are met
        },
      });
    });
  }

  //For social media posts
  function social() {
    gsap.utils.toArray(".platform").forEach((platform) => {
      gsap.from(platform, {
        duration: 0.5,
        opacity: 0,
        y: 30, // slight vertical movement
        ease: "power1.out",
        scrollTrigger: {
          trigger: platform,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  }

  // animateGroup(".registration-domain");

  function executeAnimations() {
    vrAnimation(".vr-img", ".section2");
    imageAnimation(".section2 .img-container", ".section2");
    imageAnimation(".section2 .para-container", ".section2");
    imageAnimation(".section3 .img-container", ".section3");
    imageAnimation(".section3 .para-container", ".section3");
    animateGroups(".whatsapp-groups", ".group");
    regAndDomain();
    social();
  }
  // if (window.matchMedia("(min-width: 700px)").matches) {
  //   executeAnimations(); // Execute animations for larger screens
  // } else {
  //   executeAnimationsForMobile();
  // }
  executeAnimations();
  gsap.utils
    .toArray(".bootcamp .card, .hackathon .card, .prize-section .prize-card")
    .forEach((card) => {
      gsap.from(card, {
        duration: 2, // Animation duration in seconds
        autoAlpha: 0, // Animate both CSS opacity and visibility to make the element fade in
        y: 30, // Starting position (pixels) from the bottom
        ease: "back.out(1.7)", // An easing function for a nice bounce effect
        scrollTrigger: {
          // markers: true,
          trigger: card,
          start: "top 91%", // Start the animation when the top of the card hits 80% of the viewport height
          toggleActions: "play none none none", // Play the animation once when the criteria are met
        },
      });
    });
});

//countdown timer
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const presentYear = new Date().getFullYear();
const hackathonDay = new Date(`April 01 ${presentYear} 00:00:00`);

function updateTime() {
  const currentTime = new Date();
  const diff = hackathonDay - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateTime, 1000);
