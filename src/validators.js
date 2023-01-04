import * as yup from "yup"

export const descriptionValidator = yup
  .string()
  .min(1)
  .required()
  .label("description")

export default descriptionValidator
