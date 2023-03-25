import { Box, Paper, Grid, Typography, Avatar, Divider } from "@mui/material";
import { VictoryPie } from "victory";
import React from "react";

const Userprofile = () => {
  return (
    <div>
      <Box marginTop="30px" p={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                p: "20px",
              }}
            >
              <Avatar sx={{ bgcolor: "orange", width: 50, height: 50 }}>
                N
              </Avatar>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap={2}
              >
                <Typography variant="p">EMP ID: 1</Typography>
                <Typography variant="p">NAME: Vikash Chandra Mishra</Typography>

                <Typography variant="p">GENDER: Male</Typography>
                <Typography variant="p">MOBILE NUMBER: 6002935451</Typography>

                <Typography variant="p">EMAIL: vikash@test.com</Typography>
                <Typography variant="p">BRANCH: Guwahati</Typography>

                <Typography variant="p">REPORTING MANAGER: admin</Typography>
                <Typography variant="p">DESIGNATION: Employee</Typography>

                <Typography variant="p">SUBORDINATE COUNT: 1</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Paper sx={{ width: "100%", p: "40px 0px" }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                EOD APPROVAL STATUS
              </Typography>
              <VictoryPie
                width={850}
                height={400}
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
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Userprofile;
