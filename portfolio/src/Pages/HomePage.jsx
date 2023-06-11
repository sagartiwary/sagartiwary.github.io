import React from "react";
import Skills from "./Skills";
import { About } from "./About";

import {
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Link,
  Flex,
  Image,
} from "@chakra-ui/react";
import TypeWritter from "../Components/TypeWritter";
import Contact from "./Contact";
import  Project  from "./Project";
const HomePage = () => {
  return (
    <div>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        id="home"
        position="relative"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text>
                <Box display={"flex"} gap={2}>
                  <Text> Hey, </Text>{" "}
                  <Text color={"red"} id="user-detail-name">
                    I'm Sagar
                  </Text>
                </Box>
              </Text>
              <Text color={"blue.400"} as={"span"} fontSize={"4xl"}>
                <TypeWritter />
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"#fff"}
              id="user-detail-intro"
            >
              Self-driven, quick starter, passionate programmer with a curious
              mind who enjoys solving problems and working on new projects.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link
                id="resume-button-2"
                href="https://drive.google.com/file/d/105KH1IGo1CoBis2qvDbXiRgyns0-QlLo/view?usp=share_link"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Resume
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            className="home-img"
            objectFit={"cover"}
            h={["250px", "350px", "500px"]}
            src={
              "https://images.squarespace-cdn.com/content/v1/54f3875de4b0f6df27baf95f/1632915929295-L8AT4MZYQPFPWTFEDWPF/Pers_Businessman_After_Red.gif"
            }
            borderRadius={"5%"}
          />
        </Flex>
      </Stack>
      <About />
      <Skills />
      <Project/>
      <Contact />
    </div>
  );
};

export default HomePage;
