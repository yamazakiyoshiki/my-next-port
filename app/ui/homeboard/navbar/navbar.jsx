"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
import {
  MdFormatAlignJustify,
  MdPublic,
  MdSearch,
  MdSupervisedUserCircle,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}Page</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="検索..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <Link href="/homeboard/problems">
            <MdFormatAlignJustify size={20} />
          </Link>
          <Link href="/homeboard/users">
          <MdSupervisedUserCircle size={20} />
          </Link>
          <Link href="/homeboard">
            <MdPublic size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;