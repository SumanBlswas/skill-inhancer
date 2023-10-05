import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logobar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      gap={2}
      placeItems={"center"}
      onClick={() => navigate("/")}
      cursor={"pointer"}
    >
      <Box w={"50px"}>
        <Image
          src={
            "https://github.com/SumanBlswas/skill-inhancer/assets/112753516/ef13db99-f011-4e5a-bb90-d27190afb4f7"
          }
          alt={"logo"}
        />
      </Box>
      <Text fontSize={"4xl"} fontFamily={"monospace"} color={"#fff"}>
        MR
      </Text>
    </Flex>
  );
};

export default Logobar;
