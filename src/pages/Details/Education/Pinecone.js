import React from 'react'
import styles from "./style.module.scss";

const Educationa = [
    {
      "title" : "Pinecone Academy ",
      "description" : "Дэлхийд үнэлэгдэх Монгол инженерүүдийг бэлтгэж, хамтдаа олон улсын жишигт нийцсэн Монгол компанийг байгуулахаар Nest Academy болон MStars Academy нэгдлээ. Нэгэн ижил зорилгын хүрээнд үйл ажиллагаагаа явуулж буй Nest Academy болон MStars Academy нь илүү өндөр үр дүнд хүрэхийн тулд хүчээ нэгтгэж, нэгдмэл зорилготой ажиллах шийдвэрийг гарган, Pinecone нэрээр дэлхийд гарах бэлтгэлээ эхлүүллээ. Монгол хүүхэд, залуусыг дэлхийн хэмжээний инженерүүд болон боловсорч гүйцэх хүртэл бойжуулах том экосистем нь болж, боловсорсон үр нь тархан дэлгэрч өтгөн ой болж тэлэхийг бэлгэшээн “Боргоцой” буюу Pinecone хэмээн нэрлэсэн юм.",
      "images" : "https://content.ikon.mn/news/2022/9/27/xwdthk_Pinecone_photo_x974.jpg",
    },
  ]


const DetailsEdu1 = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.Introduction}>
                {Educationa.map((item) => (
                    <>
                    <div className={styles.detailTitle}>
                        <h1>{item.title}</h1>
                    </div>
                    <img className={styles.detailImg} src={item.images}/>
                    <p className={styles.detailDescription}>{item.description}</p>
                    </>

                ))}
            </div>

            
        </div>
    )
}
export default DetailsEdu1