import Todos from "@/components/todos/todos";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Navbar />
        <Todos />
      </div>
    </div>
  );
}
