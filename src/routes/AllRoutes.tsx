import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mentors from "../pages/Mentors";
import Account from "../pages/Account";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/mentors"} element={<Mentors />} />
        <Route
          path={"*"}
          element={
            <Box>
              <Heading>You are in wrong route...</Heading>
            </Box>
          }
        />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
