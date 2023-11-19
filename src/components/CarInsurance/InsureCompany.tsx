import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateNext";
import NavigateNextIcon from "@mui/icons-material/NavigateBefore";
import AzkiButton from "./AzkiButton";
import { useFormContext } from "../../store/FormContext";

export default function InsureCompany() {
  const { formData, setFormData } = useFormContext();
  const [insureCompanies, setInsureCompanies] = useState<String[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/third/companies"
      );
      const data = await response.json();
      setInsureCompanies(data);
    })();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setFormData({
      ...formData,
      insureComapny: event.target.value as string,
    });
  };

  return (
    <Box
      id="carType"
      component="form"
      sx={{
        width: { md: "50%" },
        display: "flex",
        flexDirection: "column",
        paddingLeft: { md: "5rem" },
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setFormData({ ...formData, step: formData.step + 1 });
      }}
    >
      <Typography
        component="h1"
        fontWeight={500}
        fontSize={{ xs: "1.2rem", md: "1.5rem" }}
        marginBottom="2rem"
        textAlign={{ xs: "center", md: "left" }}
      >
        بیمه شخص ثالث
      </Typography>
      <Typography component="p" variant="body1">
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
      </Typography>
      <Stack spacing={2} marginTop={6}>
        <FormControl>
          <InputLabel id="carType-label">شرکت بیمه گر قبلی</InputLabel>
          <Select
            labelId="carType-label"
            label="شرکت بیمه گر قبلی"
            value={formData.insureComapny}
            onChange={handleChange}
            required
          >
            {insureCompanies?.map((company: any) => {
              return (
                <MenuItem key={company.id} value={company.title}>
                  {company.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Box
          id="formButtons"
          display="flex"
          paddingTop={{ xs: "1rem", md: "initial" }}
          justifyContent="space-between"
        >
          <AzkiButton
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
            rounded
            onClick={() =>
              setFormData({ ...formData, step: formData.step - 1 })
            }
          >
            مرحله قبل
          </AzkiButton>
          <AzkiButton
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            rounded
            type="submit"
          >
            مرحله بعد
          </AzkiButton>
        </Box>
      </Stack>
    </Box>
  );
}
