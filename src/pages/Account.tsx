import { Box, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../Context/useLoggedIn";
import Navbar from "../components/Navbar";

interface DataIterface {
  name: string;
  email: string;
}

const Account = () => {
  const [data, setData] = useState<DataIterface | null>(null);
  const { setIsLoggedIn } = useLoggedIn();
  const toast = useToast();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({
      title: "Logout Successfull",
      description: "You have logged out Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_PORT}/users/account`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <Box p={{ base: 16, md: 24 }} pt={{ base: 5, md: 5 }}>
      <Box bg={"#fff"} p={10}>
        <Navbar />
      </Box>
      <Flex
        justifyContent={"space-around"}
        pt={10}
        bg={"whiteAlpha.700"}
        pb={8}
        flexWrap={"wrap"}
      >
        {data && (
          <Box fontFamily={"mono"}>
            <Heading>{data.name}</Heading>
            <Text fontSize={"lg"}>{data.email}</Text>
          </Box>
        )}
        <Text
          onClick={handleLogout}
          fontFamily={"heading"}
          fontSize={"xl"}
          fontWeight={"bold"}
          textDecor={"underline"}
          cursor={"pointer"}
        >
          Log Out
        </Text>
      </Flex>
    </Box>
  );
};

export default Account;
