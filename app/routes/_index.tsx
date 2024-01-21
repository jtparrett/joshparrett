import type { MetaFunction } from "@remix-run/node";
import { Box, Container, Flex, styled } from "~/styled-system/jsx";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const meta: MetaFunction = () => {
  return [
    { title: "Josh Parrett - CV" },
    { name: "description", content: "Welcome to my online curriculum vitae." },
  ];
};

export default function Index() {
  return (
    <Container py={12} maxW={900}>
      <Flex gap={2}>
        <Box
          flex={1}
          pos="relative"
          zIndex={1}
          _after={{
            content: '""',
            h: 1,
            bgColor: "brand",
            w: 280,
            pos: "absolute",
            bottom: 18,
            zIndex: -1,
            left: -4,
          }}
        >
          <styled.h1
            mb={2}
            fontWeight="black"
            fontSize="6xl"
            textTransform="uppercase"
            lineHeight={0.8}
          >
            <styled.span
              fontWeight="medium"
              fontSize="2xl"
              textTransform="capitalize"
            >
              Josh Parrett's
            </styled.span>
            <br />
            Curriculum
            <br />
            Vitae
          </styled.h1>
        </Box>

        <styled.a
          fontSize="2xl"
          href="https://www.linkedin.com/in/jtparrett/"
          target="_blank"
        >
          <IoLogoLinkedin />
          <styled.span srOnly>LinkedIn</styled.span>
        </styled.a>
        <styled.a
          fontSize="2xl"
          href="https://github.com/jtparrett"
          target="_blank"
        >
          <IoLogoGithub />
          <styled.span srOnly>GitHub</styled.span>
        </styled.a>
      </Flex>

      <Flex
        gap={4}
        alignItems="flex-start"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <styled.p color="gray.400" mb={4} flex={1} textWrap="balance">
          With over 11 years of professional design & development work, pushing
          cutting-edge technologies and working across numerous startups owning
          product development. I am a passionate engineer, designer and leader,
          dedicating my free time to all things{" "}
          <styled.span color="brand" fontWeight="medium">
            Typescript, NodeJS, React and Serverless;
          </styled.span>{" "}
          whilst working on a number of Node/React personal, commercial and
          professional projects at a large scale.
          <br />
          <br /> I am incredibly keen on following and setting standards whilst
          maintaining the bigger picture and staying on a tight target. Striving
          for organised programming, clean code and innovative approaches to
          tasks. I'm a dedicated team player with an amazing ability and
          ambition to solve problems and develop performant features with
          exceptional attention to detail.
        </styled.p>

        <Box rounded="lg" overflow="hidden" w={240}>
          <styled.img src="/josh-parrett.jpg" w="full" display="block" />
        </Box>
      </Flex>

      <styled.h2 fontWeight="black" fontSize="4xl" textTransform="uppercase">
        Roles
      </styled.h2>
    </Container>
  );
}
