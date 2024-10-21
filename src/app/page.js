"use client";

import Todos from "@/components/todos/todos";
import styles from "./page.module.css";
import Modal from "@/components/modals/modal/Modal";
import { useState } from "react";
import AddTodo from "@/components/modals/addTodo/AddTodo";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.page}>
      <div>
        <Navbar />
        <Todos />
      </div>
    </div>
  );
}
