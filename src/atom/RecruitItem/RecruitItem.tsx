import React from "react"
import styles from "./RecruitItem.module.scss"

interface RecruitItemProps {
  number: string
  description: string
}

const RecruitItem: React.FC<RecruitItemProps> = ({ number, description }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.polygonSymbol}>
        <span className={styles.number}>{number}</span>
      </span>
      <p>{description}</p>
    </div>
  )
}

export default RecruitItem
