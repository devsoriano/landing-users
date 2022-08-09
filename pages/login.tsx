import type { NextPage } from "next";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { FiMail } from "react-icons/fi";
import { loginApi } from "./../api/user";
import useAuth from "./../hooks/useAuth";
import { Container, Section, Welcome } from "../styles/Auth/login";
import { Button, Input } from "../styles/Ui/inputs";
import { Error } from "../styles/Ui/messages";
import { Form } from "../styles/Ui/forms";

const Login: NextPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      const response = await loginApi(formData);
      if (response?.token) {
        router.push("/");
        login(response.token);
      } else {
        toast.error("El email o la contraseña son incorrectos");
      }
    },
  });

  return (
    <Section>
      <Welcome>
        Welcome back! <FiMail />{" "}
      </Welcome>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Email Address"
            onChange={formik.handleChange}
          />
          {formik.errors.username && <Error>Ingresa un email válido</Error>}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && <Error>Ingresa un password válido</Error>}
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </Section>
  );
};

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}

export default Login;
