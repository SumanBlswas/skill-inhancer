import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { GiSplitArrows } from "react-icons/gi";
import { BsAirplaneEngines } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { useLoggedIn } from "../Context/useLoggedIn";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navArray = [
    "Home",
    "Officers",
    "Examination",
    "Sections",
    "Students",
    "Academics",
  ];

  const acstionArray = ["Learn", "Mentors", "Compete", "Jobs"];

  const { isLoggedIn } = useLoggedIn();
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleNavigation = (el: string) => {
    if (el === "Mentors") {
      navigate("/mentors");
    }
  };

  return (
    <Flex placeItems={"center"} justifyContent={"space-around"}>
      <Flex gap={5} placeItems={"center"}>
        <Flex
          gap={2}
          placeItems={"center"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <Box w={"50px"}>
            <Image
              src={
                "https://github.com/SumanBlswas/skill-inhancer/assets/112753516/ef13db99-f011-4e5a-bb90-d27190afb4f7"
              }
              alt={"logo"}
            />
          </Box>
          <Text fontSize={"4xl"} fontFamily={"monospace"} color={"#9D76C1"}>
            MR
          </Text>
        </Flex>
        <Center height="30px">
          <Divider
            orientation="vertical"
            borderWidth={"1px"}
            borderColor={"black"}
            display={{ base: "none", md: "block" }}
          />
        </Center>
        <Box
          fontSize={"small"}
          fontFamily={"monospace"}
          display={{ base: "none", md: "flex" }}
          flexDir={"column"}
        >
          <Text>Part of Times</Text>
          <Text>Higher Education</Text>
        </Box>
      </Flex>
      {navArray.map((el, index) => (
        <Text
          key={index}
          fontWeight={index === 0 ? "semibold" : ""}
          cursor={"pointer"}
          fontFamily={"mono"}
          onClick={index === 0 ? () => navigate("/") : () => navigate("")}
          display={{ base: "none", lg: "flex" }}
        >
          {el}
        </Text>
      ))}
      <Flex
        gap={3}
        placeItems={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Text border={"1px"} borderRadius={"7px"} p={"2px"} cursor={"pointer"}>
          <GiSplitArrows />
        </Text>
        <Text border={"1px"} borderRadius={"7px"} p={"2px"} cursor={"pointer"}>
          <BsAirplaneEngines />
        </Text>
      </Flex>
      <Flex>
        {isLoggedIn || token ? (
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="pink"
              onClick={() => navigate("/account")}
            >
              Profile
            </MenuButton>
          </Menu>
        ) : (
          <Menu>
            <MenuButton as={Button} colorScheme="pink">
              Login
            </MenuButton>
            <MenuList>
              <MenuGroup title="Student">
                <MenuItem
                  icon={<IoMdLogIn />}
                  onClick={() => navigate("/login")}
                >
                  Login
                </MenuItem>
                <MenuItem
                  icon={<AiOutlineLogin />}
                  onClick={() => navigate("/register")}
                >
                  Register{" "}
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Company">
                <MenuItem
                  icon={<IoMdLogIn />}
                  onClick={() => navigate("/login")}
                >
                  Login
                </MenuItem>
                <MenuItem
                  icon={<AiOutlineLogin />}
                  onClick={() => navigate("/register")}
                >
                  Register{" "}
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        )}
      </Flex>
      <Flex fontSize={"xl"} cursor={"pointer"} placeItems={"center"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="solid"
          />
          <MenuList>
            {acstionArray.map((el, index) => (
              <MenuItem
                icon={<IoMdLogIn />}
                key={index}
                onClick={() => handleNavigation(el)}
              >
                <Text>{el}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
