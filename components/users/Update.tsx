import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { UserData } from "../../api/user/interface";
import { Form } from "../../styles/Ui/forms";
import { Button, Input } from "../../styles/Ui/inputs";
import { Error } from "../../styles/Ui/messages";

interface Props {
  updateState: any;
  userData: UserData;
}

export const Update = ({ updateState, userData }: Props) => {
  const formik = useFormik({
    initialValues: initialValues(userData),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      const { email, first_name, last_name } = formData;
      await updateState({ ...userData, email, first_name, last_name });
      toast.success("Se han actualizado los datos");
    },
  });

  return (
    <>
      <h2>Update user</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <Error>Email not valid</Error>}
        <Input
          type="text"
          name="first_name"
          placeholder="Nombre"
          value={formik.values.first_name}
          onChange={formik.handleChange}
        />
        {formik.errors.first_name && <Error>First name not valid</Error>}
        <Input
          type="text"
          name="last_name"
          placeholder="Apellido"
          value={formik.values.last_name}
          onChange={formik.handleChange}
        />
        {formik.errors.last_name && <Error>Last name not valid</Error>}
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
};

function initialValues(userData: UserData) {
  const { email, first_name, last_name } = userData;
  return {
    email,
    first_name,
    last_name,
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    first_name: Yup.string().required(true),
    last_name: Yup.string().required(true),
  };
}
