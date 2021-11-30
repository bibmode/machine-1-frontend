import { Container, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import GrantsTable from "../components/GrantsTable";

import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  paddingBlock: theme.spacing(8),
}));

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <Container>
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
