import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material";
import insuranceIcon from "../../../public/icons/insurance.svg";
import { useFormContext } from "../../store/FormContext";

export default function SelectInsurance() {
  const { formData, setFormData } = useFormContext();
  return (
    <Box
      id="selectInsurance"
      component="form"
      sx={{
        width: { md: "50%" },
        display: "flex",
        flexDirection: "column",
        paddingLeft: { md: "5rem" },
      }}
    >
      <Typography
        component="h1"
        fontWeight={500}
        fontSize={{ xs: "1.2rem", md: "1.5rem" }}
        marginBottom="2rem"
        textAlign={{ xs: "center", md: "left" }}
      >
        انتخاب بیمه
      </Typography>
      <Stack direction="row" spacing={3}>
        <Button
          onClick={() => setFormData({ ...formData, step: formData.step + 1 })}
          variant="outlined"
          startIcon={<SvgIcon component={insuranceIcon} inheritViewBox />}
          sx={{
            flexDirection: "column",
            width: "110px",
            height: "110px",
            fontWeight: 400,
            borderColor: "#e8e8e8",
            borderRadius: "10%",
            gap: "10px",
            "& .MuiButton-startIcon": {
              margin: 0,
              "& svg": {
                fontSize: "40px",
              },
            },
          }}
        >
          شخص ثالث
        </Button>
        <Button
          variant="outlined"
          startIcon={<SvgIcon component={insuranceIcon} inheritViewBox />}
          sx={{
            flexDirection: "column",
            width: "110px",
            height: "110px",
            fontWeight: 400,
            borderColor: "#e8e8e8",
            borderRadius: "10%",
            gap: "10px",
            "& .MuiButton-startIcon": {
              margin: 0,
              "& svg": {
                fontSize: "40px",
              },
            },
            "&.Mui-disabled": {
              background: "#fafafa",
            },
          }}
          disabled
        >
          بدنه
        </Button>
      </Stack>
    </Box>
  );
}
