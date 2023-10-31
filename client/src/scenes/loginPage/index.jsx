import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        display="flex" // Add this line
        alignItems="center" // Center items vertically
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <div >
          <a href="/home">
            <img src="/images/home-logo.svg" alt="Logo" />
          </a>
        </div>
        <Typography fontWeight="bold" fontSize="32px" color="#0072b1" style={{ marginLeft: "10px" }}>
          Linkedin-clone
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5"  sx={{ mb: "0.3rem" }}>
          Sign In
        </Typography>
        <Typography fontWeight="200" fontSize="13px"  variant="h5" sx={{ mb: "1.5rem" }}>
          Stay updated on your professional world
        </Typography> 
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;