import { useState } from "react";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import * as Yup from "yup";

import altogic from "../../API/Altogic";
import { IconAt, IconBookmark, IconLock } from "@tabler/icons";

function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Required field."),
  });

  async function handleSubmit(values, bag) {
    const { name, email, password } = values;
    const { errors, user } = await altogic.auth.signUpWithEmail(
      email,
      password,
      {
        name: name,
        admin: false,
      }
    );

    if (errors) return setError(errors);

    if (user.emailVerified === false) {
      navigate("/verification");
    } else {
      navigate("/");
    }
    bag.resetForm();
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
          isSubmitting,
          isValid,
        }) => (
          <Stack align="center" my="xl" spacing="xl">
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
              <TextInput
                icon={<IconAt />}
                placeholder="Your E-Mail"
                value={values.email}
                size="lg"
                my="sm"
                onChange={handleChange}
                withAsterisk
              />
              <PasswordInput
                icon={<IconLock />}
                placeholder="Password"
                value={values.password}
                size="lg"
                my="sm"
                onChange={handleChange}
                withAsterisk
              />
              <Stack>
                <Button my="xl" size="lg">
                  Login
                </Button>
              </Stack>
            </form>
          </Stack>
        )}
      </Formik>
    </div>
  );
}

export default Login;
