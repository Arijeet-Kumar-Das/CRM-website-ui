import { Box, Button, TextField, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import { Lock, Person } from "@mui/icons-material";

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="85vh"
      alignItems="center"
      justifyContent="center"
      //   marginTop="100px"
      gap={5}
    >
      <Typography variant="h5">Sign In to your account</Typography>
      <Box display="flex" flexDirection="column" gap={5}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", minWidth: "300px" }}
          >
            <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", minWidth: "300px" }}
          >
            <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Password"
              variant="standard"
              fullWidth
            />
          </Box>
        </Box>
        <Button variant="contained" sx={{ borderRadius: "50px" }} fullWidth>
          Sign In
        </Button>
      </Box>
      <Box display="flex">
        <Typography variant="p">Dont have an account?</Typography>
        <Typography
          variant="p"
          sx={{ "&:hover": { color: "blue" }, cursor: "pointer" }}
        >
          Sign up
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
