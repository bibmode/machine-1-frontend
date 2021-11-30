import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../App";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup.string("Enter your password").required("Password is required"),
  host: yup.string("Enter your host name").required("Host is required"),
});

const ButtonWrapper = styled("div")(() => ({
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

const LoginForm = () => {
  const { setToggleForm, getUserPriviledges, getGrantsArray, setLoginError } =
    useContext(AppContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      host: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const username = values.username;
      const password = values.password;
      const host = values.host;

      const entry = {
        username,
        password,
        host,
      };

      const access = await getUserPriviledges(entry);

      if (access.includes("Access denied")) {
        setLoginError(true);
        return;
      }

      getGrantsArray(access);
      navigate(`/${values.username}`, { replace: true });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="username"
        name="username"
        variant="standard"
        label="Username"
        fullWidth
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <Input
        id="host"
        name="host"
        variant="standard"
        label="Host"
        fullWidth
        value={formik.values.host}
        onChange={formik.handleChange}
        error={formik.touched.host && Boolean(formik.errors.host)}
        helperText={formik.touched.host && formik.errors.host}
      />
      <Input
        id="password"
        name="password"
        type="password"
        variant="standard"
        label="Password"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <ButtonWrapper>
        <Submit variant="contained" type="submit" id="submitBtn">
          login
        </Submit>
        <Button size="small" onClick={() => setToggleForm(false)}>
          Add new user
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default LoginForm;
