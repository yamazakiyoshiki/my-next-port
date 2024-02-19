import styles from "@/app/ui/homeboard/help/help.module.css"
import { MdHelpCenter } from "react-icons/md"

const helpData = [
  {
    cardTitle: "user",
    title: "ユーザー",
    desc: "dfajjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
  },
  {
    cardTitle: "problem",
    title: "問題",
    desc: "dsfsf",
  },
]

const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MdHelpCenter size={30}/>
        <h1>ProBoardのご利用方法</h1>
      </div>
      <div className={styles.intro}>
        <span>
          プログラミング用学習アプリProBoardをご利用ありがとうございます。<br />
          このページでは主な使い方を紹介しています。操作など分からなくなった時には<br />
          立ち寄ってみてください。これからも機能を追加していく予定なのでその際は<br />
          ヘルプページも追加していくのでどうぞご確認ください。
        </span>
        <div className={styles.collection}>
      {helpData.map((help) => (
        <div key={help.title} className={`${styles.card} ${styles[help.cardTitle]}`}>
          <h2>{help.title}</h2>
          <span>{help.desc}</span>
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Help