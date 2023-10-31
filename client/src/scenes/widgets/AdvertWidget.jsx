import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/linkedin-premium.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>LinkedIn-Clone Premium</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Elevate your professional journey with LinkedIn Premium. 
      Gain access to a world of opportunities by networking with industry leaders. 
      Upgrade to LinkedIn Premium today and take the next step in your career.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;