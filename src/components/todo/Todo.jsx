import styles from "./todo.module.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Todo = ({ serialNo }) => {
  return (
    <tr>
      <td style={{ minWidth: "50px" }}>{serialNo + 1}</td>
      <td>Rakib Ahmed</td>
      <td style={{ minWidth: "300px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
      </td>
      <td>Personal</td>
      <td>{new Date().toLocaleDateString()}</td>
      <td>Low</td>
      <td>Pending</td>
      <td className={styles.action_button_container}>
        <button className={styles.delete_button}>
          <MdDelete size={20} />
        </button>
        <button className={styles.edit_button}>
          <CiEdit size={20} />
        </button>
        <button className={styles.complete_button}>
          <IoCheckmarkDoneOutline size={20} />
        </button>
      </td>
    </tr>
  );
};

export default Todo;
