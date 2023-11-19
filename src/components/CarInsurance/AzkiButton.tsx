import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface AzkiButtonProps extends ButtonProps {
  rounded?: boolean;
}

const AzkiButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "rounded",
})<AzkiButtonProps>(({ rounded, theme }) => ({
  ...(rounded && {
    borderRadius: "20px",
  }),
  paddingInline: "40px",
  "&.MuiButton-contained": {
    backgroundColor: "#25b79b",
    "&:hover": {
      backgroundColor: "#1bad91",
    },
  },
  "&.MuiButton-outlined": {
    borderColor: "#25b79b",
    color: "#25b79b",
  },
  width: "fit-content",
  fontWeight: 400,
}));

export default AzkiButton;
