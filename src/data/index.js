import HTML from '../../public/html.png';
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/React.png'
import REDUX from '../../public/redux.svg'
import REMIX from '../../public/remix.webp'
import TAILWIND from '../../public/Tailwind.png'
import NODE from '../../public/node.png'
import POSTGRESQL from '../../public/Postgresql.png'
import STRAPI from '../../public/strapi.svg'
import GITHUB from '../../public/github.svg'
import GIT from '../../public/Git.png'
import ACADEMLO from '../../public/academlo.png'
import UDEMY from '../../public/Udemy.png'

import Ecommerce from '../../public/projects/eccomerce.jpg'
import Pokedex from '../../public/projects/pokedex.jpg'
import Cost from '../../public/projects/Cost.jpg'
import Patient from '../../public/projects/Patient.jpg'
import Weather from '../../public/projects/Weather.jpg'
import Rick from '../../public/projects/RickMorty.jpg'
import Eat from '../../public/projects/eatNsplit.jpg'
import FarAway from '../../public/projects/FarAway.jpg'
import Crypto from '../../public/projects/Crypto.jpg'
import Users from '../../public/projects/Users.jpg'
import Movies from '../../public/projects/Movies.jpg'
import API from '../../public/projects/api.jpg'

const navMenu = [
  {name: "home", href: "#home"},
  {name: "skills", href: "#skills"},
  {name: "projects", href: "#projects"},
  {name: "contact",  href: "#contact"}
]

const skills = [
  {id: 1, name: "HTML", img: HTML, level: "Intermediate"},
  {id: 2, name: "CSS", img: CSS, level: "Intermediate"},
  {id: 3, name: "JavaScript", img: JS, level: "Intermediate"},
  {id: 4, name: "React", img: REACT, level: "Intermediate"},
  {id: 5, name: "Redux", img: REDUX, level: "Intermediate"},
  {id: 6, name: "Remix", img: REMIX, level: "Basic"},
  {id: 7, name: "Tailwind", img: TAILWIND, level: "Intermediate"},
  {id: 8, name: "Node.js", img: NODE, level: "Basic"},
  {id: 9, name: "PostgreSQL", img: POSTGRESQL, level: "Basic"},
  {id: 10, name: "Strapi", img: STRAPI, level: "Basic"},
  {id: 11, name: "GitHub", img: GITHUB, level: "Intermediate"},
  {id: 12, name: "Git", img: GIT, level: "Intermediate"},
]

const trainings = [
  {
    id: 1, 
    school: "Udemy", 
    img: UDEMY, 
    date: "Oct 2023 - Now",
    courses: [
      {
        id: 0,
        certificate: {
          name: "The Ultimate Advance React Course",
          url: "",
          date: "In Progress",
        },
        topics: [
          {
            section: 1,
            title: "React Fundamentals"
          },
          {
            section: 2,
            title: "Overview of React & setup 1st project"
          },
          {
            section: 3,
            title: "Working with Components, Props & JSX"
          },
          {
            section: 4,
            title: "State, Events, & Forms: Interactive Components"
          },
          {
            section: 5,
            title: "Thinking in React: State Management"
          },
          {
            section: 6,
            title: "Thinking in React: Components, Composition & Reusability"
          },
          {
            section: 7,
            title: "How React works behind the scenes"
          },
          {
            section: 8,
            title: "Effects & Data Fetching"
          },
          {
            section: 9,
            title: "Custome Hooks, Refs & more state"
          },
          {
            section: 10,
            title: "React before Hooks: Class based React"
          },
          {
            section: 11,
            title: "The Advance useReducer Hook"
          },
          {
            section: 12,
            title: "React Router: Single Page Application (SPA)"
          },
          {
            section: 13,
            title: "Advance State Management: The Context API"
          },
        ]
      }
    ]
  },
  {
    id: 2, 
    school: "Academlo", 
    img: ACADEMLO, 
    date: "Jan 2023 - Oct 2023", 
    courses: [
      {
        id: 0, 
        certificate: {
          name: "Foundations in HTML, CSS and Javascript",
          url: "https://certificates.academlo.com/en/verify/27645188090636",
          date: "Feb-21-2023",
        },
        topics: [
          {
            section: 1, 
            title: "JavaScript Basics"
          },
          {
            section: 2, 
            title: "Loops, conditionals, type coercion, logical operators, methods for arrays & objects"
          },
          {
            section: 3, 
            title: "HTML & CSS"
          },
          {
            section: 4, 
            title: "GIT, FLEX & GRID"
          },
          {
            section: 5, 
            title: "Frontend Challenges"
          },
          {
            section: 6, 
            title: "JavaScript Methods, Functions & Handlers"
          },
          {
            section: 7, 
            title: "Portfolio & Final Project"
          },
        ]
      },
      {
        id: 1,
        certificate: {
          name: "Front-End Development with React",
          url: "https://certificates.academlo.com/en/verify/32446799142029",
          date: "Jun-29-2023"
        },
        topics: [
          {
            section: 1, 
            title: "First steps, components, useState"
          },
          {
            section: 2, 
            title: "Lifecycle, useEffect, Axios API consumption, and custom hooks"
          },
          {
            section: 3, 
            title: "Conditional rendering, Lists and keys with map, Types of inputs, Events and controlled inputs"
          },
          {
            section: 4, 
            title: "Forms and CRUD's"
          },
          {
            section: 5, 
            title: "React Router and Introduction to Redux Toolkit"
          },
          {
            section: 6, 
            title: "Advanced Redux Toolkit"
          },
          {
            section: 7, 
            title: "Final Project"
          },
        ]
      },
      {
        id: 2, 
        certificate: {
          name: "Back-End Development with Node.js",
          url: "https://certificates.academlo.com/en/verify/80371342866278",
          date: "Sep-06-2023"
        },
        topics: [
          {
            section: 1, 
            title: "Data Base: SQL Queries, Joins & Relational Data Base"
          },
          {
            section: 2, 
            title: "Node / Express: Middlewares & routes, Connection to the database & CRUD"
          },
          {
            section: 3, 
            title: "Express / Sequelize: Deploy Docs & Cors, MVC Routes, Joins Sequelize & Snippets"
          },
          {
            section: 4, 
            title: "Register & Login, Authentication, Express Validator & Error Handling"
          },
          {
            section: 5, 
            title: "Roles & Permissions, Send Emails & Template engines"
          },
          {
            section: 6, 
            title: "Sequelize - CLI (Command Line Interface)"
          },
          {
            section: 7, 
            title: "Final Project"
          },
        ]
      },
      {
        id: 3, 
        certificate: {
          name: "Full Stack Web Development Program",
          url: "https://certificates.academlo.com/en/verify/34198153543932",
          date: "Sep-07-2023"
        },
        topics: [
          {
            section: 1, 
            title: "Course Completed Successfully"
          },
        ]
      },
    ] 
  },
]

const projects = [
  {
    id: 1,
    projectName: 'Ecommerce App',
    school: "Academlo",
    img: Ecommerce,
    date: "June 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js and incorporates several libraries, including React-Redux, Axios, React-hook-form, React-router-dom, React-bootstrap, and Bootswatch",
    web: "https://ecommerce-techno.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Ecommerce",
    teacher: "Brenda Gonzalez",
  },
  {
    id: 2,
    projectName: 'usePopcorn',
    school: "Udemy",
    img: Movies,
    date: "Dec 2023 - Jan 2024",
    type: "Web/Mobile",
    description: "This application was created using Vite, React.js, Axios & pure CSS, also created a few hooks.",
    web: "https://use-popcorn-movies.netlify.app/",
    github: "https://github.com/JoseGarcia1994/usePopcorn-Movies",
    teacher: "Jonas Schmedtmann",
  },
  {
    id: 3,
    projectName: 'Pokedex',
    school: "Academlo",
    img: Pokedex,
    date: "May 2023 - June 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js and incorporates several libraries, including React-Redux, Axios, React-router-dom and CSS.",
    web: "https://pokedex-pokemoons.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Pokedex",
    teacher: "Brenda Gonzalez",
  },
  {
    id: 4,
    projectName: 'Cost Control',
    school: "Udemy",
    img: Cost,
    date: "Aug 2023 - Sep 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js and incorporates several libraries, including, react-circular-progressbar, react-swipeable-list & CSS.",
    web: "https://planning-cost-control.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Cost-Control",
    teacher: "Juan Pablo",
  },
  {
    id: 5,
    projectName: 'Patient Fallow up',
    school: "Udemy",
    img: Patient,
    date: "Aug 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js and incorporates Tailwind.",
    web: "https://patient-fallow-up.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Patient-Fallow-up",
    teacher: "Juan Pablo",
  },
  {
    id: 6,
    projectName: 'Weather App',
    school: "Academlo",
    img: Weather,
    date: "May 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js, Axios & pure CSS",
    web: "https://weatherlocationweb.netlify.app/",
    github: "https://github.com/JoseGarcia1994/WeatherApp",
    teacher: "Brenda Gonzalez",
  },
  {
    id: 7,
    projectName: 'Rick & Morty',
    school: "Academlo",
    img: Rick,
    date: "March 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js, Axios & pure CSS",
    web: "https://rick-mort-by-location.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Rick-Morty",
    teacher: "Brenda Gonzalez",
  },
  {
    id: 8,
    projectName: 'Eat-N-Split',
    school: "Udemy",
    img: Eat,
    date: "Nov 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js & pure CSS",
    web: "https://eat-n-split-tracking.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Eat-N-Split",
    teacher: "Jonas Schmedtmann",
  },
  {
    id: 9,
    projectName: 'Far Away',
    school: "Udemy",
    img: FarAway,
    date: "Nov 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js & pure CSS",
    web: "https://far-away-vacation.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Far-Away",
    teacher: "Jonas Schmedtmann",
  },
  {
    id: 10,
    projectName: 'Cryptocurrency',
    school: "Udemy",
    img: Crypto,
    date: "Sep 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js, using a API to obtain live currencies & used styled components",
    web: "https://quote-cryptocurrency.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Cryptocurrency",
    teacher: "Juan Pablo",
  },
  {
    id: 11,
    projectName: 'Users CRUD',
    school: "Academlo",
    img: Users,
    date: "May 2023",
    type: "Web/Mobile",
    description: "This application was created using React.js, Axios, React-hook-form & pure CSS",
    web: "https://create-users-crud.netlify.app/",
    github: "https://github.com/JoseGarcia1994/Users-CRUD",
    teacher: "Brenda Gonzalez",
  },
  {
    id: 12,
    projectName: 'Chat API',
    school: "Academlo",
    img: API,
    date: "Jul 2023 - Aug 2023",
    type: "API",
    description: "This API was created using Node.js with Express.js and incorporates several libraries,including bcrypt, cors, dotenv, express-validator, jsonwebtoken, morgan, pg, pg-hstore, nodemon, & sequelize-cli",
    web: "",
    github: "https://github.com/JoseGarcia1994/chat_db_API",
    teacher: "Ian Rosas",
  },
  {
    id: 13,
    projectName: 'Users to do API',
    school: "Academlo",
    img: API,
    date: "Jul 2023",
    type: "API",
    description: "This API was created using Node.js with Express.js and incorporates several libraries, including cors, dotenv, pg, pg-hstore, nodemon, & sequelize.",
    web: "",
    github: "https://github.com/JoseGarcia1994/users_to_do",
    teacher: "Ian Rosas",
  },
  {
    id: 14,
    projectName: 'To do API',
    school: "Academlo",
    img: API,
    date: "Jul 2023",
    type: "API",
    description: "This API was created using Node.js with Express.js and incorporates several libraries, including cors, dotenv, morgan, pg, pg-hstore, & sequelize.",
    web: "",
    github: "https://github.com/JoseGarcia1994/to-do-API",
    teacher: "Ian Rosas",
  },
]

export {
  navMenu,
  skills,
  trainings,
  projects
}