import React from "react"
import styles from "./Characteristics.module.scss"
import { ReactComponent as Icon } from "../../assets/icon/image.svg"

interface CharacteristicsProps {
  imageUrl: string
  title: string
  heading: string
  paragraph: string
  reverseDirection?: boolean
}

const Characteristics: React.FC<CharacteristicsProps> = ({
  imageUrl,
  title,
  heading,
  paragraph,
  reverseDirection = false,
}) => {
  const charWrapperClass = reverseDirection
    ? `${styles.charWrapper} ${styles.reverse}`
    : styles.charWrapper

  const textWrapperClass = reverseDirection
    ? `${styles.textWrapper} ${styles.reverse}`
    : styles.textWrapper

  const polygonClass = reverseDirection
    ? `${styles.polygonSymbol} ${styles.reverse}`
    : styles.polygonSymbol

  return (
    <div className={charWrapperClass}>
      <img src={imageUrl} alt="" />
      <div className={textWrapperClass}>
        <h2>{title}</h2>
        <div className={styles.line}></div>
        <span className={polygonClass}></span>{" "}
        <div className={styles.bottomContent}>
          <div className={styles.textContent}>
            <p className={styles.heading}>{heading}</p>
            <p className={styles.para}>{paragraph}</p>
          </div>
          <span className={styles.readMore}>
            <p className={styles.read}>Read More</p> <Icon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Characteristics
