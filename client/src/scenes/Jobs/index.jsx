import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import MyJobWidget from "scenes/widgets/MyJobWidget";
import JobsWidget from "scenes/widgets/JobsWidget";

const ConnectionsPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    
  const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            {isNonMobileScreens && (
                <Box flexBasis="26%" >
                    <Box m="2rem 0" />
                    <Box sx={{ padding: "1rem 10rem" }}>
                        <MyJobWidget picturePath={picturePath} />
                        <JobsWidget userId={_id} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ConnectionsPage;
