import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Provider } from "urql";
import { clientUrql } from "./lib/urql";
import { UserTable } from "./pages/users";
function App() {
  return (
    <Provider value={clientUrql}>
      <div className="App">
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;
