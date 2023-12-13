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

const navMenu = [
  {name: "home"},
  {name: "skills"},
  {name: "projects"},
  {name: "contact"}
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

export {
  navMenu,
  skills,
}