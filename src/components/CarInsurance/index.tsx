import { useFormContext } from "../../store/FormContext";
import SignUp from "./SignUp";
import SelectInsurance from "./SelectInsurance";
import CarType from "./CarType";
import InsureCompany from "./InsureCompany";
import ThirdDiscount from "./ThirdDiscount";

export default function CarInsurance() {
  const { formData } = useFormContext();
  const renderForm = () => {
    switch (formData.step) {
      case 1:
        return <SignUp />;
      case 2:
        return <SelectInsurance />;
      case 3:
        return <CarType />;
      case 4:
        return <InsureCompany />;
      case 5:
        return <ThirdDiscount />;
      default:
        return null;
    }
  };
  return <>{renderForm()}</>;
}
