import { useState } from "react";
import "./index.css"
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import {
  Search,
  Message,
  Notifications,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <div>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="Logo" />
          </a>
        </div>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )
        }

      </FlexBetween>

      {/* DESKTOP NAV */
        isNonMobileScreens ? (
          <FlexBetween gap="2rem">
            <div className="icon-text-container">
              <center>
                <a href="/home">
                  <HomeRoundedIcon sx={{ fontSize: "25px" }} />
                  <center><span>Home</span></center>
                </a>
              </center>
            </div>
            <div className="icon-text-container">
              <center>
                <a href="/home/connections">
                  <PeopleRoundedIcon sx={{ fontSize: "25px" }} />
                  <center><span>My Connections</span></center>
                </a>
              </center>
            </div>
            <div className="icon-text-container">
              <center>
                <a href="/home/jobs">
                
                  <WorkRoundedIcon sx={{ fontSize: "25px" }} />
                  <center><span>Jobs</span></center>
                  </a>
              </center>
            </div>
            <div className="icon-text-container">
              <center>
                <div style={{
                  cursor: "pointer",
                  color: "#551A8B",
                  textDecoration: "underline",
                  display: "inline",
                }}>
                  <Message sx={{ fontSize: "25px" }} />
                  <center><span>Messages</span></center>
                </div>
              </center>
            </div>
            <div className="icon-text-container">
              <center>
                <div style={{
                  cursor: "pointer",
                  color: "#551A8B",
                  textDecoration: "underline",
                  display: "inline",
                }}>
                  <Notifications sx={{ fontSize: "25px" }} />
                  <center><span>Notifications</span></center>
                </div>
              </center>
            </div>
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        )}

      {/* MOBILE NAV */
        !isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}
          >
            {/* CLOSE ICON */}
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close />
              </IconButton>
            </Box>

            {/* MENU ITEMS */}
            <FlexBetween
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="3rem"
            >
              <HomeRoundedIcon sx={{ fontSize: "25px" }} />
              <PeopleRoundedIcon sx={{ fontSize: "25px" }} />
              <WorkRoundedIcon sx={{ fontSize: "25px" }} />
              <Message sx={{ fontSize: "25px" }} />
              <Notifications sx={{ fontSize: "25px" }} />
              
              
              <FormControl variant="standard" value={fullName}>
                <Select
                  value={fullName}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "150px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value={fullName}>
                    <Typography>{fullName}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(setLogout())}>
                    Log Out
                  </MenuItem>
                </Select>
              </FormControl>
            </FlexBetween>
          </Box>
        )}
    </FlexBetween>
  );
};

export default Navbar;
