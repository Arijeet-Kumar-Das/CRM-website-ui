import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { VictoryPie } from "victory";
import { Person } from "@mui/icons-material";

const UserDashboard = () => {
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <Box p={2}>
        <Grid
          container
          spacing={4}
          sx={{
            padding: "0 50px",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={5} sx={{ width: "100%" }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Subordinate Submission Summary
              </Typography>
              <VictoryPie
                width={450}
                colorScale={["lightgreen", "tomato"]}
                padAngle={({ datum }) => datum.y}
                innerRadius={100}
                data={[
                  { x: 5, y: 2, label: "submitted" },
                  { x: 6, y: 6, label: "not submitted" },
                ]}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              width="100%"
            >
              <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="Location"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Guwahati</MenuItem>
                    <MenuItem value={20}>Chennai</MenuItem>
                    <MenuItem value={30}>Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                sx={{
                  height: "80%",
                  marginTop: { xs: "20px", md: "0px" },
                }}
              >
                Submit
              </Button>
            </Box>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ bgcolor: "#1976d2", textAlign: "center", color: "white" }}
              >
                SUBORDINATE LIST
              </Typography>
              <Table>
                <TableRow>
                  <TableCell align="center">
                    <IconButton>
                      <Person></Person>
                    </IconButton>
                    Vikash Chandra Mishra(Employee)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <IconButton>
                      <Person></Person>
                    </IconButton>
                    Rasidul Hoque(Employee)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <IconButton>
                      <Person></Person>
                    </IconButton>
                    Ankit Das(Employee)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <IconButton>
                      <Person></Person>
                    </IconButton>
                    Arijeet Kumar Das(Employee)
                  </TableCell>
                </TableRow>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserDashboard;
