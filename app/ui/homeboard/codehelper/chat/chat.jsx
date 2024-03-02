"use client";

import { useEffect, useState } from "react";
import styles from "./chat.module.css";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { GoPerson } from "react-icons/go";
import { MdOutlineEngineering } from "react-icons/md";

const Chat = ({ content, role }) => {
  const [chatMessage, setChatMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(currentIndex < content.length) {
      const timeoutId = setTimeout(() => {
        setChatMessage((prevText) => prevText + content[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 80);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [content, currentIndex]);
  return (
    <motion.div
      style={{
        alignSelf: role === "assistant"? "flex-start" : "flex-end",
        width: "auto",
      }}
      initial={{
        opacity: 0,
        translateY: "100%",
      }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, translateY: 0}}
    >
      <div
        className={styles.flexContainer}
        style={{flexDirection: role === 'assistant' ? 'row' : 'row-reverse'}}>
        <IconContext.Provider
          value={{ className: styles.iconProvider }}>
          {role === 'user' ? (<GoPerson />) : (<MdOutlineEngineering />)}
        </IconContext.Provider>
        <div
          className={`${styles.chatBubble} ${role === 'assistant' ? styles.chatBubbleAssistant : styles.chatBubbleUser}`}>
          {role === 'assistant' && (
            <div className={styles.label}>
              コードヘルパー
            </div>
          )}
          {role === 'user' && (
            <div className={`${styles.label} ${styles.labelUser}`}>
              あなた
            </div>
          )}
        <div>
          {role === 'assistant' ? chatMessage || '' : content || ''}
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Chat;
