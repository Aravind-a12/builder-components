import React from "react"
import styles from "./PageTitle.module.scss"

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle
