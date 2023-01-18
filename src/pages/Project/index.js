import React from 'react'
import styles from "./style.module.scss";


const Projects = [
  {
    "image": "https://iotech.mn/img/portfolio/3.jpg",
    "title" : "CU Brand",
    "description" : "“Сэнтрал Экспресс Си Ви Эс” ХХК ",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/2.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/7.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/8.jpg",
    "title" : "CU Brand",
    "description" : "“Сэнтрал Экспресс Си Ви Эс” ХХК ",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/4.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/4.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/2.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },
  {
    "image": "https://iotech.mn/img/portfolio/5.jpg",
    "title" : "eMonos",
    "description" : "Эмийг эмчийн бичсэн жорын дагуу хэрэглэцгээе.",
    "hashtag" : "#bilguunerkh",
    "lnk": "OPEN",
  },



]

const MapProjects = () => {
  return(
    <div className={styles.Pro}>
      {Projects.map((item) => (
        <div className={styles.thisProject}>
          <img className={styles.ProImg} src={item.image}/>

          <div className={styles.middle}>
          {/* <a className={styles.htag} href="#">OPEN</a> */}
          {/* <div className={styles.htag}>
            <h1>OPEN</h1>
          </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}


const Project = () => {
  return (
    <div id="project" className={styles.Container}>
      <div className={styles.ListProject}>
        <h1 className={styles.Made}>Projects <span style={{color:"yellow", fontSize: 60}}>Made</span></h1>
        <MapProjects/>
      </div>
    </div>

  )
}

export default Project;