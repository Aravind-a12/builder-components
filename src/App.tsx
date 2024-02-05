import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Button, Input } from "@willeder/component-library"
import PointsCard from "./molecules/PointsCard/PointsCard"
import { ReactComponent as Point1 } from "./assets/icon/point_1.svg"

import Card from "./molecules/Card/Card"
import Characteristics from "./molecules/Characteristics/Characteristics"
import Footer from "./organism/Footer/Footer"
import BlogHomeLayout from "./organism/BlogHomeLayout/BlogHomeLayout"
import ContactSection from "./molecules/ContactSection/ContactSection"
import PageTitle from "./atom/PageTitle/PageTitle"
import GreetingCard from "./molecules/GreetingCard/GreetingCard"
import InfoItem from "./atom/InfoItem/InfoItem"
import WantedItem from "./atom/WantedItem/WantedItem"
import RecruitItem from "./atom/RecruitItem/RecruitItem"
import HistoryItem from "./molecules/HistoryItem/HistoryItem"

function App() {
  return (
    <div className="App">
      <PageTitle title={"CUSTOM DESIGN"} />
      <HistoryItem />
      {/* <RecruitItem number="01" description="物づくりに情熱をかたむけられる方" /> */}

      {/* <InfoItem title="名称" content="株式会社ビルダーズブリッジ" /> */}
      {/* <WantedItem
        title={"応募対象"}
        content={
          "〒270-0027 千葉県松戸市八ヶ崎１丁目８－１松村ビル１階 \n 株式会社ビルダーズブリッジ 人事採用係 宛\n TEL：047-349-5011 \n  FAX：047-349-5011"
        }
      /> */}

      {/* <PointsCard
        title={"専門知識を含めた判断が可能"}
        description={
          "イメージ通りの建築用地を探す。これが案外難しいものです。一般の方は極めて不動産情報を入手することが難しばかりでなく、用地探しのポイントがつかめず建物を建築する際の建築法令を含めた判断がかなりできないものです。"
        }
        icon={<Point1 />}
      /> */}
      {/* <Card
        imageUrl={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        }
        date={"2024.01.11"}
        title={"タイトル30字程度入ります。タイトル30字程度入ります。"}
        isImageCard={true}
        imageCardText="hello"
      /> */}
      {/* <ContactSection
        title={"CONTACT"}
        description={
          "50文字程度のテキストが入ります。50文字程度のテキストが入ります。50文字程度のテキストが入ります。"
        }
        buttonText={"お問い合わせ"}
      />
      <ContactSection
        title={"RECRUIT"}
        description={
          "50文字程度のテキストが入ります。50文字程度のテキストが入ります。50文字程度のテキストが入ります。"
        }
        buttonText={"詳細を見る"}
      /> */}
      <Footer />
      {/* <Characteristics
        imageUrl={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        }
        title={"CUSTOM DESIGN"}
        heading={" 自分だけのデザインで細部までこだわる"}
        paragraph={
          "45文字程度のテキストが入ります。45文字程度のテキストが入ります。45文字程度のテキスト"
        }
        reverseDirection={false}
      /> */}
    </div>
  )
}

export default App
