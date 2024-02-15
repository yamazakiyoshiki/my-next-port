import { addProblem } from "@/app/lib/actions";
import styles from "@/app/ui/homeboard/problems/addProblem/addProblem.module.css";

const AddProblemPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProblem} className={styles.form}>
        <input type="text" placeholder="問題のタイトル" name="title" required />
        <select name="cat" id="cat">
          <option value="" disabled selected>問題のカテゴリーを選択</option>
            <option value="js">JavaScript</option>
            <option value="ts">TypeScript</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="next">Next.Js</option>
            <option value="nuxt">Nuxt.Js</option>
        </select>
        <input type="number" placeholder="問題のステップ数" name="step" min={0} max={10}required />
        {/* <input type="file" placeholder="完成図" name="img" accept="image/jpeg, image/png" /> */}
          <select name="level" id="level" required>
            <option value="" disabled selected>問題のレベルを選択してください</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="A">C</option>
          </select>
        {/* <input type="text" placeholder="size" name="size" /> */}
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="問題を記述"
        ></textarea>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default AddProblemPage;