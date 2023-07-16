import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../Resume/sagar-tiwary-resume.pdf";

const Links = [
  { title: "Home", href: "#home", class: "nav-link home" },
  { title: "About", href: "#about", class: "nav-link about" },
  { title: "Skills", href: "#skills", class: "nav-link skills" },
  { title: "Project", href: "#projects", class: "nav-link projects" },
  { title: "Contact", href: "#contact", class: "nav-link contact" },
];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "sagar-tiwary-resume.pdf";
    link.click();
    window.open(
      "https://drive.google.com/file/d/105KH1IGo1CoBis2qvDbXiRgyns0-QlLo/view?usp=sharing",
      "_blank"
    );
  };

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="nav-menu">
      <Box
        bg={"#111111"}
        px={4}
        position={"fixed"}
        w={"100%"}
        zIndex={1}
        h="75px"
        top={0}
        borderBottom={"1px solid yellow"}
      >
        <Flex
          h={16}
          alignItems={"right"}
          justifyContent={["right", "right", "right"]}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((ele) => (
                <Link
                  px={2}
                  fontSize={"20px"}
                  color={"#fff"}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#4299E1",
                  }}
                  href={ele.href}
                  className={ele.class}
                >
                  {ele.title}
                </Link>
              ))}
              <Box className="nav-link resume">
                <Button
                  fontSize={"20px"}
                  variant="ghost"
                  arial-label="RESUME"
                  _hover={{
                    color: "white",
                    bg: "#e4002b",
                  }}
                  colorScheme="blue"
                  id="resume-button-1"
                  onClick={handleDownload}
                >
                  Resume
                </Button>
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ title, href }) => (
                <Link
                  px={2}
                  color={"#fff"}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#4299E1",
                  }}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>content</Box>
    </Box>
  );
}
