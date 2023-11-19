import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "../src/components/CarInsurance/Header";
import CarInsurance from "../src/components/CarInsurance";
import { FormProvider } from "../src/store/FormContext";

export default function Home() {
  return (
    <Container
      id="carInsurance"
      maxWidth="lg"
      sx={{
        background: {
          xs: "linear-gradient(0deg, #fffbeb 85%, #fff 15%)",
          md: "linear-gradient(90deg, #fffbeb 70%, #fff 30%)",
        },
        border: "1px solid #ddd",
        borderRadius: "32px",
        marginY: { xs: 3, md: 5 },
        paddingY: 3,
      }}
    >
      <Box
        id="formArea"
        sx={{
          minHeight: { xs: "95dvh", md: "630px" },
          display: "flex",
          flexDirection: "column",
          rowGap: "2.5rem",
          background: "url(icons/car-green.svg) bottom 88% right no-repeat",
          backgroundSize: { xs: "70%", md: "50%" },
        }}
      >
        <FormProvider>
          <Header />
          <CarInsurance />
        </FormProvider>
      </Box>
    </Container>
  );
}
