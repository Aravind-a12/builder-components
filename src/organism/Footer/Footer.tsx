import React from "react"
import styles from "./Footer.module.scss"
import { ReactComponent as Logo } from "../../assets/icon/logo_b.svg"
import { ReactComponent as FacebookIcon } from "../../assets/icon/Social icon.svg"
import { ReactComponent as InstIcon } from "../../assets/icon/_10.svg"

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.bodyContent}>
        <Logo />
        <div className={styles.baseContent}>
          <div className={styles.textContent}>
            <span className={styles.text}>
              <p>株式会社ビルダーズブリッジ</p>
              <p>〒270-0023</p>
              <p>千葉県松戸市八ケ崎１丁目8-1 松村ビル1階</p>
            </span>
            <div className={styles.icons}>
              <FacebookIcon />
              <InstIcon />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuItems}>
              <p>Top</p>
              <p>CONCEPT</p>
              <p>WORKS</p>
              <p>CONSULT</p>
            </div>
            <div className={styles.menuItems}>
              <p>BLOG</p>
              <p>COMPANY</p>
              <p>RECRUIT</p>
              <p>CONTACT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
