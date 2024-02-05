import React from "react"
import styles from "./BlogHomeLayout.module.scss"
import Card from "../../molecules/Card/Card"

const BlogHomeLayout = () => {
  return (
    <div className={styles.wrapper}>
      <h1>BLOG</h1>
      <div className={styles.cardContent}>
        <div className={styles.card}>
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            }
            date={"12/01/2024"}
            title={"something"}
          />
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            }
            date={"12/12/2202"}
            title={"any text"}
          />
          <Card
            imageUrl={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            }
            date={"12/32/3232"}
            title={"Longer text here"}
          />
        </div>
        <p>View More</p>
      </div>
    </div>
  )
}

export default BlogHomeLayout
