import { updateProblem } from "@/app/lib/actions";
import { fetchProblem } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/problems/singleProblem/singleProblem.module.css";
import Image from "next/image";

const SingleProblemPage = async ({ params }) => {
  const { id } = params;
  const problem = await fetchProblem(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {problem.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProblem} className={styles.form}>
          <input type="hidden" name="id" value={problem.id} />
          <label>タイトル</label>
          <input type="text" name="title" placeholder={problem.title} />
          <label>ステップ数</label>
          <input type="number" name="step" placeholder={problem.step} max="10" />
          {/* <label>完成図</label>
          <input type="file" name="img" placeholder="写真を入れてください" accept="image/jpeg, image/png" /> */}
          <label>難易度</label>
          <select name="level" id="level">
            <option value="" disabled selected>{problem.level}</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          {/* <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={problem.size || "size"}
          /> */}
          <label>カテゴリー</label>
          <select name="cat" id="cat">
            <option value="" disabled selected>{problem.cat}</option>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Next.js">Next.Js</option>
            <option value="Nuxt.js">Nuxt.Js</option>
          </select>
          <label>問題の詳細</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={problem.desc}
          ></textarea>
          <button>投稿を更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProblemPage;