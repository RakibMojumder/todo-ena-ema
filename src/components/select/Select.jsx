import styles from "./select.module.css"; // Optional: for styling

const Select = ({
  value,
  defaultValue,
  onChange,
  options,
  label,
  name,
  className,
  style,
  placeholder,
  ...props
}) => {
  return (
    <div>
      {label && <label className={styles.select_label}>{label}</label>}
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`${styles.select} ${className}`}
        style={style}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
