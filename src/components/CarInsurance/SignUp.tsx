import { useState } from "react";
import { Box, Typography, TextField, Stack } from "@mui/material";
import { useFormContext } from "../../store/FormContext";
import AzkiButton from "./AzkiButton";

export default function SignUp() {
  enum inputNames {
    FIRST = "first",
    LAST = "last",
    PHONE = "phone",
    PASSWORD = "password",
  }
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState({
    first: false,
    last: false,
    phone: false,
    password: false,
  });

  const handleChange = (name: inputNames) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (name) {
        case "first": {
          setFormData({ ...formData, first: event.target.value });
          const re = new RegExp("^[\u0600-\u06FF ]+$");
          if (event.target.value === "") {
            setErrors({ ...errors, first: false });
          } else if (re.test(event.target.value)) {
            setErrors({ ...errors, first: false });
          } else {
            setErrors({ ...errors, first: true });
          }
          break;
        }
        case "last": {
          setFormData({ ...formData, last: event.target.value });
          const re = new RegExp("^[\u0600-\u06FF ]+$");
          if (event.target.value === "") {
            setErrors({ ...errors, last: false });
          } else if (re.test(event.target.value)) {
            setErrors({ ...errors, last: false });
          } else {
            setErrors({ ...errors, last: true });
          }
          break;
        }
        case "phone": {
          setFormData({ ...formData, phone: event.target.value });
          const re = new RegExp("[0]{1}[9]{1}[0-9]{9}");
          if (event.target.value === "") {
            setErrors({ ...errors, phone: false });
          } else if (re.test(event.target.value)) {
            setErrors({ ...errors, phone: false });
          } else {
            setErrors({ ...errors, phone: true });
          }
          break;
        }
        case "password": {
          setFormData({ ...formData, password: event.target.value });
          const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,10}$");
          if (event.target.value === "") {
            setErrors({ ...errors, password: false });
          } else if (!re.test(event.target.value)) {
            setErrors({ ...errors, password: true });
          } else {
            setErrors({ ...errors, password: false });
          }
          break;
        }
        default: {
          setFormData({ ...formData, [name]: event.target.value });
        }
      }
    };
  };

  return (
    <Box
      className="signupForm"
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
        ثبت نام
      </Typography>
      <Stack spacing={3}>
        <Stack
          direction={{ md: "row" }}
          spacing={{ xs: 3, md: 0 }}
          justifyContent="space-between"
          columnGap={3}
        >
          <TextField
            error={errors.first}
            helperText={errors.first && "نام باید فارسی باشد"}
            label="نام"
            variant="outlined"
            value={formData.first}
            onChange={handleChange(inputNames.FIRST)}
            required
            fullWidth
          />
          <TextField
            error={errors.last}
            helperText={errors.last && "نام خانوادگی باید فارسی باشد"}
            label="نام خانوادگی"
            variant="outlined"
            value={formData.last}
            onChange={handleChange(inputNames.LAST)}
            required
            fullWidth
          />
        </Stack>
        <TextField
          error={errors.phone}
          helperText={errors.phone && "فرمت شماره وارد شده اشتباه است"}
          label="شماره موبایل"
          variant="outlined"
          type="tel"
          inputProps={{ pattern: "[0]{1}[9]{1}[0-9]{9}", maxLength: 11 }}
          placeholder="09*********"
          onChange={handleChange(inputNames.PHONE)}
          value={formData.phone}
          required
        />
        <TextField
          error={errors.password}
          helperText={
            errors.password &&
            "رمز عبور باید حداقل 4 کاراکتر و شامل یک عدد و حرف بزرگ و حرف کوچک لاتین باشد"
          }
          label="رمز عبور"
          variant="outlined"
          type="password"
          inputProps={{
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,10}$",
            maxLength: 10,
          }}
          onChange={handleChange(inputNames.PASSWORD)}
          value={formData.password}
          required
        />
        <Box
          id="formButtons"
          display="flex"
          paddingTop={{ xs: "1rem", md: "initial" }}
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <AzkiButton variant="contained" type="submit" rounded>
            ثبت نام
          </AzkiButton>
        </Box>
      </Stack>
    </Box>
  );
}
