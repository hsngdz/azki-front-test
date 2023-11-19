import { createContext, useContext, useState, ReactNode } from "react";
import type {
  FormData,
  FormContextProps,
} from "../components/CarInsurance/types";

const initialFormData: FormData = {
  step: 1,
  first: "",
  last: "",
  phone: "",
  password: "",
  carType: "",
  carModel: "",
  insureComapny: "",
  thirdDiscount: "",
  driverDiscount: "",
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
