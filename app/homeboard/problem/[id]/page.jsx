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
          <label>Title</label>
          <input type="text" name="title" placeholder={problem.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={problem.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={problem.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={problem.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={problem.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={problem.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProblemPage;