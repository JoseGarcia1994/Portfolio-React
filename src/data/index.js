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
        }
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
            week: 1, 
            title: "JavaScript Basics"
          },
          {
            week: 2, 
            title: "Loops, conditionals, type coercion, logical operators, methods for arrays and objects"
          },
          {
            week: 3, 
            title: "HTML Y CSS"
          },
          {
            week: 4, 
            title: "GIT FLEX Y GRID"
          },
          {
            week: 5, 
            title: "Frontend Challenges"
          },
          {
            week: 6, 
            title: "JavaScript Methods, Functions & Handlers"
          },
          {
            week: 7, 
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
        }
      },
      {
        id: 2, 
        certificate: {
          name: "Back-End Development with Node.js",
          url: "https://certificates.academlo.com/en/verify/80371342866278",
          date: "Sep-06-2023"
        }
      },
      {
        id: 3, 
        certificate: {
          name: "Full Stack Web Development Program",
          url: "https://certificates.academlo.com/en/verify/34198153543932",
          date: "Sep-07-2023"
        }
      },
    ] 
  },
]

export {
  navMenu,
  skills,
  trainings
}