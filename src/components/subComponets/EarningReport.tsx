import { Divider, Flex, Text } from "@chakra-ui/react";
import { PiStudentFill } from "react-icons/pi";
import { AiFillHeart } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

const EarningReport = () => {
  return (
    <Flex
      p={5}
      className={"earning"}
      borderRadius={"8px"}
      flexDir={"column"}
      justify={"space-between"}
    >
      <Text
        color={"blackAlpha.500"}
        fontFamily={"mono"}
        fontWeight={"semibold"}
        fontSize={"xs"}
      >
        Earning Report
      </Text>
      <Flex flexDir={"column"} gap={1}>
        <Flex placeItems={"center"} gap={3}>
          <Text borderRadius={"full"} p={1} bg={"pink.500"} color={"white"}>
            <PiStudentFill />
          </Text>
          <Flex flexDir={"column"}>
            <Text fontSize={"xs"}>Total Students</Text>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              78K
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex placeItems={"center"} gap={3}>
          <Text borderRadius={"full"} p={1} bg={"blue.500"} color={"white"}>
            <AiFillHeart />
          </Text>
          <Flex flexDir={"column"}>
            <Text fontSize={"xs"}>BD Topper Students</Text>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              8K
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex placeItems={"center"} gap={3}>
          <Text borderRadius={"full"} p={1} bg={"green.500"} color={"white"}>
            <FaUserFriends />
          </Text>
          <Flex flexDir={"column"}>
            <Text fontSize={"xs"}>Contributor Bobus</Text>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              706
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EarningReport;
