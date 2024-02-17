"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h1>ログイン</h1>
      <input type="text" placeholder="ユーザーネーム" name="username" />
      <input type="password" placeholder="パスワード" name="password" />
      <button>ログイン</button>
      {state && state}
    </form>
  );
};

export default LoginForm;