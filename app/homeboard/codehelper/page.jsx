"use client";

import styles from "@/app/ui/homeboard/codehelper/codehelper.module.css";
import { useState } from "react";


const CodeHelperPage = () => {
  const [chats, setChats] = useState([
    {
      role: "system",
      content: "",
    },
  ]);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className={styles.container}>
      helper
    </div>
  )
}

export default CodeHelperPage;
