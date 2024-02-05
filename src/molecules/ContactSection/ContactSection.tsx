import React from "react"
import styles from "./ContactSection.module.scss"
import { Button } from "@willeder/component-library"

interface ContactSectionProps {
  title: string
  description: string
  buttonText: string
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.textWrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Button className="outlined">{buttonText}</Button>
    </div>
  )
}

export default ContactSection
