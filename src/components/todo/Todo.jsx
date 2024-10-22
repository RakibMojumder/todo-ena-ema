import styles from "./todo.module.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import EditTodo from "../modals/editTodo/EditTodo";
import CompleteAlert from "../alerts/completeTask/CompleteAlert";

const Todo = ({ todo, serialNo }) => {
  const priorityStyle =
    todo?.priority === "Low"
      ? `${styles.low}`
      : todo?.priority === "Medium"
      ? `${styles.medium}`
      : `${styles.high}`;

  return (
    <tr
      className={`${
        todo?.status === "Completed" ? `${styles.complete_todo_bg}` : ""
      }`}
    >
      <td style={{ minWidth: "50px", paddingLeft: "20px" }}>{serialNo + 1}</td>
      <td>{todo.name}</td>
      <td style={{ minWidth: "300px" }}>{todo.description}</td>
      <td>{todo.category}</td>
      <td>{todo.date.split("T")[0]}</td>
      <td style={{ fontSize: "12px" }}>
        <span className={priorityStyle}>{todo.priority}</span>
      </td>
      <td>{todo.status}</td>
      <td className={styles.action_button_container}>
        <button className={styles.delete_button}>
          <MdDelete size={20} />
        </button>
        <EditTodo todo={todo} />
        <CompleteAlert todo={todo} />
      </td>
    </tr>
  );
};

export default Todo;
