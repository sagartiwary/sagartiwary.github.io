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
    github:
      "https://github.com/suraj826580/merciful-note-7666/tree/main/tata1mg_clone",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "Tata 1mg is an online healthcare platform that offers a wide range of healthcare products and services, including medicines, diagnostic tests, doctor consultations, and wellness products, to customers in India.",
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
      "https://github.com/suraj826580/merciful-note-7666/tree/main/tata1mg_clone",
    live_Link: "https://tata1mg-clone-umber.vercel.app/",
    description:
      "Tata 1mg is an online healthcare platform that offers a wide range of healthcare products and services, including medicines, diagnostic tests, doctor consultations, and wellness products, to customers in India.",
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
      "https://github.com/suraj826580/melted-scale-2590/tree/main/redmeat",
    live_Link: "https://redmeat.vercel.app/",
    description:
      "Licious.com is an Indian online food delivery platform that offers a range of high-quality meat, seafood, and poultry products sourced directly from local farms and fishermen, delivered conveniently to customers' doorsteps.",
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
    github: "https://github.com/suraj826580/snappy-cars-9183",
    live_Link: "https://singular-blini-baf0ba.netlify.app/",
    description:
      "Mailchimp.com is an all-in-one marketing platform that allows businesses to create and manage email campaigns, build landing pages and websites, and automate their marketing activities in a user-friendly way.",
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
          <Text fontWeight={600}>PROJECTS</Text>
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
