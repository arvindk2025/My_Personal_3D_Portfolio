
import {
    mobile,
    codehunt_1,
    hostelbuddy,
    portfolio,
    weatherapp,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    api,
    freelance_2,
    git,
    figma,
    docker,
   // freelanceicon,
    meta,
    starbucks,
    tesla,
    shopify,
    //carrent,
    jobit,
    //tripguide,
    threejs,
    freelance,
    express_js,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name:"Express JS",
      icon: express_js,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "api",
      icon: api,
    },   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "pink",
      date: "March 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Freelancer",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "pink",
      date: "April 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "pink",
      date: "August 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Arvind proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Arvind does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Arvind optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  

  const projects = [
    {
      name: "CodeHunt",
      description:
        "CodeHunt is a MERN-Stack Web Application & an online marketplace that connects freelancers and clients from all around the globe. Freelancers can generate revenue by selling their projects.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Postman",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary.com",
          color: "green-text-gradient",
        },
        {
          name: "WebSocket",
          color: "pink-text-gradient",
        },
      ],
      image: codehunt_1,
      source_code_link: "https://github.com/arvindk2025/CodeHunt-MERN-Stack-Web-App",
      source_code_link_1: "https://www.youtube.com/watch?si=iHbfdtVLPrm_bAIP&v=Xd6gzG2ve-8&feature=youtu.be&ab_channel=ARVINDKUMAR%5BIIIT-K%5D",
    },
    {
      name: "HostelBuddy",
      description:
        "HostelBuddy is a Full-Stack Web Application designed to make it easier for hostelers to share essential items like food, medicine, and books with each other.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: hostelbuddy,
      source_code_link: "https://github.com/arvindk2025/HostelBuddy-FULL-Stack-Web-App",
      source_code_link_1: "https://www.youtube.com/watch?v=1wiWFydjQh8&ab_channel=OmiVaish%5BIIIT-K%5D",
      link:"https://hostel-buddy-arvind.vercel.app/"
    },
    {
      name: "My 3D Portfolio",
      description:
        "This is my personal 3D portfolio website to showcase my work and skills, built using cutting-edge technologies.It's an interactive experience that demonstrates my proficiency in web development and design.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.Js",
          color: "green-text-gradient",
        },
        {
          name: "React-Three-Fiber",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
        {
          name: "Stunning 3D models and Geometries",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/arvindk2025",
      link:"https://3-d-portfolio-arvindk25.vercel.app/"
    },

    {
      name: "WeatherWiz",
      description:
        "WeatherWiz  is a web application that allows users to check the weather forecast for a specific location. It fetches weather data from a weather API and displays relevant information to the user.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Weather API",
          color: "green-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/arvindk2025/WeatherWiz-JavaScript-Powered-Weather-App",
      source_code_link_1:"",
      link:"https://weather-wiz-arvind.vercel.app/",

    },

  ];
  
  export { services, technologies, experiences, testimonials, projects};
