import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  Flex,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Doctor from "../images/doctor.png";
import India from "../images/india.jpg";
import Travel from "../images/travelocity.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
const projectsArray = [
  {
    logo: Doctor,
    title: "Healthcare Department",
    github: "https://tata1mg-clone-umber.vercel.app/",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "This project is an online platform for consulting with doctors and making appointments in a healthcare hospital. The platform is built with React, Redux, JSON Server, Chakra UI, CSS, HTML, and JavaScript.",
    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        link: "https://redux.js.org",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: Doctor,
    title: "Healthcare Department",
    github:
      "https://github.com/sagartiwary/ashamed-rainstorm-9299/tree/main/hospital-expertise",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "This project is an online platform for consulting with doctors and making appointments in a healthcare hospital. The platform is built with React, Redux, JSON Server, Chakra UI, CSS, HTML, and JavaScript.",
    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        link: "https://redux.js.org",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: Travel,
    title: "Travlelocity App",
    github:
      "https://github.com/sagartiwary/-urbane-songs-1107/tree/main/project-1",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "The Travelocity app The Travelocity mobile app helps you browse and manage reservations with ease. It is available for both Android and iOS services. The app will notify you of flight status and gate numbers to keep track of delays.",
    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: India,
    title: "India's Bridal",
    github: "https://github.com/sagartiwary/sore-sugar-4125",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "David's Bridal is a clothier in the United States that specializes in wedding dresses, prom gowns, and other formal wear. It is the largest American bridal-store chain.",
    techStack: [
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
];
export default function Projects() {
  return (
    <Box
      py={["0px", "60px", "80px"]}
      id="projects"
      width={"80%"}
      m={"auto"}
      position="relative"
    >
      <Box pb="30px">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>Projects</Text>
        </Center>
      </Box>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={[0, 5, 10]}
        >
          {projectsArray.map(
            ({ logo, title, techStack, description, github, live_Link }) => {
              return (
                <GridItem
                  key={Math.random()}
                  overflow={"hidden"}
                  className="project-card"
                >
                  <Link href={live_Link} target="_blank">
                    <Image src={logo} w="100%" h="auto" objectFit={"cover"} />
                  </Link>
                  <Heading
                    fontSize={["18px", "20px", "22px", "25px"]}
                    className="project-title"
                    display={"inline-block"}
                    color="#B0BEC5"
                    borderBottom={"4px solid #B0BEC5"}
                    letterSpacing={1}
                    paddingTop={[2, 3, 4, 5]}
                  >
                    {title}
                  </Heading>
                  <Text
                    paddingTop={[2, 3, 4, 5]}
                    color="#B0BEC5"
                    className="project-description"
                    fontSize={["14px", "15px", "16px", "17px"]}
                  >
                    {description}
                  </Text>
                  <Flex gap={2} className="project-tech-stack">
                    {techStack.map(({ image, link }) => {
                      return (
                        <Box
                          key={Math.random()}
                          py={2}
                          width={"40px"}
                          transition="transform 0.4s"
                          _hover={{
                            transform: "rotate(360deg)",
                          }}
                        >
                          <Link href={link} target="_blank">
                            <Image width={"100%"} src={image} alt="image" />
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                  <Box>
                    <HStack pb={3}>
                      <Link
                        href={github}
                        target="_blank"
                        className="project-github-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          leftIcon={<FontAwesomeIcon icon={faGithub} />}
                        >
                          Github
                        </Button>
                      </Link>
                      <Link
                        href={live_Link}
                        target="_blank"
                        className="project-deployed-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          colorScheme="twitter"
                          leftIcon={<FontAwesomeIcon icon={faLifeRing} />}
                        >
                          Live
                        </Button>
                      </Link>
                    </HStack>
                  </Box>
                </GridItem>
              );
            }
          )}
        </Grid>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}
