import { Center, Text, Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import Github from "../images/githubCalander.png";
import MyGithub from "../Components/MyGithub";
export const About = () => {
  return (
    <Box>
      <Box id="about" className="about section">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>About</Text>
        </Center>
        <br />
        <br />

        <Center>
          <Grid
            position="relative"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
            gap="5px"
          >
            <Box width={{ base: "200px", sm: "350px", md: "430" }} m="5px">
              <Text color="white" textAlign="left" id="user-detail-intro">
                An aspiring web developer, a lifelong learner, skilled in
                front-end and back-end web development and passionate about
                creating responsive and user-friendly websites. Eager to begin
                career as a web developer.Currently learing CSS,
                JavaScript,React,HTML,Chakra UI, Nodejs.
              </Text>
            </Box>
            <Box
              width={{ base: "200px", sm: "350px", md: "430" }}
              m="5px"
              id="user-detail-name"
            >
              <Text color="white" textAlign="left">
                <span fontWeight={500}>Masai School, Bangalore</span> <br />
                Full Stack Web Development (Full Time)
                <br />
                Aug,2022 - Present <br />
                Jamshedpur, Jharkhand <br />
                Bachelor of Science (B.Sc) Aug,2018 - Oct,2021
              </Text>
            </Box>
            <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-stats-card"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github-readme-stats.vercel.app/api?username=sagartiwary&theme=dark&hide_border=false&include_all_commits=true&count_private=false"
              />
            </Box>

            <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-top-langs"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sagartiwary&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
              />
            </Box>

            <Box width={{ base: "200px", sm: "350px", md: "430px" }} m="5px">
              <Image
                id="github-streak-stats"
                width={{ base: "200px", sm: "350px", md: "430px" }}
                src="https://github-readme-streak-stats.herokuapp.com/?user=sagartiwary&theme=dark&hide_border=false"
              />
            </Box>
          </Grid>
        </Center>
        <MyGithub />
      </Box>
    </Box>
  );
};
