import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Report = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="85vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: { xs: "300px", md: "500px" } }}
          alignItems="center"
          gap={4}
        >
          <Typography variant="h5">EOD SUBMISSION</Typography>
          <TextField
            id="filled-basic"
            label="Task"
            variant="filled"
            fullWidth
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Report;
