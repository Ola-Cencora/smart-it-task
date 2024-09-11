import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <h1>
      User management table that displays user information fetched from a mock
      API
    </h1>
    <p>Filter the content by name, username, email, and phone</p>
  </header>
);

export default Header;
