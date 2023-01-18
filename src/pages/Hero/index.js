import React from 'react'
import styles from "./style.module.scss";


const Educations = [
  {
    "title" : "Pinecone Academy ",
    "description" : "ДЭЛХИЙД ӨРСӨЛДӨХ УР ЧАДВАРЫГ ЭЗЭМШЬЕ ",
    "images" : "https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/318462959_5773240559423184_2712645135413006135_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=N-3iXF1zDtAAX_BOs0D&_nc_ht=scontent.fuln1-1.fna&oh=00_AfDyu9s86ycP86a86zkh19_cA7mkI54stlvBSqC3ZWUdTQ&oe=63C58C04",
    "date" : "2022-2023",
  },
  {
    "title" : "Nest Education High School",
    "description" : "Дүүлэн нис | Нэг түмэн инженер | Хүн чанар, Хүсэл мөрөөдөл, Хичээл зүтгэл",
    "images" : "https://nhs.edu.mn/assets/images/env32.jpg",
    "date" : "2020-2022",
  },

  {
    "title" : "Gerege Academy",
    "description" : "Дэлхийд өрсөлдөх чадвартай “10.000 программист”",
    "images" : "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/118007507_106646304498474_6899302290701246639_n.jpg?stp=cp0_dst-jpg_e15_q65_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=8024bb&_nc_ohc=sljm_QlgPCgAX_gxFDQ&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAhN1h25nBGp6waUs00zgPCcv42R-cVRKnPTsxLuj1DpA&oe=63E88363",
    "date" : "2018-2020",
  },
]


const MapEducations = () => {
  return (
    <>
    <div className={styles.Educa}>
      {Educations.map((item) => (
        <div className={styles.thisEdu}>
          <div className={styles.hho}>
             <img className={styles.EduImg} src={item.images}/>
          </div>
         
          <div className={styles.hha}>
          {/* <h3 style={{color: "white", fontSize: 35}}>{item.title}</h3> */}
          <a className={styles.htag} href="/pinecone/">{item.title}</a>
          <p style={{color: "#F2EDD7"}}>{item.description}</p>
          <h4 style={{color: "#1E6F5C"}}>{item.date}</h4>
          </div>
   
          </div>
      ))}
    </div>
    </>
  )
}

const Hero = () => {
  return (
    <div id="education" className={styles.Container}>
      <div className={styles.ListEdu}>
        {/* <h1 style={{color: "#FBF2CF"}}>My <span style={{color: "#2192FF", textAlign: "center"}}>Educations</span></h1> */}
        <MapEducations/>
        </div>
       
      </div>
      

  )
}
export default Hero;