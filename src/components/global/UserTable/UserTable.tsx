import styles from "./UserTable.module.scss";

const UserTable = () => {
  return (
    <main>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody className={styles.table__body}></tbody>
      </table>
    </main>
  );
};

export default UserTable;
