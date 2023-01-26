import { Title, Text, Stack } from "@mantine/core";
import { IconSend } from "@tabler/icons";

function Verification() {
  return (
    <Stack align="center" my="xl" spacing="xl">
      <Title>Verification mail has send</Title>
      <IconSend size="125px" color="#228BE6" />
      <Text size="xl" align="center">
        We've sent a verification email to your email address. <br />
        Please check your inbox and click on the link to verify your email
        address.
      </Text>
    </Stack>
  );
}

export default Verification;
