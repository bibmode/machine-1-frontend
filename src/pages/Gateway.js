import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../App";
import AddUserForm from "../components/AddUserForm";
import LoginForm from "../components/LoginForm";

const Wrapper = styled("div")(() => ({
  minHeight: "100vh",
}));

const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    width: 650,
  },
  margin: "0 auto",
}));

const Gateway = () => {
  const { toggleForm } = useContext(AppContext);

  return (
    <Wrapper>
      <Container>
        <Typography sx={{ my: 3 }}>MACHINE PROBLEM 1</Typography>

        <FormWrapper elevation={3}>
          {toggleForm ? <LoginForm /> : <AddUserForm />}
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default Gateway;
