import { signOut } from "@/app/auth";
import styles from "./footer.module.css";
import { MdLogout } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Yamazaki Dev</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
          <button className={styles.logout}>
          <MdLogout />
          ログアウト
        </button>
      </form>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;