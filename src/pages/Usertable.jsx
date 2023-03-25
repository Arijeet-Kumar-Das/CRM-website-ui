import styled from "@emotion/styled";
import {
  Box,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

const Usertable = () => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#1976d2",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <Box>
        <Box
          display="flex"
          marginTop="20px"
          gap={5}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6">Search : </Typography>
          <TextField
            id="outlined-basic"
            type="date"
            variant="outlined"
            label="Begin Date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="outlined-basic"
            type="date"
            variant="outlined"
            label="End Date"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box sx={{ width: "100vw", overflowX: "auto", p: "20px 0px" }}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <TableCell sx={{ color: "white" }}>Month</TableCell>
                <TableCell sx={{ color: "white" }}>Client Name</TableCell>
                <TableCell sx={{ color: "white" }}>Client's Product</TableCell>
                <TableCell sx={{ color: "white" }}>Inventory</TableCell>
                <TableCell sx={{ color: "white" }}>RO value</TableCell>
                <TableCell sx={{ color: "white" }}>Print Comsumption</TableCell>
                <TableCell sx={{ color: "white" }}>
                  Digital Consumption
                </TableCell>
                <TableCell sx={{ color: "white" }}>Consumption</TableCell>
                <TableCell sx={{ color: "white" }}>
                  Campaign Start Date
                </TableCell>
                <TableCell sx={{ color: "white" }}>End Date</TableCell>
                <TableCell sx={{ color: "white" }}>Other Remarks</TableCell>
                <TableCell sx={{ color: "white" }}>POC</TableCell>
                <TableCell sx={{ color: "white" }}>Payment Mode</TableCell>
                <TableCell sx={{ color: "white" }}>Status of Invoice</TableCell>
                <TableCell sx={{ color: "white" }}>Status of Payment</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Jan</TableCell>
                <TableCell>ABC Company</TableCell>
                <TableCell>Widget A</TableCell>
                <TableCell>100</TableCell>
                <TableCell>$10,000</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>5000</TableCell>
                <TableCell>15000</TableCell>
                <TableCell>1/1/2023</TableCell>
                <TableCell>1/31/2023</TableCell>
                <TableCell>New Client</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Sent</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jan</TableCell>
                <TableCell>ABC Company</TableCell>
                <TableCell>Widget A</TableCell>
                <TableCell>100</TableCell>
                <TableCell>$10,000</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>5000</TableCell>
                <TableCell>15000</TableCell>
                <TableCell>1/1/2023</TableCell>
                <TableCell>1/31/2023</TableCell>
                <TableCell>New Client</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Sent</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jan</TableCell>
                <TableCell>ABC Company</TableCell>
                <TableCell>Widget A</TableCell>
                <TableCell>100</TableCell>
                <TableCell>$10,000</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>5000</TableCell>
                <TableCell>15000</TableCell>
                <TableCell>1/1/2023</TableCell>
                <TableCell>1/31/2023</TableCell>
                <TableCell>New Client</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Sent</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </div>
  );
};

export default Usertable;
