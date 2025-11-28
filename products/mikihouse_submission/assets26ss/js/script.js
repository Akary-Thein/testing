$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  populatePencilList();

  function populatePencilList() {
    for (let i = 1; i <= 4; i++) {
      const sections = gsap.utils.toArray(`#section${i} .panel`);
      const pBox = document.querySelector(`#section${i} .mod_p_box`);
      const total =
        pBox.parentElement.parentElement.parentElement.offsetTop +
        pBox.parentElement.parentElement.offsetTop +
        pBox.clientHeight;
      if (sections.length > 1) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: `#section${i} .sec_package_box`,
            pin: true,
            pinSpacing: false,
            scrub: 0.1,
            end: "+=" + total/2.5,
            onUpdate: (self) => {
              const progress = self.progress * 100;
              if (progress > 25 && progress < 50) {
                $(`#section${i} #panel02`).addClass("active");
              }
              if (progress > 50) {
                $(`#section${i} #panel03`).addClass("active");
              }
            },
          },
        });
      }
      
    }
    for (let i = 1; i <= 4; i++) {
        gsap.utils.toArray(`#section${i} .sec_package_box`).forEach((el) => {
            ScrollTrigger.create({
            trigger: el,
            start: "top 50%",
            onEnter: () => {
                $(`#section${i} #panel01`).addClass("active");
            },
            });
        });
    }
  }
});

// -----------------------

// right_col_js
const imgs = [document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3"),document.getElementById("img4")];
let current = 0;
function swapFade() {
    const e = (current + 1) % imgs.length;
    imgs[current].classList.remove("is-active"), imgs[e].classList.add("is-active"), (current = e);
}
window.onload = () => {
    setInterval(swapFade, 3e3);
};

// -----------------------

// video_auto_looping_code
document.addEventListener('DOMContentLoaded', () => {
const videos = Array.from(document.querySelectorAll('.autoVideo'));

  videos.forEach(v => {
    v.loop = true;
    v.muted = true;
    v.play().catch(err => {
      console.warn('Autoplay failed for a video:', err);
    });
  });
});

// -----------------------

// timber/background/change
function updateTimeBasedBackground() {
    const now = new Date();
    const hour = now.getHours(); 
    const backgroundElement = document.getElementById('background-section');
    const timeDisplay = document.getElementById('time-display');
    backgroundElement.classList.remove('morning', 'day', 'evening', 'night');

    let timePeriod = '';
    let currentClass = '';

    if (hour >= 5 && hour < 11) {
        // 5:00 AM to 10:59 AM
        currentClass = 'morning';
        timePeriod = 'Good Morning! Enjoy the sunrise.';
    } else if (hour >= 11 && hour < 17) {
        // 11:00 AM to 4:59 PM
        currentClass = 'day';
        timePeriod = 'It\'s the middle of the day.';
    } else if (hour >= 17 && hour < 20) {
        // 5:00 PM to 7:59 PM
        currentClass = 'evening';
        timePeriod = 'Good Evening. Watch the beautiful sunset colors.';
    } else {
        // 8:00 PM to 4:59 AM
        currentClass = 'night';
        timePeriod = 'Good Night. The stars are out.';
    }
    backgroundElement.classList.add(currentClass);
    const currentTime = now.toLocaleTimeString();
    timeDisplay.textContent = `Current Time: ${currentTime}. ${timePeriod}`;
}
updateTimeBasedBackground();
setInterval(updateTimeBasedBackground, 60000); 
// -----------------------



