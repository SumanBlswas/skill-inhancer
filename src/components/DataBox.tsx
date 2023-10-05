import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { PiStudentFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Ranking from "./subComponets/Ranking";
import EarningReport from "./subComponets/EarningReport";
import { FaLongArrowAltUp } from "react-icons/fa";
import { PiFlowArrowBold } from "react-icons/pi";

const DataBox = () => {
  const textArray = ["Empowering", "Education", "Through", "Innovation"];
  return (
    <Flex
      className={"databox"}
      p={8}
      pb={0}
      gap={5}
      flexDir={"column"}
      borderRadius={"16px"}
    >
      <Flex
        bg={"rgb(215,255,254)"}
        borderRadius={"20px"}
        p={5}
        flexDir={"column"}
        gap={3}
      >
        <Flex alignItems={"center"}>
          <Box>
            {textArray.map((el, index) => (
              <Text
                key={index}
                fontSize={"2xl"}
                fontWeight={"black"}
                fontFamily={"mono"}
              >
                {el}
              </Text>
            ))}
          </Box>
          <Image
            src={
              "https://cdn.dribbble.com/users/1828023/screenshots/11018474/media/a0a2240f0ec28704754c273b02bd9a25.png?resize=1600x1200&vertical=center"
            }
            alt={"girl_reading_books"}
            width={"200px"}
          />
        </Flex>
        <Flex
          placeItems={"center"}
          bg={"#fff"}
          p={4}
          pt={1}
          pb={1}
          borderRadius={"10px"}
          justify={"space-between"}
        >
          <Flex placeItems={"center"} gap={3} cursor={"pointer"}>
            <Text p={2} borderRadius={"full"} color={"white"} bg={"red.500"}>
              <PiStudentFill />
            </Text>
            <Box>
              <Text fontSize={"smaller"} fontFamily={"mono"}>
                Total Students
              </Text>
              <Text fontSize={"2xl"} fontFamily={"mono"} fontWeight={"bold"}>
                159.89
              </Text>
            </Box>
            <Text fontSize={"2xl"}>
              <MdKeyboardArrowDown />
            </Text>
          </Flex>
          <Button colorScheme={"facebook"}>
            <Text fontSize={"2xl"}>
              <FaArrowRightLong />
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex gap={5}>
        <Ranking />
        <EarningReport />
      </Flex>
      <Flex
        placeItems={"center"}
        justify={"center"}
        textAlign={"center"}
        className={"rounded"}
      >
        <Text fontSize={"5xl"}>
          <FaLongArrowAltUp />
        </Text>
      </Flex>
      <Box pos={"absolute"} bottom={"-5%"} left={"-7%"}>
        <Text fontSize={"8xl"} color={"purple.600"}>
          <PiFlowArrowBold />
        </Text>
      </Box>
    </Flex>
  );
};

export default DataBox;
