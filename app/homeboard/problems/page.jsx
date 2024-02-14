import Image from "next/image";
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
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <div className={styles.problem}>
                  <Image
                    src={problem.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.problemImage}
                  />
                  {problem.title}
                </div>
              </td>
              <td>{problem.desc}</td>
              <td>${problem.price}</td>
              <td>{problem.createdAt?.toString().slice(4, 16)}</td>
              <td>{problem.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/homeboard/problems/${problem.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProblem}>
                    <input type="hidden" name="id" value={problem.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
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