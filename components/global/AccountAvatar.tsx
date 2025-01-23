import { Avatar } from "@mui/material";
import AccountAvatarProps from "@/interfaces/AccountAvatarProps";
import profile from "@/public/profile_pic.jpg"

export const AccountAvatar: React.FC<AccountAvatarProps> = ({
  height = null,
  width = null,
}) => {
  return (
    <Avatar
      sx={
        height && width
          ? { margin: "0 5px", height, width }
          : { margin: "0 5px" }
      }
      alt="Natacha"
      src={profile}
    />
  );
};
