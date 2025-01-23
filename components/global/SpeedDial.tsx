// BasicSpeedDial.tsx
"use client"; // Add this directive at the top of the file
import * as React from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import StyledSpeedDial from "@/interfaces/StyledSpeedDial";

// Dynamically import StyledSpeedDial with SSR disabled
const StyledSpeedDial = dynamic(() => import("@/interfaces/StyledSpeedDial"), {
  ssr: false,
});

const actions = [
  { icon: <FacebookIcon />, name: "Facebook" },
  { icon: <TwitterIcon />, name: "Twitter" },
  { icon: <InstagramIcon />, name: "Instagram" },
  { icon: <LinkedInIcon />, name: "LinkedIn" },
  { icon: <GitHubIcon />, name: "Github" },
];

export const BasicSpeedDial: React.FC = () => {
  const [direction, setDirection] = React.useState<string>("right");
  const [hidden, setHidden] = React.useState<boolean>(false);

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box
        sx={{
          position: "relative",
          mt: 0,
          height: 0,
        }}
      >
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
          sx={{ width: 10, height: 10, backgroundColor: "transparent" }} // Set the size here
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{
                backgroundColor: "transparent",
                borderColor: "#ccc",
                color: "white",
              }}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
};
