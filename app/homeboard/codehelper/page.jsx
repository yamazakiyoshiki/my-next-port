"use client";

import { chat } from "@/app/lib/chat";
import Chat from "@/app/ui/homeboard/codehelper/chat/chat";
import styles from "@/app/ui/homeboard/codehelper/codehelper.module.css";
import InputForm from "@/app/ui/homeboard/codehelper/inputform/inputForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";


const CodeHelperPage = () => {
  const [chats, setChats] = useState([
    {
      role: "system",
      content: "",
    },
  ]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (message) => {
    try{
      setIsSubmit(true);
      setChats((chats) => [...chats, message]);
      const res = await chat(chats, message);
      setChats((chats) => [...chats, res]);
    } catch(error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <AnimatePresence>
          {chats.slice(1, chats.length).map((chat, index) => {
            return <Chat role={chat.role} content={chat.content} key={index}/>
          })}
        </AnimatePresence>
        {isSubmit && (
          <div className={styles.submitFlex}>
            ...
          </div>
        )}
      </div>
      <InputForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default CodeHelperPage;
