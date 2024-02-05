import React from "react"
import styles from "./PointsCard.module.scss"

interface PointsCardProps {
  title: string
  description: string
  icon: React.ReactElement
}

const PointsCard: React.FC<PointsCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.pointWrapper}>
      {icon}
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PointsCard
