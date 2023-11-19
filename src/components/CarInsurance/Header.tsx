import { Typography, Box } from "@mui/material";
import User from "./User";

export default function Header() {
  return (
    <Box
      className="formHeader"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginX: { xs: 2, md: 3 },
      }}
    >
      <Box id="logo">
        <img src="icons/logo.svg" alt="logo" />
      </Box>
      <Box id="formTitle" display={{ xs: "none", md: "block" }}>
        <Typography component="p" fontSize="1rem" fontWeight={500}>
          سامانه مقایسه و خرید آنلاین بیمه
        </Typography>
      </Box>
      <Box id="userActions">
        <User />
      </Box>
    </Box>
  );
}
