import styles from "./textArea.module.css";

const TextArea = ({ placeHolder, onChange, label, className, ...props }) => {
  return (
    <div>
      {label && <label className={styles.text_area_label}>{label}</label>}
      <textarea
        placeholder={placeHolder}
        onChange={onChange}
        rows={6}
        className={`${styles.text_area} ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
