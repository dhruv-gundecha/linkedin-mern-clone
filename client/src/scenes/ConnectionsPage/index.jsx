import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import ConnectionListWidget from "scenes/widgets/ConnectionsListWidget"; // Import the ConnectionsListWidget component.

const ConnectionsPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id,  } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            {isNonMobileScreens && (
                <Box flexBasis="10%" >
                    <Box m="2rem 0" />
                    <Box sx={{ padding: "1rem 10rem" }}>
                    <ConnectionListWidget userId={_id} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ConnectionsPage;
