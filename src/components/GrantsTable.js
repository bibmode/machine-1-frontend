import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

const StyledCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[900],
    color: grey[50],
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: grey[100],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const GrantsTable = () => {
  const { grants, getGrantType } = useContext(AppContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledCell sx={{ fontWeight: "bold" }}>Priviledge</StyledCell>
            <StyledCell sx={{ fontWeight: "bold" }} align="center">
              Type
            </StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grants &&
            grants.map((row, index) => (
              <StyledRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledCell component="th" scope="row">
                  {row}
                </StyledCell>
                <StyledCell align="center">{getGrantType(row)}</StyledCell>
              </StyledRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GrantsTable;
