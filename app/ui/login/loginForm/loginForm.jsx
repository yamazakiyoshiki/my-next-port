"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h1>ログイン</h1>
      <input type="text" placeholder="ユーザーネーム" name="username" />
      <input type="password" placeholder="パスワード" name="password" />
      <SingInButton/>
      {/* <button>ログイン</button> */}
      {/* {state === "Wrong Credentials" && (
        <p>ログインに失敗しました。</p>
      )} */}
      {state && "Wrong Credentials" && (
        <p>ログインに失敗しました。</p>
      )}
    </form>
  );
};

const SingInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending}>
      ログイン
    </button>
  )
}

export default LoginForm;