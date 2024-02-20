"use client";

import styles from "@/app/ui/homeboard/navbar/responsiveNavbar/navcontents/navcontents.module.css";
import Link from "next/link";

const NavContents= ({setIsOpen, navContents}) => {
  return (
    <div className={styles.container}>
      <button>
        close
      </button>
      <div className={styles.overlay}>
        <div className={styles.navContents}>
          {navContents?.map((content) => (
            <Link
              key={content.title}
              href={content.path}
              className={styles.navContent}
            >
              {content.title}
              {content.icon}
            </Link>
          ))}
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </div>
    </div>
  )
}

export default NavContents;
