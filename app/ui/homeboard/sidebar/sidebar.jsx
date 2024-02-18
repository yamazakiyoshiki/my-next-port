import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { auth, signOut } from "@/app/auth";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdCreateNewFolder ,
  MdOutlineMenuBook,
  MdFormatAlignJustify,
} from "react-icons/md";
import Link from "next/link";

const menuItems = [
  {
    title: "ページ",
    list: [
      {
        title: "ホーム",
        path: "/homeboard",
        icon: <MdDashboard />,
      },
      {
        title: "ユーザー",
        path: "/homeboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "問題一覧",
        path: "/homeboard/problems",
        icon: <MdFormatAlignJustify />,
      },
      {
        title: "自分の投稿一覧",
        path: "/homeboard/problems/mypost",
        icon: <MdFormatAlignJustify />,
      },
      {
        title: "問題を解く",
        path: "/homeboard/problems/resolves",
        icon: <MdOutlineMenuBook />,
      },
      {
        title: "問題を作る",
        path: "/homeboard/problems/add",
        icon: <MdCreateNewFolder />,
      },
    ],
  },
  {
    title: "分析",
    list: [
      {
        title: "レポート",
        path: "/homeboard/reports",
        icon: <MdAnalytics />,
      },
      // {
      //   title: "チーム",
      //   path: "/homeboard/teams",
      //   icon: <MdPeople />,
      // },
    ],
  },
  {
    title: "ユーザー",
    list: [
      // {
      //   title: "設定",
      //   path: "/homeboard/settings",
      //   icon: <MdOutlineSettings />,
      // },
      {
        title: "使い方",
        path: "/homeboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>
            {user.isAdmin? "認証済み" : "ゲストユーザー"}
          </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <div>
        <Link href={`/homeboard/users/${user.id}`} className={styles.setting}>
          <MdOutlineSettings/>
          ユーザー設定
        </Link>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          ログアウト
        </button>
      </form>
    </div>
  );
};

export default Sidebar;