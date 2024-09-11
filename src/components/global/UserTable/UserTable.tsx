import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import styles from "./UserTable.module.scss";

const UserTable = () => {
  const { getUsers } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    getUsers();
  }, []);

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
        <tbody className={styles.table__body}>
          {!error &&
            !loading &&
            data.map(({ id, name, username, email, phone }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserTable;
