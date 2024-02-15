import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>最新のスコア</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>名前</td>
            <td>ステータス</td>
            <td>日付</td>
            <td>合計</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
                大西浩介
              </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.pending}`}>
              ゴールド
            </span>
          </td>
          <td>2023.12.23</td>
          <td>18,000</td>
        </tr>
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
                山口健太郎
              </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.done}`}>
              シルバー
            </span>
          </td>
          <td>2023.12.20</td>
          <td>13,000</td>
        </tr>
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
                桜庭雄二
              </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.cancelled}`}>
              ブロンズ
            </span>
          </td>
          <td>2023.12.25</td>
          <td>12,000</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Transactions;