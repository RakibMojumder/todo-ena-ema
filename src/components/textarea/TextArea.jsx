import styles from "./textArea.module.css";

const TextArea = ({
  placeHolder,
  onChange,
  label,
  className,
  style,
  ...props
}) => {
  return (
    <div>
      {label && <label className={styles.text_area_label}>{label}</label>}
      <textarea
        placeholder={placeHolder}
        onChange={onChange}
        rows={6}
        className={`${styles.text_area} ${className}`}
        style={style}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
