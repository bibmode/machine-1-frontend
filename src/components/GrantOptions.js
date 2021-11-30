import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../App";

const GrantOptions = ({ options, label }) => {
  const { setChosenGrants, chosenGrants } = useContext(AppContext);

  const [checked, setChecked] = useState(options.map((option) => false));

  const handleChange1 = (event) => {
    setChecked(options.map((option) => event.target.checked));

    if (event.target.checked) {
      setChosenGrants([
        ...chosenGrants.filter((grant) => !options.includes(grant)),
        ...options,
      ]);
    } else {
      setChosenGrants(chosenGrants.filter((grant) => !options.includes(grant)));
    }
  };

  const handleChange2 = (optionIndex) => {
    setChecked(
      options.map((option, index) =>
        index === optionIndex ? !checked[index] : checked[index]
      )
    );

    if (chosenGrants && chosenGrants.includes(options[optionIndex])) {
      setChosenGrants(
        chosenGrants.filter((grant) => grant !== options[optionIndex])
      );
    } else {
      setChosenGrants([...chosenGrants, options[optionIndex]]);
    }
  };

  const children = (
    <>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          label={
            <Typography
              variant="subtitle2"
              component="h3"
              sx={{ fontSize: 13 }}
            >
              {option}
            </Typography>
          }
          checked={checked[index]}
          control={
            <Checkbox
              type="checkbox"
              name="grants"
              value={options[index]}
              onClick={() => handleChange2(index)}
            />
          }
        />
      ))}
    </>
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mr: 4,
          mb: 2,
          fontSize: 14,
        }}
      >
        <FormControlLabel
          sx={{ justifyContent: "start" }}
          label={
            <Typography
              variant="subtitle2"
              component="h3"
              sx={{ fontSize: 14, fontWeight: 600 }}
            >
              {label}
            </Typography>
          }
          control={
            <Checkbox
              checked={checked.every((val, i, arr) => val === true)}
              indeterminate={!checked.every((val, i, arr) => val === arr[0])}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </Box>
    </div>
  );
};

export default GrantOptions;
