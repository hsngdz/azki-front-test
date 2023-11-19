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
import type { ApiData } from "./types";

export default function CarType() {
  enum CarType {
    TYPE = "type",
    MODEL = "model",
  }
  const { formData, setFormData } = useFormContext();
  const [carTypes, setCarTypes] = useState<ApiData[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/vehicle/types"
      );
      const data: ApiData[] = await response.json();
      setCarTypes(data);
    })();
  }, []);

  const handleChange = (car: CarType) => {
    return (event: SelectChangeEvent) => {
      switch (car) {
        case "type": {
          setFormData({
            ...formData,
            carType: event.target.value as string,
          });
          break;
        }
        case "model": {
          setFormData({
            ...formData,
            carModel: event.target.value as string,
          });
          break;
        }
        default:
          return null;
      }
    };
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
        نوع و مدل خودروی خود را انتخاب کنید.
      </Typography>
      <Stack spacing={2} marginTop={6}>
        <FormControl>
          <InputLabel id="carType-label">نوع خودرو</InputLabel>
          <Select
            labelId="carType-label"
            label="نوع خودرو"
            value={formData.carType}
            onChange={handleChange(CarType.TYPE)}
            required
          >
            {carTypes?.map((type) => {
              return (
                <MenuItem key={type.id} value={type.title}>
                  {type.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="carModel-label">مدل خودرو</InputLabel>
          <Select
            labelId="carModel-label"
            label="مدل خودرو"
            value={formData.carModel}
            onChange={handleChange(CarType.MODEL)}
            required
          >
            {carTypes
              ?.filter((type) => formData.carType === type.title)
              .map((type) =>
                type.usages?.map((usage) => (
                  <MenuItem key={usage.id} value={usage.title}>
                    {usage.title}
                  </MenuItem>
                ))
              )}
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
            بازگشت
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
