import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { SpeedDial } from "@mui/material";
import { BasicSpeedDial } from "./SpeedDial";
import { AccountAvatar } from "./AccountAvatar";

// import React from "react";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";
// import { AccountAvatar } from "../Avatar";
// import { BasicSpeedDial } from "../SpeedDial";

export const AvatarChip: React.FC = () => {
  return (
    <span
      style={{
        position: "fixed",
        zIndex: 1000,
        marginTop: "8px",
        height: "50px",
      }}
    >
      <Stack height="50px" direction="row" spacing={1}>
        <Chip
          avatar={<AccountAvatar />}
          label="Charles L. DeFreese III"
          variant="outlined"
          sx={{
            color: "#ccc",
            height: "40px",
            "& .MuiChip-label": {
              fontSize: "1em",
            },
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
            },
            borderRadius: "25px",
            backgroundColor: "#0300145e",
            backdropFilter: "blur(10px)",
            border: "1px solid #7042f861",
          }}
        />
        <BasicSpeedDial />
      </Stack>
    </span>
  );
};
