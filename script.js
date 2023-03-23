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

  const icon = document.querySelector('.icon-scroll');
  hideElementForFiveSeconds(icon);

});


function hideElementForFiveSeconds(element) {
    element.style.display = 'none';

    setTimeout(() => {
      element.style.display = 'block';
    }, 3000);
  }


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


  const resumeButton = document.getElementById('resume-button');
  const modalContainer = document.getElementById('modal-container');
  
  // Add event listener to resume button
  resumeButton.addEventListener('click', () => {
    // Show modal
    modalContainer.style.display = 'block';
  });
  
  // Add event listener to close modal when clicked outside modal content
  modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  });


// cards section one

const services = [
    {
      title: "Scripting",
      icon: "./icons/backend.png"
    },
    {
      title: "Pentesting",
      icon: "./icons/creator.png"
    },
    {
      title: "Networking",
      icon: "./icons/mobile.png"
    }
  ];
  
  function createServiceCard(service) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('service-card');
  
    const card = `
      <div>
        <div>
          <img src="${service.icon}" alt="${service.title}"/>
          <h3>${service.title}</h3>
        </div>
      </div>
    `;
    cardContainer.innerHTML = card;
    return cardContainer;
  }
  
  function addServiceCards() {
    const servicesContainer = document.querySelector('#services-container');
    services.forEach(service => {
      const card = createServiceCard(service);
      servicesContainer.appendChild(card);
    });
  }
  
  addServiceCards();
