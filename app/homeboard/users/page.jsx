import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import Search from "@/app/ui/homeboard/search/search";
import styles from "@/app/ui/homeboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="ユーザーを検索..." />
        <Link href="/homeboard/users/add">
          <button className={styles.addButton}>新規追加</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>名前</td>
            <td>メールアドレス</td>
            <td>作成日</td>
            <td>アカウントロール</td>
            <td>ステータス</td>
            <td>アクション</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "認証済み" : "ゲスト"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/homeboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      詳細
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      削除
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

export default UsersPage;