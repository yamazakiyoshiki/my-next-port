import Link from "next/link";
import styles from "@/app/ui/homeboard/problems/problems.module.css";
import Search from "@/app/ui/homeboard/search/search";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import { fetchProblems } from "@/app/lib/data";
import { deleteProblem } from "@/app/lib/actions";

const ProblemsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, problems } = await fetchProblems(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="問題を検索..." />
        <Link href="/homeboard/problems/add">
          <button className={styles.addButton}>新規作成</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>タイトル</td>
            <td>詳細</td>
            <td>レベル</td>
            <td>作成日</td>
            <td>投稿者</td>
            <td>編集</td>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <div className={styles.problem}>
                  {problem.title > 20 ?
                  `${problem.title.substring(0, 20)}...`:problem.title}
                </div>
              </td>
              <td>{problem.desc.length >
                20 ? `${problem.desc.substring(0, 20)}...` : problem.desc}</td>
              <td>{problem.level}</td>
              <td>{problem.createdAt?.toString().slice(4, 16)}</td>
              <td>{problem.username}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/homeboard/problems/${problem.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      詳細
                    </button>
                  </Link>
                  <form action={deleteProblem}>
                    <input type="hidden" name="id" value={problem.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      消去
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProblemsPage;