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
    drone,
    docker,
    meta,
    quest,
    starbucks,
    tesla,
    shopify,
    carrent,
    eda,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer[Full Stack]",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "AI Enthusiast",
      icon: backend,
    },
    {
      title: "Software Enthusiast",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Travel Management System",
      company_name: "Java,MySQL",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023",
      points: [
        "Created a full-stack web application using only Java and SQL",
        "Used Java libraries such as Swing,Spring",
        "Used MYSql for database",
        "Link in github-[https://github.com/akhil99558/Mini_Project]",
      ],
    },
    {
      title: "Kp Index PredictionProject",
      company_name: "CNN,Deep Learning",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2023",
      points: [
        "Developed a Deep Learning model to predict the k-planetary index",
        "Kp index is used to predict solar flares, acheived a high accuracy",
        "Took data from realtime data from the Dscover Satellite",
        "Link in github - [https://github.com/akhil99558/EDA_/blob/main/DSCVRneural.ipynb]",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Application",
      company_name: "ReactJs,Nodejs,MongoDB",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2023",
      points: [
        "Developed a full stack application as a group project using ReactJs for front-end,NodeJs for backend and MongoDB as server",
        "The website is not hosted yet",
        
        "Link of the project-[https://github.com/akhil99558/Mern_Staxk_Pro]",
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
      name: "Real Estate Management System",
      description:
        "A full stack application built using HTML,CSS,ReactJs, NodeJs, MongoDB which does all basic CRUD operations as part of a group summer internship project in Dec 2023 ",
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
        {
          name:"NodeJs",
          color:"green-text-gradient"

        }
      ],
      image: carrent,
      source_code_link: "https://github.com/akhil99558/Mern_Staxk_Pro",
    },
    {
      name: "Travel Management System",
      description:
        "A JAVA based web application that enables users to customize their travel plans, book tickets, cancel tickets and manage all travel related responses built completely using JAVA and related libraries and MYSql as database",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MYSql",
          color: "green-text-gradient",
        },
        {
          name: "SwingX",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/akhil99558/Mini_Project",
    },
    {
      name: "Kp Index Prediction",
      description:
        "Created a model from scratch using Neural Networks which predicts k-planetary index with high accuracy. Used realtime data from past 8 years from the DSCOVER satellite to do this",
      tags: [
        {
          name: "NeuralNetworks",
          color: "blue-text-gradient",
        },
        {
          name: "CNN",
          color: "green-text-gradient",
        },
        {
          name: "Data Engineering",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/akhil99558/EDA_/blob/main/DSCVRneural.ipynb",
    },
        {
      name: "A Simple EDA Project",
      description:
        "A simple credit card attrition rate prediction using an open source dataset from kaggle using various Machine Learning Algorithms and EDA project",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Seaborn",
          color: "pink-text-gradient",
        },
      ],
      image: eda,
      source_code_link: "https://github.com/akhil99558/EDA_/blob/main/bank.ipynb",
    },
    {
      name: "Icarus",
      description: "This is originally a submission made as a Minimum Viable project[MVP] for Mircosoft Imagine Cup. Icarus is a automated cluster-drone surveillance system still under works",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name:"Arduino",
          color:"blue-text-gradient",

        },
      ],
      image: drone,
      source_code_link: "https://github.com/akhil99558/Icarus",
    },
    {
      name: "Coming Soon",
      description:"",
      tags: [],
      image: quest,
      source_code_link: "",

    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  