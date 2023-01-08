import * as yup from "yup"
import { Form, Formik } from "formik"
import { descriptionValidator } from "@/validators.js"
import routes from "@/routes.js"
import FormField from "@/components/ui/FormField.jsx"
import Link from "@/components/ui/Link.jsx"
import Button from "@/components/ui/Button.jsx"

const defaultValidationSchema = yup.object().shape({
  description: descriptionValidator,
})

const defaultInitialValues = { name: "" }

const FormTodo = (props) => {
  const {
    onSubmit,
    onClick,
    initialValues = defaultInitialValues,
    descriptionValidator,
    ...otherProps
  } = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={defaultValidationSchema}
    >
      <Form>
        <h1 className="flex font-bold text-xl first:border-b pb-3 mt-2 pl-5">
          Create a new todo
        </h1>
        <FormField
          defaultValue=""
          name="description"
          label="Description"
        ></FormField>
        <div className="font-bold fixed bottom-4 right-4">
          <Link href={routes.home} className="mr-5">
            Cancel
          </Link>
          <Button
            className="bg-blue-600 text-white rounded-lg h-10 w-16"
            type="submit"
          >
            Create
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormTodo
