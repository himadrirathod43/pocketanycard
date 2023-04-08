import * as Yup from "yup";
import { mobNum } from "../../helper/helper";

export const ReviewFormValidate = Yup.object().shape(
  {
    name: Yup.string()
      .min(3, "Minimum 3 Character")
      .max(80, "Maximum 80 Characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Wrong email format")
      .nullable(),
    mobile_number: Yup.string()
      .min(10,"Please enter a valid 10 digit mobile number, without special characters and spaces")
      .required("Mobile number is required")
      .matches(mobNum,"Mobile number is not valid Cannot contain special characters or spaces"),
    review_text: Yup.string()
      .min(10, "Minimum 10 Character")
      .max(150, "Maximum 150 Character")
      .required("Review Text is Required"),
  },[]);