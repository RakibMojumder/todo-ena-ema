import styles from "./navbar.module.css";
import AddTodo from "../modals/addTodo/AddTodo";
import Select from "../select/Select";
import SearchTodo from "../modals/searchTodo/SearchTodo";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <h2 className={styles.todos_header}>Todos</h2>
      <div className={styles.navbar_right}>
        <SearchTodo />
        <AddTodo />
      </div>
    </div>
  );
};

export default Navbar;
