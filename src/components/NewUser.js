import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Submit = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const LoginForm = () => {
  return (
    <>
      <Input variant="standard" label="Username" fullWidth />
      <Input variant="standard" label="Password" fullWidth />
      <Submit variant="contained">Add New User</Submit>
    </>
  );
};

export default LoginForm;
