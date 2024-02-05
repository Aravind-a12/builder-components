import React from "react"
import styles from "./WantedItem.module.scss"

interface InfoItemProps {
  title: string
  content: string
}

const WantedItem: React.FC<InfoItemProps> = ({ title, content }) => {
  const contentWithLineBreaks = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.polygonSymbol}></span>
        <h2>{title}</h2>
      </div>
      <div className={styles.text}>
        <p>{contentWithLineBreaks}</p>
      </div>
    </div>
  )
}

export default WantedItem
