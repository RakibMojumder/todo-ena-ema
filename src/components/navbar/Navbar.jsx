import styles from "./navbar.module.css";
import AddTodo from "../modals/addTodo/AddTodo";
import Select from "../select/Select";
import { allPriorities } from "@/constant/todoPriority";
import Input from "../input/Input";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <h2 className={styles.todos_header}>Todos</h2>
      <div className={styles.navbar_right}>
        <Input
          type="search"
          placeHolder="Search here..."
          className={styles.search_box}
          containerClassName={styles.search_box_container}
        />
        <Select options={allPriorities} style={{ padding: "8px 12px" }} />
        <AddTodo />
      </div>
    </div>
  );
};

export default Navbar;
