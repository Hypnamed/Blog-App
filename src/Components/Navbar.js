import { Burger, Button, Flex, Group, Text } from "@mantine/core";
import { Menu, useMantineTheme } from "@mantine/core";
import { IconInfoSquareRounded, IconMail } from "@tabler/icons";
import { Link } from "react-router-dom";

import "../App.css";

function Navbar() {
  const theme = useMantineTheme();

  return (
    <Flex align="center" justify="space-between" mt="xs" mx="sm">
      <Group>
        <Menu transition="scale-y" position="bottom-end" withinPortal>
          <Menu.Target>
            <Burger />
          </Menu.Target>
          <Menu.Dropdown>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Menu.Item
                icon={
                  <IconInfoSquareRounded
                    size={16}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                About
              </Menu.Item>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Menu.Item
                icon={
                  <IconMail
                    size={16}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                Contact
              </Menu.Item>
            </Link>
          </Menu.Dropdown>
        </Menu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text size="lg" className="title" color="#000000" weight="bolder">
            Blog App
          </Text>
        </Link>
      </Group>
      <Group position="right" spacing="sm">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Group>
    </Flex>
  );
}

export default Navbar;
