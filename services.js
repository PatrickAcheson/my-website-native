
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


  class ExperienceTimeline {
    constructor(selector, experiences) {
        this.timeline = document.querySelector(selector);
        this.experiences = experiences;
        this.init();
    }

    // Initialize the experience timeline
    init() {
        this.experiences.forEach(experience => {
            const timelineElement = this.createTimelineElement(experience);
            this.timeline.appendChild(timelineElement);
        });
    }

    // Create a single timeline element
    createTimelineElement(experience) {
        const element = document.createElement('div');
        element.className = 'timeline-element';

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const title = document.createElement('h3');
        title.textContent = experience.title;
        title.className = 'timeline-title';

        const description = document.createElement('p');
        description.textContent = experience.description;

        content.appendChild(title);
        content.appendChild(description);
        element.appendChild(content);

        return element;
    }
}

// Example usage
const experiences = [
    {
        title: 'Software Engineer',
        description: 'Developed web applications for clients in various industries.'
    },
    {
        title: 'Project Manager',
        description: 'Managed a team of developers to deliver projects on time and within budget.'
    },
    {
        title: 'Senior Developer',
        description: 'Mentored junior developers and took the lead on complex projects.'
    }
];

const experienceTimeline = new ExperienceTimeline('#experience-timeline', experiences);
