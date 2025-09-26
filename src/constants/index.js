import {
    mobile,
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
    git,
    figma,
    php,
    DB,
    BBSPI,
    ACN,
    DATAWORLDS,
    carrent,
    jobit,
    tripguide,
    threejs,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "php",
      icon: php,
    },
    {
      name: "msyql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "BBS Philippines, Inc.",
      icon: BBSPI,
      iconBg: "#fff",
      date: "July 31,2023 - June 21,2024",
      points: [
         "Creating web application using Powerapps.",
         "Creating Web application using PHP and MSSQL.",
         "Creating Dashboard using Power BI.",
         "Creating Automation using power automate and UIpath"

      ],
    },
    {
      title: "Packaged Application Senior Analyst",
      company_name: "Accenture Inc.",
      icon: ACN,
      iconBg: "#FFF",
      date: "December 5, 2022 – July 21,2023",
      points: [
        "Earned Celonis EMS Technical Expert Certificate",
        "Earned Celonis Value Assessment Expert Certificate",
        "Earned Celonis Realization Expert Certificate",
        "Creating Dashboard using Celonis and Power BI.",
        "Data Transformation using Vertica SQL.",
        "Develop Web Application using PowerApps.",
      ],
    },
    {
      title: "Freelance Front End Development using CMS",
      company_name: "Asia DTWords 24/7 Philippines Inc.",
      icon: DATAWORLDS,
      iconBg: "#FFF",
      date: "September 26, 2022 – November 21, 2022",
      points: [
        "Creating webpage using Drupal.",
      ],
    },
    {
      title: "Application Support Specialist",
      company_name: "DBSCHENKER",
      icon: DB,
      iconBg: "#FFF",
      date: "Feb 17,2020 – Sept 30, 2021",
      points: [
        "Able to Gather System Requirements from the users",
        "Developed  a range of web application projects using Powerapps, MSSql, Sharepoint, PowerBI and Angular/Flask.",
        "Designed the flow and architecture of the web application projects.",
        "Designed GUI using Photoshop.",
        "Able to develop web projects from start to finish.",
        "Able to conduct training and UAT with the users."

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };