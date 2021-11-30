import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../App";
import GrantOptions from "./GrantOptions";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup.string("Enter your password").required("Password is required"),
  host: yup.string("Enter your host name").required("Host is required"),
});

const ButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Submit = styled(Button)(({ theme }) => ({
  marginBlock: theme.spacing(2),
  marginLeft: "-5px",
}));

const OptionsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
}));

const AddUserForm = () => {
  const {
    setToggleForm,
    dataGrants,
    strucGrants,
    adGrants,
    chosenGrants,
    insertNewUser,
  } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      host: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // setFieldValue("grants", chosenGrants);
      const username = values.username;
      const password = values.password;
      const host = values.host;
      const grants =
        chosenGrants.length < 28 ? chosenGrants.toString() : "ALL PRIVILEDGES";

      const entry = {
        username,
        password,
        host,
        grants,
      };

      console.log(entry);
      insertNewUser(entry);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        variant="standard"
        label="Username"
        fullWidth
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <Input
        variant="standard"
        label="Host"
        fullWidth
        id="host"
        name="host"
        value={formik.values.host}
        onChange={formik.handleChange}
        error={formik.touched.host && Boolean(formik.errors.host)}
        helperText={formik.touched.host && formik.errors.host}
      />
      <Input
        variant="standard"
        label="Password"
        fullWidth
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Typography
        color="GrayText"
        sx={{ display: "flex", my: 1, fontWeight: 400 }}
      >
        Priviledges
      </Typography>

      <OptionsWrapper>
        <GrantOptions options={dataGrants} label="Data" />
        <GrantOptions options={strucGrants} label="Structure" />
        <GrantOptions options={adGrants} label="Administrator" />
      </OptionsWrapper>

      <ButtonWrapper>
        <Submit variant="contained" type="submit" id="submitBtn">
          Add new user
        </Submit>
        <Button size="small" onClick={() => setToggleForm(true)}>
          login to existing account
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default AddUserForm;
