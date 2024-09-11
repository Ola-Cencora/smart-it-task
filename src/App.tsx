import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import Header from "./components/global/Header/Header";
import UserTable from "./components/global/UserTable/UserTable";

const App = () => (
  <Provider store={store}>
    <Header />
    <UserTable />
  </Provider>
);

export default App;
