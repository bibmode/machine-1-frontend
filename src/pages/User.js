import { Container, IconButton, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";
import GrantsTable from "../components/GrantsTable";

import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { AppContext } from "../App";

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  paddingBlock: theme.spacing(8),
}));

const User = () => {
  const navigate = useNavigate();
  const { userDatabase } = useContext(AppContext);
  const { user } = useParams();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <Container>
        <Typography component="h1" variant="h4">
          Hi there, {user}!
        </Typography>
        <Typography component="h2" variant="h5">
          Here are your powers over {userDatabase}
        </Typography>
        <Tooltip title="logout">
          <IconButton sx={{ float: "right", mb: 3 }} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>

        <GrantsTable />
      </Container>
    </Wrapper>
  );
};

export default User;
