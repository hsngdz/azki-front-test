import { useState, useEffect } from "react";
import { useFormContext } from "../../store/FormContext";
import type { ApiData } from "./types";
import {
  Box,
  Stack,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Modal,
  SelectChangeEvent,
} from "@mui/material";
import AzkiButton from "./AzkiButton";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ThirdDiscount() {
  enum discountTypes {
    THIRD = "third",
    DRIVER = "driver",
  }
  const [open, setOpen] = useState(false);
  const handleModalClose = () => setOpen(false);
  const { formData, setFormData } = useFormContext();
  const [thirdDiscounts, setThirdDiscounts] = useState<ApiData[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/third/third-discounts"
      );
      const data: ApiData[] = await response.json();
      setThirdDiscounts(data);
    })();
  }, []);
  const handleChange = (type: discountTypes) => {
    return (event: SelectChangeEvent) => {
      switch (type) {
        case "third": {
          setFormData({
            ...formData,
            thirdDiscount: event.target.value as string,
          });
          break;
        }
        case "driver": {
          setFormData({
            ...formData,
            driverDiscount: event.target.value as string,
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
        setOpen(true);
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
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
      </Typography>
      <Stack spacing={2} marginTop={6}>
        <FormControl>
          <InputLabel id="carType-label">درصد تخفیف ثالث</InputLabel>
          <Select
            labelId="carType-label"
            label="درصد تخفیف ثالث"
            value={formData.thirdDiscount}
            onChange={handleChange(discountTypes.THIRD)}
            required
          >
            {thirdDiscounts?.map((discount) => {
              return (
                <MenuItem key={discount.id} value={discount.title}>
                  {discount.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="carType-label">درصد تخفیف حوادث راننده</InputLabel>
          <Select
            labelId="carType-label"
            label="درصد تخفیف حوادث راننده"
            value={formData.driverDiscount}
            onChange={handleChange(discountTypes.DRIVER)}
            required
          >
            {thirdDiscounts?.map((discount) => {
              return (
                <MenuItem key={discount.id} value={discount.title}>
                  {discount.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Box
          id="formButtons"
          display="flex"
          paddingTop={{ xs: "1rem", md: "initial" }}
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <AzkiButton variant="contained" rounded type="submit">
            استعلام قیمت
          </AzkiButton>
        </Box>
      </Stack>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            اطلاعات وارد شده
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <b>نام:</b> {formData.first}
            <br />
            <b>نام خانوادگی:</b> {formData.last}
            <br />
            <b>شماره موبایل:</b> {formData.phone}
            <br />
            <b>رمز عبور:</b> {formData.password}
            <br />
            <b>نوع خودرو:</b> {formData.carType}
            <br />
            <b>مدل خودرو:</b> {formData.carModel}
            <br />
            <b>شرکت بیمه گر قبلی:</b> {formData.insureComapny}
            <br />
            <b>درصد تخفیف ثالث:</b> {formData.thirdDiscount}
            <br />
            <b>درصد تخفیف حوادث راننده:</b> {formData.driverDiscount}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
