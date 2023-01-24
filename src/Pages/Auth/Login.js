import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

import altogic from "../../API/Altogic";
import { useAuth } from "../../Contexts/AuthContext";
import { IconAt, IconLock } from "@tabler/icons";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setUser, setSessions } = useAuth();

  const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password should have at least 8 characters" }),
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

  async function handleSubmit(values) {
    const { email, password } = values;

    const { errors, user, session } = await altogic.auth.signInWithEmail(
      email,
      password
    );
    if (errors) return setError(errors);
    setUser(user ?? null);
    setSessions(session ?? null);

    navigate("/");
  }

  return (
    <Stack align="center" my="xl" spacing="xl">
      <Title className="title">Login</Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
        <Stack>
          <Button type="submit" size="lg" my="xl" className="title">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default Login;
