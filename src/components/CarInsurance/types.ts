import { Dispatch, SetStateAction } from "react";

export interface FormData {
  step: number;
  first: string;
  last: string;
  phone: string;
  password: string;
  carType: string;
  carModel: string;
  insureComapny: string;
  thirdDiscount: string;
  driverDiscount: string;
}

export interface FormContextProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export interface ApiData {
  id: number;
  title: string;
  usages?: [
    {
      id: number;
      title: string;
    }
  ];
}
