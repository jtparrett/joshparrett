import type { MetaFunction } from "@remix-run/node";
import { Box, Container, Flex, styled } from "~/styled-system/jsx";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { ROLES } from "~/utils/roles";
import { Role } from "~/components/Roles";
import { Tags } from "~/components/Tags";

export const meta: MetaFunction = () => {
  return [
    { title: "Josh Parrett - CV" },
    { name: "description", content: "Welcome to my online curriculum vitae." },
  ];
};

export default function Index() {
  return (
    <Container py={12} maxW={900}>
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
          fontWeight="black"
          fontSize={{ base: "5xl", md: "7xl" }}
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

      <Flex
        pt={8}
        gap={4}
        alignItems="flex-start"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <styled.p
          color="gray.400"
          flex={1}
          textWrap="balance"
          pos="relative"
          zIndex={1}
        >
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

        <Box
          rounded="lg"
          overflow="hidden"
          w={240}
          pos="relative"
          boxShadow="20px 20px 130px var(--colors-brand)"
        >
          <styled.img src="/josh-parrett.jpg" w="full" display="block" />

          <Flex
            gap={2}
            pos="absolute"
            bottom={0}
            left={0}
            w="full"
            bgColor="rgba(0, 0, 0, 0.7)"
            backdropFilter="blur(5px)"
            justify="flex-end"
            p={2}
          >
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
            <styled.a
              fontSize="2xl"
              href="https://twitter.com/jtparrett"
              target="_blank"
            >
              <IoLogoTwitter />
              <styled.span srOnly>Twitter</styled.span>
            </styled.a>
          </Flex>
        </Box>
      </Flex>

      <styled.section py={8}>
        <styled.h2
          fontWeight="black"
          fontSize="4xl"
          textTransform="uppercase"
          mb={2}
        >
          Roles
        </styled.h2>

        <Flex flexDir="column" gap={6}>
          {ROLES.map((role) => (
            <Role key={role.date} role={role} />
          ))}
        </Flex>
      </styled.section>

      <styled.section py={8}>
        <styled.h2
          fontWeight="black"
          fontSize="4xl"
          textTransform="uppercase"
          mb={2}
        >
          Other Skills
        </styled.h2>

        <styled.p color="gray.400">
          <Tags tags="Advanced Github version control, Adobe Suite, GraphQL, Apollo Client, react-query, Express, Gatsby, Vercel, NextJS, Remix Run, Jira, Trello, Slack, Redux, Flux, Flow, Recompose, Reselect, Serverless, AWS, Material UI, TCP/UDP peer networking, blockchain knowledge, Swift, SwiftUI, App store deployments, Panda CSS, Prisma, Illustrator, Photoshop, Figma" />
        </styled.p>
      </styled.section>

      <styled.section py={8}>
        <styled.h2
          fontWeight="black"
          fontSize="4xl"
          textTransform="uppercase"
          mb={2}
        >
          Contact Me
        </styled.h2>

        <styled.a
          color="brand"
          fontWeight="semibold"
          href="mailto:jtparrett@me.com"
        >
          jtparrett@me.com
        </styled.a>
      </styled.section>
    </Container>
  );
}
