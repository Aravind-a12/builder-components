import React from "react"
import styles from "./GreetingCard.module.scss"
import Image from "../../assets/images/image.png"

const GreetingCard = () => {
  return (
    <div className={styles.greetWrapper}>
      <img src={Image} alt="" />
      <div className={styles.textWrapper}>
        <p>
          株式会社ビルダーズブリッジを設立以来、「満足と笑顔を造る」を企業理念に日々邁進しております。現在では注文建築ばかりではなく、リノベーションや保育園、医院、介護施設など商業施設の作品も数多くご依頼を頂けるまで成⾧することができました。{" "}
          <br />
          　技術者集団ゆえに気の利いた営業対応はできませんが、誠意と技術でご満足頂ける対応に努めてまいります。おかげ様で営業活動も行わず、お仕事のご依頼をいただく約9割のクライアント様は過去のOB様からのご紹介で成り立っております。
          <br />
          現在も、そしてこれからも企業理念を基にスタッフ一同、納得頂ける作品造りに邁進してまいります。
        </p>
        <h3>代表取締役 谷口 厚志</h3>
      </div>
    </div>
  )
}

export default GreetingCard
