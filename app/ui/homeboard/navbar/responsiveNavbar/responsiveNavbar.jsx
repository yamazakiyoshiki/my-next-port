"use client";

import { useState } from "react";
import {
    MdAnalytics,
    MdDashboard,
    MdFormatAlignCenter,
    MdFormatAlignJustify,
    MdHelpCenter,
    MdLibraryAdd,
    MdLibraryBooks,
    MdOutlineMenuBook,
    MdSupervisedUserCircle
  } from "react-icons/md";
import styles from "@/app/ui/homeboard/navbar/responsiveNavbar/responsiveNavbar.module.css";
import NavContents from "./navcontents/navcontents";

const navContents = [
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
    icon: <MdLibraryBooks />,
  },
  {
    title: "問題を解く",
    path: "/homeboard/problems/resolves",
    icon: <MdOutlineMenuBook />,
  },
  {
    title: "問題を作る",
    path: "/homeboard/problems/add",
    icon: <MdLibraryAdd />,
  },
  {
    title: "レポート",
    path: "#",
    icon: <MdAnalytics />,
  },
  {
    title: "使い方",
    path: "/homeboard/help",
    icon: <MdHelpCenter />,
  },
]

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavContents = () => setIsOpen(true);
  return (
    <div>
      <button onClick={openNavContents}>
        <MdFormatAlignCenter/>
      </button>
      {isOpen? <NavContents setIsOpen={setIsOpen} navContents={navContents} /> : null}
    </div>
  )
}

export default ResponsiveNavbar;