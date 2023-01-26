import { Button, Stack, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function ProfileView() {
  const navigate = useNavigate();
  const { signOutCurrentSession } = useAuth();
  const handleLogout = () => {
    signOutCurrentSession();
  };
  return (
    <Stack align="center" my="xl" spacing="xl">
      <Title className="title">ProfileView</Title>
      <Button onClick={handleLogout}>Sign Out</Button>
    </Stack>
  );
}

export default ProfileView;
