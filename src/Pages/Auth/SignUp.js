import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

import altogic from "../../API/Altogic";
import { IconAt, IconBookmark, IconLock } from "@tabler/icons";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const schema = z
    .object({
      name: z
        .string()
        .min(2, { message: "Name should have at least 2 letters" }),
      email: z.string().email({ message: "Invalid email" }),
      password: z
        .string()
        .min(8, { message: "Password should have at least 8 characters" }),
      passwordConfirm: z
        .string()
        .min(8, { message: "Password should have at least 8 characters" }),
    })
    .superRefine(({ passwordConfirm, password }, ctx) => {
      if (passwordConfirm !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
        });
      }
    });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
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
  }
  return (
    <Stack align="center" my="xl" spacing="xl">
      <Title className="title">Sign Up</Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          icon={<IconBookmark />}
          size="lg"
          my="sm"
          placeholder="Name"
          {...form.getInputProps("name")}
          withAsterisk
        />
        <TextInput
          icon={<IconAt />}
          size="lg"
          my="sm"
          placeholder="E-Mail"
          {...form.getInputProps("email")}
          withAsterisk
        />
        <PasswordInput
          icon={<IconLock />}
          size="lg"
          my="sm"
          placeholder="Password"
          {...form.getInputProps("password")}
          withAsterisk
        />
        <PasswordInput
          icon={<IconLock />}
          size="lg"
          my="sm"
          placeholder="Confirm Password"
          {...form.getInputProps("passwordConfirm")}
          withAsterisk
        />
        <Stack>
          <Button type="submit" size="lg" my="xl" className="title">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default SignUp;
