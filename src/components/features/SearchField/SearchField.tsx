import styles from "./SearchField.module.scss";

type SearchFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const SearchField = ({ value, onChange, placeholder }: SearchFieldProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchField;
