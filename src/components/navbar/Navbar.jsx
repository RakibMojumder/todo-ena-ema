import styles from "./navbar.module.css";
import AddTodo from "../modals/addTodo/AddTodo";

const Navbar = () => {
  return (
    <div>
      <h2 className={styles.todos_header}>Todos</h2>
      <div>
        <AddTodo />
        {/* <button onClick={() => setIsOpen(true)}>Add Todo</button> */}
      </div>
    </div>
  );
};

export default Navbar;
