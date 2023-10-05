import { Box, Flex } from "@chakra-ui/react";
import CourseBox from "../components/CourseBox";
import DataBox from "../components/DataBox";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box
      m={{ base: "0%", lg: "15%" }}
      mt={{ base: "0%", lg: "4%" }}
      mb={{ base: "0%", lg: "5%" }}
    >
      <Box bgColor={"#fff"} p={10} pt={3} pb={10}>
        <Navbar />
        <Flex
          mt={5}
          justifyContent={"space-around"}
          placeItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 0 }}
        >
          <CourseBox />
          <Box
            pos={"relative"}
            right={{ base: "0%", lg: "-10%" }}
            bg={"#fff"}
            borderRadius={"16px"}
          >
            <DataBox />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
