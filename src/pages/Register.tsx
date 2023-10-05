import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logobar from "../components/Logobar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const data = { name, email, password };
      if (name !== "" && email !== "" && password !== "") {
        if (password === conPassword) {
          const user = await axios.post(
            `${import.meta.env.VITE_PORT}/users/register`,
            data
          );
          if (user.status === 200) {
            toast({
              title: "Account created.",
              description: `Hello! ${name}. We've created your account Successfully.`,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            navigate("/login");
          }
        } else {
          toast({
            title: "Password Mismatch!",
            description: `Hey! ${name}. Check Your Password.`,
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Empty Field!",
          description: "Fill in empty field.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Account Already Exists!",
        description: `Hey! ${name}. Please Login With Password`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={24} pt={5} h={"4xl"} className={"authorization_page"}>
      <Box>
        <Logobar />
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={20}>
        <Box
          width="350px"
          p={6}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="lg"
          bg={"#fff"}
        >
          <Heading size="lg" mb={6}>
            Signup
          </Heading>
          <FormControl mb={6}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Password Again!</FormLabel>
            <Input
              type="password"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme={"purple"}
            size="lg"
            onClick={handleSignup}
            width="100%"
          >
            Register
          </Button>
          <Divider my={6} />
          <Link to={"/login"}>
            <Text fontFamily={"mono"} textAlign={"center"}>
              Login Now!
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
