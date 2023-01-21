import { Burger, Button, Flex, Group, Space, Text } from "@mantine/core";
import { Menu, useMantineTheme } from "@mantine/core";
import { IconInfoSquareRounded, IconMail } from "@tabler/icons";
import { Link } from "react-router-dom";

import "../App.css";

function Navbar() {
  const theme = useMantineTheme();

  return (
    <div>
      <Group spacing="xs">
        <Menu
          transition="pop-top-right"
          position="bottom-end"
          width={150}
          withinPortal
        >
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
          <Text
            my="xs"
            size="lg"
            className="title"
            color="#000000"
            weight="bolder"
          >
            Blog App
          </Text>
        </Link>
      </Group>
      <Group position="right">
        <Button>Login</Button>
        <Button>Register</Button>
      </Group>
    </div>
  );
}

export default Navbar;
