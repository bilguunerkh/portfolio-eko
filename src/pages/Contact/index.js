import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion"
import styles from "./style.module.scss";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';

const SkillCards = [
  {
    icon:"",
    title:"ReactJS",
    className: "zurag",
  },
  {
    name: "React-Projects",
    desc: "Full-Stack project dashboard which is collection of projects built on the React library.",
    image: "reactprojects",
    category: "mern",
    links: {
    view: "https://reactjsprojects.herokuapp.com/",
    code: "https://github.com/jigar-sable/React-Projects",}

  },
  {
    icon:"",
    title:"ReactJS",
  },
  {
    icon:"",
    title:"ReactJS",
  },
  {
    icon:"",
    title:"ReactJS",
  },
]


const Turshilt = () => {
  return(
    <>
    {SkillCards.map((item) => (
      <>
             <img src={item.icon}/>
             <h2>{item.title}</h2></>
      
    ))}
    </>
  )
}


const MapCards = () => {
  return(
    <>
    <div className='Cards'>
      {SkillCards.map((item) => (
        <>
        <img src={item.icon}/>
        <h2>{item.title}</h2>
        </>

      ))}
    </div>
    </>
  )
}



const Contact = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.hha}>
      <MapCards/>
      <Turshilt />
      </div>

  </div>
  )
}

export default Contact;