import { Box, Divider, Flex, Text } from "@chakra-ui/react";

const Ranking = () => {
  return (
    <Flex
      className={"ranking"}
      p={"5"}
      justify={"center"}
      flexDir={"column"}
      gap={4}
      placeItems={"center"}
      borderRadius={"8px"}
    >
      <Flex
        className={"border_color"}
        justify={"center"}
        placeItems={"center"}
        flexDir={"column"}
        gap={5}
      >
        <Text
          color={"blackAlpha.500"}
          fontFamily={"mono"}
          fontWeight={"semibold"}
          fontSize={"xs"}
        >
          World Top 10 University
        </Text>
        <Flex
          borderWidth={"5px"}
          borderRadius={"full"}
          borderTopColor={"red.300"}
          borderBottomColor={"red.300"}
          borderRightColor={"red.300"}
          w={"100px"}
          h={"100px"}
          placeItems={"center"}
          justify={"center"}
          className={"spinner"}
          textAlign={"center"}
        >
          <Flex
            flexDir={"column"}
            borderWidth={"5px"}
            borderRadius={"full"}
            borderTopColor={"green.500"}
            borderRightColor={"green.500"}
            w={"85px"}
            h={"85px"}
            placeItems={"center"}
            justify={"center"}
            textAlign={"center"}
          >
            <Box textAlign={"center"} className={"fi"}>
              <Text fontSize={"xs"} fontWeight={"bold"} fontFamily={"mono"}>
                10
              </Text>
              <Text
                fontSize={"small"}
                color={"blackAlpha.700"}
                fontFamily={"mono"}
              >
                Rankings
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Flex placeItems={"center"} gap={3}>
        <Flex placeItems={"center"} gap={2}>
          <Box
            borderRadius={"full"}
            w={"8px"}
            h={"8px"}
            bgColor={"red.300"}
          ></Box>
          <Text
            fontSize={"x-small"}
            fontFamily={"mono"}
            color={"blackAlpha.600"}
          >
            Graphic Templates
          </Text>
        </Flex>
        <Flex placeItems={"center"} gap={2}>
          <Box
            borderRadius={"full"}
            w={"8px"}
            h={"8px"}
            bgColor={"green.500"}
          ></Box>
          <Text
            fontSize={"x-small"}
            fontFamily={"mono"}
            color={"blackAlpha.600"}
          >
            UI Design
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Ranking;
