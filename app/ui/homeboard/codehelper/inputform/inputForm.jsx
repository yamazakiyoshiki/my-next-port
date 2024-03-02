import { useRef } from "react";
import styles from "./inputForm.module.css";

const InputForm = ({onSubmit}) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if(inputValue) {
      onSubmit({
        role: "user",
        content: inputValue,
      });
      inputRef.current.value = "";
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <input type="text"
        ref={inputRef}
        className={styles.input}
        placeholder="テキストを入力..."
      />
      <button type="submit" className={styles.button}>
        送信
      </button>
    </form>
  )
}

export default InputForm;
