import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Gateway from "./pages/Gateway";
import axios from "axios";
import User from "./pages/User";
import { Alert } from "@mui/material";

export const AppContext = createContext(null);

function App() {
  const [toggleForm, setToggleForm] = useState(true);
  const [grants, setGrants] = useState(null);
  const [chosenGrants, setChosenGrants] = useState([]);
  const [loginError, setLoginError] = useState(false);
  const [privilegeError, setPrivilegeError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currency, setCurrency] = useState("*");

  const dataGrants =
    currency === "*"
      ? ["SELECT", "INSERT", "UPDATE", "DELETE", "FILE"]
      : ["SELECT", "INSERT", "UPDATE", "DELETE"];

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
  const adGrants =
    currency === "*"
      ? [
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
        ]
      : ["GRANT", "LOCK TABLES", "REFERENCES"];

  const getUserPriviledges = async (entry) => {
    const res = await axios.post(
      "http://localhost/machine-problem-1/server/get-grants.php",
      entry
    );
    const data = res.data;
    return data;
  };

  const getGrantsArray = (data) => {
    const sliceIndex = data.includes("*.*")
      ? data.indexOf("ON *")
      : data.indexOf("ON `");

    const grantsArr = data.substring(6, sliceIndex - 1).split(", ");

    grantsArr[0] === "ALL PRIVILEGES"
      ? setGrants([].concat(dataGrants, strucGrants, adGrants))
      : setGrants(grantsArr);
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
      .post(
        `http://localhost/machine-problem-1/server/${
          entry.database === "*" ? "global" : "database"
        }-user.php`,
        entry
      )
      .then((res) => console.log(res));
  };

  const takeGrantsString = (access) => {
    let grantString;
    if (typeof access === "string") {
      grantString = access.substring(access.indexOf(`}`) + 7, access.length);
    }

    if (typeof access === "object") {
      grantString = access[0];
    }

    return grantString;
  };

  useEffect(() => {
    success &&
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
  }, [success]);

  useEffect(() => {
    loginError &&
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
  }, [loginError]);

  useEffect(() => {
    privilegeError &&
      setTimeout(() => {
        setPrivilegeError(false);
      }, 3000);
  }, [privilegeError]);

  return (
    <div className="App">
      {loginError && (
        <Alert
          sx={{ position: "sticky", top: 0, zIndex: 1000 }}
          severity="error"
        >
          No user found!
        </Alert>
      )}

      {privilegeError && (
        <Alert
          sx={{ position: "sticky", top: 0, zIndex: 1000 }}
          severity="warning"
        >
          Choose atleast one privilege!
        </Alert>
      )}

      {success && (
        <Alert
          sx={{ position: "sticky", top: 0, zIndex: 1000 }}
          severity="success"
        >
          Successfully added new user to database!
        </Alert>
      )}

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
          setLoginError,
          setPrivilegeError,
          setSuccess,
          currency,
          setCurrency,
          takeGrantsString,
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
