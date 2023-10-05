import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { FcReading, FcServices } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";

const CourseBox = () => {
  return (
    <Box>
      <Flex gap={2} flexDir={"column"}>
        <Flex gap={5} placeItems={"center"}>
          <Heading
            fontSize={{
              base: "xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "6xl",
            }}
          >
            Getting You
          </Heading>
          <Box
            p={3}
            borderRadius={"full"}
            bg={"red"}
            fontWeight={"bold"}
            color={"white"}
          >
            4.9
          </Box>
        </Flex>
        <Flex placeItems={"center"} gap={2}>
          <Image
            src={
              "https://media.istockphoto.com/id/1301212030/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=_eRwnFuNhE181f3bXYRh_-4dCFiWATHOybyecUk-6fk="
            }
            alt={"women-thinking"}
            borderRadius={"full"}
            className={"girl_image"}
          />
          <Box className={"semi_circle"}>
            <Image
              alt="semi-circle"
              src="https://github.com/SumanBlswas/skill-inhancer/assets/112753516/a2c943f1-a476-4995-a670-32440437d1ee"
            />

            <Text className={"span"} fontWeight={"semibold"}>
              12k
            </Text>
          </Box>
          <Heading
            fontSize={{
              base: "xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "6xl",
            }}
            // zIndex={"1"}
          >
            where you
          </Heading>
        </Flex>
        <Flex placeItems={"center"} gap={5}>
          <Heading
            fontSize={{
              base: "xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
              xl: "6xl",
            }}
          >
            want to study.
          </Heading>
          <Text fontSize={"4xl"} color={"green.400"}>
            <FaShare />
          </Text>
        </Flex>
      </Flex>
      <Box fontWeight={"bold"} fontSize={"xl"} color={"blackAlpha.600"} mt={2}>
        <Text>Everything you need to know for your study</Text>
        <Text>abroad journey: from first search to your first day</Text>
        <Text>on campus</Text>
      </Box>
      <Box
        mt={3}
        p={6}
        className={"box_shadow"}
        bg={"#fff"}
        borderRadius={"10px"}
        pos={"relative"}
        zIndex={2}
      >
        <Flex fontWeight={"medium"} gap={4} placeItems={"center"}>
          <Flex gap={1} placeItems={"center"}>
            <Text fontSize={"2xl"}>
              <FcReading />
            </Text>
            <Text
              borderBottom={"2px"}
              borderBottomColor={"blue"}
              cursor={"pointer"}
            >
              Courses
            </Text>
          </Flex>
          <Flex gap={1} placeItems={"center"} cursor={"pointer"}>
            <Text fontSize={"2xl"}>
              <FcServices />
            </Text>
            <Text>Services</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={3} mt={8}>
          <Flex
            p={4}
            border={"1px"}
            borderColor={"blackAlpha.400"}
            borderRadius={"6px"}
            fontWeight={"semibold"}
            flexDir={"column"}
            cursor={"pointer"}
          >
            <Text fontSize={"small"}>Subject</Text>
            <Text fontSize={"x-small"}>What do you want to study?</Text>
          </Flex>
          <Flex
            p={3}
            border={"1px"}
            borderColor={"blackAlpha.400"}
            borderRadius={"6px"}
            fontWeight={"semibold"}
            justify={"space-between"}
            bg={"blackAlpha.100"}
            placeItems={"center"}
            cursor={"pointer"}
          >
            <Flex flexDir={"column"}>
              <Text fontSize={"small"}>Where</Text>
              <Text fontSize={"x-small"}>
                Your ideal country / region or institution
              </Text>
            </Flex>
            <Button colorScheme={"teal"} p={7}>
              <Flex gap={2} placeItems={"center"}>
                <Text fontSize={""}>
                  <AiOutlineSearch />
                </Text>
                <Text>Search</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        bgColor={"yellow.300"}
        borderRadius={"full"}
        p={16}
        position={"absolute"}
        zIndex={1}
        bottom={"25px"}
        left={"17%"}
        opacity={{ base: "0%", lg: "60%" }}
      ></Box>
    </Box>
  );
};

export default CourseBox;
