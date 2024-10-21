"use client";

import Todos from "@/components/todos/todos";
import styles from "./page.module.css";
import Modal from "@/components/modals/modal/Modal";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <div>
          <h2 className={styles.todos_header}>Todos</h2>
          <div>
            <button>Add Todo</button>
          </div>
        </div>
        <Todos />
      </div>
      <Modal />
    </div>
  );
}
