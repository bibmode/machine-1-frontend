import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

const databases = [
  {
    value: "*",
    label: "Global",
  },
  {
    value: "it107",
    label: "IT 107",
  },
  {
    value: "login_course",
    label: "Login Course",
  },
  {
    value: "notes_app",
    label: "Notes App",
  },
];

const SelectDatabase = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <TextField
        id="standard-select-currency"
        select
        label="Database"
        value={currency}
        onChange={handleChange}
        helperText="Please select what database to add user"
        variant="standard"
        sx={{ textAlign: "left", mb: 4 }}
        fullWidth
      >
        {databases.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectDatabase;
