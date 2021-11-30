import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Gateway from "./pages/Gateway";
import axios from "axios";
import User from "./pages/User";

export const AppContext = createContext(null);

function App() {
  const [toggleForm, setToggleForm] = useState(true);
  const [grants, setGrants] = useState(null);
  const dataGrants = ["SELECT", "INSERT", "UPDATE", "DELETE", "FILE"];
  const strucGrants = [
    "CREATE",
    "ALTER",
    "INDEX",
    "DROP",
    "CREATE TEMPORARY TABLES",
    "SHOW VIEW",
    "CREATE ROUTINE",
    "ALTER ROUTINE",
    "EXECUTE",
    "CREATE VIEW",
    "EVENT",
    "TRIGGER",
  ];
  const adGrants = [
    "GRANT",
    "SUPER",
    "PROCESS",
    "RELOAD",
    "SHUTDOWN",
    "SHOW DATABASES",
    "LOCK TABLES",
    "REFERENCES",
    "REPLICATION CLIENT",
    "REPLICATION SLAVE",
    "CREATE USER",
  ];
  const [chosenGrants, setChosenGrants] = useState([]);

  const getUserPriviledges = async (values) => {
    const res = await axios.get(
      `http://localhost/machine-problem-1/server/priviledges.php?user=${values.username}&password=${values.password}&host=${values.host}`
    );
    const data = res.data;
    return data;
  };

  const getGrantsArray = (data) => {
    const sliceIndex = data.indexOf("ON *");
    const grantsArr = data.substring(6, sliceIndex - 1).split(", ");
    setGrants(grantsArr);
  };

  const getGrantType = (grant) => {
    if (dataGrants.some((dataGrant) => dataGrant === grant)) {
      return "Data";
    }

    if (strucGrants.some((strucGrant) => strucGrant === grant)) {
      return "Structure";
    }

    if (adGrants.some((adGrant) => adGrant === grant)) {
      return "Administration";
    }
  };

  const insertNewUser = async (entry) => {
    axios
      .post(`http://localhost/machine-problem-1/server/add-user.php`, entry)
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          toggleForm,
          setToggleForm,
          getUserPriviledges,
          grants,
          setGrants,
          getGrantsArray,
          getGrantType,
          dataGrants,
          strucGrants,
          adGrants,
          chosenGrants,
          setChosenGrants,
          insertNewUser,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Gateway />} />
            <Route exact path="/:user" element={<User />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
