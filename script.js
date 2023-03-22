document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.sr', { 
      distance: '30px',
      duration: 1000,
      easing: 'ease-out',
      origin: 'left',
      delay: 200,
      interval: 200
    });
  });
  
document.querySelector('.hamburger').addEventListener('click', function () {
document.querySelector('nav').classList.toggle('nav-open');
});

ScrollReveal().reveal('.scroll-reveal', { delay: 300 });

const container = document.querySelector('.container');
let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition > lastScrollPosition) {
    container.classList.add('move-left');
    container.classList.remove('move-right');
  } else {
    container.classList.add('move-right');
    container.classList.remove('move-left');
  }
  
  lastScrollPosition = currentScrollPosition;

  //const icon = document.querySelector('.icon-scroll');
    //icon.style.display = 'none';

});

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background =
    colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.querySelector(".background-balls").append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };
  
    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-out"
      }
    );
  });
