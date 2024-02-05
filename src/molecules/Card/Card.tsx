import React from "react"
import styles from "./Card.module.scss"

interface CardProps {
  imageUrl: string
  date: string
  title: string
  isImageCard?: boolean
  imageCardText?: string
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  date,
  title,
  isImageCard = false,
  imageCardText,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={imageUrl} alt="" />
      <div className={styles.textWrapper}>
        <div className={styles.variant}>
          <h5>{date}</h5> {isImageCard && <p>{imageCardText}</p>}{" "}
        </div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card
