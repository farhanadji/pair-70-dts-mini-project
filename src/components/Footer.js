import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#141414",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "#fff" }}>
        &copy; {new Date().getFullYear()} Netflux Inc. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
