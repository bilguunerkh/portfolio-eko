import React from 'react'
import styles from "./style.module.scss";


const Projects = [
  {
    "image": "https://iotech.mn/img/portfolio/3.jpg",
    "title" : "CU Brand",
    "description" : "“Сэнтрал Экспресс Си Ви Эс” ХХК ",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/4.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/3.jpg",
    "title" : "CU Brand",
    "description" : "“Сэнтрал Экспресс Си Ви Эс” ХХК ",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/4.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/4.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonow",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
  },




]

const MapProjects = () => {
  return(
    <div className={styles.Pro}>
      {Projects.map((item) => (
        <div className={styles.thisProject}>
          <img className={styles.ProImg} src={item.image}/>
        </div>
      ))}
    </div>
  )
}


const Project = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ListProject}>
        <MapProjects/>
      </div>
    </div>

  )
}

export default Project;