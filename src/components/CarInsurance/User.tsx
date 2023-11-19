import Button from "@mui/material/Button";
import { useFormContext } from "../../store/FormContext";
import { Typography } from "@mui/material";

export default function User() {
  const { formData } = useFormContext();

  if (formData.step > 1) {
    return <Typography>{formData.first + " " + formData.last}</Typography>;
  } else {
    return <Button sx={{ fontWeight: 400 }}>ثبت نام</Button>;
  }
}
