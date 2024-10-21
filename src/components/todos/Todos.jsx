import Todo from "../todo/Todo";
import styles from "./todos.module.css";

const Todos = () => {
  return (
    <div className={styles.todos_container}>
      <div className={styles.todos}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ minWidth: "50px", paddingLeft: "20px" }}>S.N.</th>
              <th>Name</th>
              <th style={{ minWidth: "300px" }}>Description</th>
              <th>Category</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((todo, index) => (
              <Todo key={index} serialNo={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
