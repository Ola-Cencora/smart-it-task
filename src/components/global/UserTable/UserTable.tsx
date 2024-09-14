import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect, useState } from "react";
import Spinner from "../../features/Spinner/Spinner";
import SearchField from "../../features/SearchField/SearchField";
import styles from "./UserTable.module.scss";

const UserTable = () => {
  const { getUsers, searchUsers } = useActions();
  const { data, error, loading, filters } = useTypedSelector(
    (state) => state.users
  );

  const [searchName, setSearchName] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filter: keyof typeof filters
  ) => {
    const { value } = e.target;

    switch (filter) {
      case "searchName":
        setSearchName(value);
        break;
      case "searchUsername":
        setSearchUsername(value);
        break;
      case "searchEmail":
        setSearchEmail(value);
        break;
      case "searchPhone":
        setSearchPhone(value);
        break;
    }
    searchUsers({ filter, value });
  };

  const filteredUsers = data.filter((user) => {
    return (
      (!filters.searchName ||
        user.name.toLowerCase().includes(filters.searchName.toLowerCase())) &&
      (!filters.searchUsername ||
        user.username
          .toLowerCase()
          .includes(filters.searchUsername.toLowerCase())) &&
      (!filters.searchEmail ||
        user.email.toLowerCase().includes(filters.searchEmail.toLowerCase())) &&
      (!filters.searchPhone ||
        user.phone.toLowerCase().includes(filters.searchPhone.toLowerCase()))
    );
  });

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
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone number</th>
            </tr>
            <tr>
              <td>
                <SearchField
                  value={searchName}
                  onChange={(e) => handleChange(e, "searchName")}
                  placeholder="Search by name"
                />
              </td>
              <td>
                <SearchField
                  value={searchUsername}
                  onChange={(e) => handleChange(e, "searchUsername")}
                  placeholder="Search by username"
                />
              </td>
              <td>
                <SearchField
                  value={searchEmail}
                  onChange={(e) => handleChange(e, "searchEmail")}
                  placeholder="Search by email"
                />
              </td>
              <td>
                <SearchField
                  value={searchPhone}
                  onChange={(e) => handleChange(e, "searchPhone")}
                  placeholder="Search by phone number"
                />
              </td>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {filteredUsers.map(({ id, name, username, email, phone }) => (
              <tr key={id}>
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
