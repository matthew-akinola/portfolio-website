import pexelspic from "../images/apartment.png";
import movpic from "../images/jaymovies.png";
import helpline from "../images/customer-care.PNG";

const projectData = [
  {
    name: "House Free",
    desp: "A project that connects a user or a prospective house occupant with an house agent or landlord. It permits users to search for apartment, connect with house agent and make payment",
    image: pexelspic,
    liveLink: "https://freehouses.herokuapp.com/api/v1/docs/",
    apiDocumentation: "https://documenter.getpostman.com/view/15595247/VUjLLSec",
    githubLink: "https://github.com/matthew-akinola/HouseFree-project",
    tech: "Django",
    topTech: "Python/ DJango/ REST",
    technologies: [
      "Django",
      "REST",
      "Redis",
      "Flutterwave",
      "Mailjet",
      "Cloudinary",
      "Socketio",
      "Swagger docs",
      "Git",
      "Heroku",
    ],
  },
  {
    name: "Help-meet",
    desp: "A mobile application that connects Estate Residents and Estate Admin together. A user can call for help in case of fire outbreak, health emergency, and robbery by switching on the notification button which will notify both other residents and Estate-admin",
    image: movpic,
    liveLink: "https://help-meet.herokuapp.com/api/v1/docs/",
    githubLink: "https://github.com/matthew-akinola/help-meet-Django-",
    apiDocumentationLink: "https://documenter.getpostman.com/view/15595247/VUjMq6jy",
    tech: "Django",
    technologies: [
      "Python",
      "Django",
      "REST",
      "Socketio",
      "Swagger docs",
      "Heroku",
      "Git",
      "Mailjet"
    ],
  },
  {
    name: "Customer-care line provider",
    desp: "A web application that provides a user with a company's available customer care line based on the user's geolocation and if none exist, provides the contact-us form",
    image: helpline,
    liveLink: "https://customer-care-line-production.up.railway.app/home/",
    githubLink: "https://github.com/matthew-akinola/customer-care-line",
    tech: "Fastapi",
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Javascript",
      "Git"

    ],
  },
];

export default projectData;
