import { cards } from "../lib/data";
import Card from "../ui/homeboard/card/card";
import Chart from "../ui/homeboard/chart/chart";
import styles from "../ui/homeboard/homeboard.module.css";
import Rightbar from "../ui/homeboard/rightbar/rightbar";
import Transactions from "../ui/homeboard/transactions/transactions";

const Homeboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Homeboard;