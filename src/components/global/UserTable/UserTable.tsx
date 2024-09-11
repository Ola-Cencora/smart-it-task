import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import Spinner from "../../features/Spinner/Spinner";
import styles from "./UserTable.module.scss";

const UserTable = () => {
  const { getUsers } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      {error && (
        <p className={styles.error}>
          Error fetching users data, please try again later
        </p>
      )}
      {loading && <Spinner />}
      {!error && !loading && (
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
            {data.map(({ id, name, username, email, phone }) => (
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
      )}
    </main>
  );
};

export default UserTable;
