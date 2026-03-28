import type { MetaFunction } from "@remix-run/node";
import { css } from "../styled-system/css";
import { motion } from "framer-motion";
import { DashedDivider } from "~/components/DashedDivider";
import { Container, Spacer } from "~/styled-system/jsx";

export const meta: MetaFunction = () => {
  return [
    { title: "Josh Parrett — Lead Product Engineer" },
    {
      name: "description",
      content:
        "13+ years of professional software development. Leading product teams with React, Node.js, and modern web technologies.",
    },
  ];
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const roles = [
  {
    company: "Specter",
    url: "https://tryspecter.com",
    title: "Lead Product Engineer",
    period: "February 2024 — Present",
    tech: ["Claude", "Cursor", "React", "Remix", "React Router", "Node.js"],
    description:
      "Working full-stack across the core platform, developing complex front-end features and designing the user experience as the core person responsible for UX decisions. Architected data-heavy backend systems including standalone integrations connecting with multiple CRM platforms using OAuth and complex data flows.",
  },
  {
    company: "Thursday",
    url: "https://www.getthursday.com",
    title: "Senior Engineer",
    period: "December 2022 — December 2023",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Jest",
      "React Query",
      "Redux",
    ],
    metrics: "1m+ downloads, 300k+ MAUs",
    description:
      "Refactored and re-architected the company's iOS and Android applications, removing large amounts of code debt in replacement for TypeScript-based modern technologies and methodologies.",
  },
  {
    company: "Specter",
    url: "https://tryspecter.com",
    title: "Lead Platform Engineer",
    period: "March 2022 — December 2022",
    tech: ["React", "Remix", "TypeScript", "React Query", "Supabase", "Prisma"],
    description:
      "Employed as a solo technical lead on the company's first bespoke platform in the investment space. Tasked with UX/UI design and full-stack development of a greenfield platform from the ground up.",
  },
  {
    company: "Thursday",
    url: "https://www.getthursday.com",
    title: "Senior Javascript Engineer",
    period: "September 2021 — March 2022",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Jest",
      "React Query",
      "Redux",
    ],
    description:
      "Developed core features of the company's iOS and Android applications whilst undertaking a large-scale re-architecture. Responsible for implementing unit & integration testing, linting and deployment pipelines.",
  },
  {
    company: "Procensus",
    title: "Javascript Engineer & UI/UX Designer",
    period: "January 2021 — September 2021",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Jest",
      "React Query",
      "Framer",
      "Figma",
    ],
    description:
      "Overhauled and redesigned the existing frontend architecture, migrating an Angular/React hybrid application to Next.js with focuses on SSR, high test coverage and a refreshed UI. Visually redesigned the entire platform single-handedly.",
  },
  {
    company: "Du.co",
    url: "https://du.co/",
    title: "Senior Javascript Engineer",
    period: "October 2019 — January 2021",
    tech: ["React", "TypeScript", "Jest", "GraphQL", "Apollo Client"],
    description:
      "Migrated an existing complex Backbone platform to React. Developed a query builder interface and natural-rule-language tool enabling users to construct bespoke queries via complex recursive rendering.",
  },
  {
    company: "Beatchain",
    url: "https://www.beatchain.com/",
    title: "Senior Fullstack Javascript Developer",
    period: "July 2019 — October 2019",
    tech: [
      "React",
      "React Native",
      "React Native Web",
      "Node.js",
      "GraphQL",
      "Apollo",
      "AWS",
    ],
    description:
      "Single-handedly developed the core React Native application from the ground up. Introduced a Node.js GraphQL/Apollo Server lambda service and created the shared component library using React Native Web.",
  },
  {
    company: "Rota",
    url: "https://app.rota.com",
    title: "Fullstack Javascript Developer",
    period: "March 2019 — July 2019",
    tech: ["React", "React Native", "Redux", "Node.js", "GraphQL", "AWS"],
    description:
      "Built features across backend Node.js microservices and React/React Native frontend applications. Managed deployments and system architecture using AWS.",
  },
  {
    company: "Rawnet ONE",
    url: "https://thisisone.tv/",
    title: "Senior Javascript Product Developer",
    period: "2017 — 2019",
    tech: [
      "React",
      "React Native",
      "Redux",
      "Node.js",
      "GraphQL",
      "Apollo",
      "AWS",
    ],
    description:
      "Led React/React Native development on the company's first greenfield product. Grew a Javascript team from the ground up, producing standards and driving the company to API-driven GraphQL applications.",
  },
  {
    company: "Rawnet Ltd",
    url: "https://www.rawnet.com/",
    title: "Frontend Developer",
    period: "2014 — 2017",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Native",
      "Rails",
      "Node.js",
      "SASS",
    ],
    description:
      "Crafted bespoke UI web solutions, integrating with the Concrete 5 CMS and numerous Rails APIs.",
  },
  {
    company: "Heath Wallace",
    title: "Apprentice Web Developer",
    period: "2012 — 2014",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    description:
      "Front-end developer integrating bespoke UI into a Sitecore CMS for clients such as HSBC and Holden Leasing.",
  },
];

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Remix",
  "GraphQL",
  "Apollo Client",
  "React Query",
  "Redux",
  "Prisma",
  "Supabase",
  "AWS",
  "Serverless",
  "Vercel",
  "Claude",
  "Cursor",
  "Framer Motion",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Swift",
  "SwiftUI",
  "Panda CSS",
  "Expo",
  "Gatsby",
  "Express",
  "Jest",
  "Git",
];

export default function Index() {
  return (
    <Container
      px={0}
      maxW="780px"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      borderColor="gray.100"
    >
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className={css({
          paddingTop: "120px",
          paddingBottom: "80px",
          paddingX: "24px",
        })}
      >
        <motion.div
          variants={fadeUp}
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          })}
        >
          <img
            src="/josh-parrett.jpg"
            alt="Josh Parrett"
            className={css({
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              objectFit: "cover",
              filter: "grayscale(20%)",
            })}
          />
          <div>
            <h1
              className={css({
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                color: "gray.900",
              })}
            >
              Josh Parrett
            </h1>
            <p
              className={css({
                fontSize: "14px",
                color: "gray.500",
                marginTop: "2px",
              })}
            >
              Lead Product Engineer
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className={css({
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
            color: "gray.900",
            maxWidth: "700px",
          })}
        >
          13+ years building products with modern web technologies.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className={css({
            fontSize: "17px",
            lineHeight: 1.7,
            color: "gray.500",
            marginTop: "24px",
            maxWidth: "620px",
          })}
        >
          A passionate engineer, designer, and technical leader who has worked
          across multiple startups and product teams — leading and owning
          product development with React, Node.js, and serverless architectures.
        </motion.p>
      </motion.section>

      {/* Divider */}
      <DashedDivider />

      {/* Experience */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className={css({
            display: "flex",
            alignItems: "center",
            px: 6,
            py: 4,
          })}
        >
          <h2
            className={css({
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "gray.500",
              fontFamily: "mono",
            })}
          >
            <span className={css({ color: "gray.400" })}>[01]</span> Experience
          </h2>
          <Spacer />
          <span
            className={css({
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "gray.400",
              fontFamily: "mono",
            })}
          >
            2012 — Present
          </span>
        </motion.div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "0",
          })}
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className={css({
                paddingTop: "32px",
                paddingBottom: "32px",
                borderTopWidth: 1,
                borderColor: "gray.100",
                paddingX: "24px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "6px",
                })}
              >
                <h3
                  className={css({
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "gray.900",
                  })}
                >
                  {"url" in role && role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css({
                        color: "inherit",
                        textDecoration: "none",
                        borderBottomWidth: 1,
                        borderColor: "gray.200",
                        _hover: { bg: "gray.100" },
                      })}
                    >
                      {role.company}{" "}
                      <span className={css({ fontSize: "12px" })}>↗</span>
                    </a>
                  ) : (
                    role.company
                  )}{" "}
                  <span
                    className={css({
                      fontWeight: 400,
                      color: "gray.400",
                    })}
                  >
                    — {role.title}
                  </span>
                </h3>
                <span
                  className={css({
                    fontSize: "13px",
                    color: "gray.400",
                    whiteSpace: "nowrap",
                    fontVariantNumeric: "tabular-nums",
                  })}
                >
                  {role.period}
                </span>
              </div>

              {"metrics" in role && role.metrics && (
                <p
                  className={css({
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "gray.600",
                    marginBottom: "8px",
                  })}
                >
                  {role.metrics}
                </p>
              )}

              <p
                className={css({
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "gray.500",
                  marginBottom: "14px",
                })}
              >
                {role.description}
              </p>

              <div
                className={css({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                })}
              >
                {role.tech.map((t) => (
                  <span
                    key={t}
                    className={css({
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "gray.500",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      borderWidth: 1,
                      borderColor: "gray.200",
                      whiteSpace: "nowrap",
                    })}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <DashedDivider />

      {/* Skills */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className={css({
            px: 6,
            py: 4,
            borderBottomWidth: 1,
            borderColor: "gray.100",
          })}
        >
          <h2
            className={css({
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "gray.500",
              fontFamily: "mono",
            })}
          >
            <span className={css({ color: "gray.400" })}>[02]</span> Skills &
            Tools
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className={css({
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            px: 6,
            py: 10,
          })}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              className={css({
                fontSize: "13px",
                fontWeight: 500,
                color: "gray.700",
                padding: "6px 16px",
                borderRadius: "100px",
                backgroundColor: "gray.50",
                borderWidth: 1,
                borderColor: "gray.200",
                whiteSpace: "nowrap",
              })}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <DashedDivider />

      {/* Contact */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className={css({
            px: 6,
            py: 4,
            borderBottomWidth: 1,
            borderColor: "gray.100",
          })}
        >
          <h2
            className={css({
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "gray.500",
              fontFamily: "mono",
            })}
          >
            <span className={css({ color: "gray.400" })}>[03]</span> Contact
          </h2>
        </motion.div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            px: 6,
            py: 10,
          })}
        >
          <motion.a
            variants={fadeUp}
            href="mailto:Jtparrett@me.com"
            className={css({
              fontSize: "16px",
              fontWeight: 500,
              color: "gray.900",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderBottomWidth: 1,
              borderColor: "gray.200",
              width: "fit-content",
              _hover: {
                bg: "gray.100",
              },
              transition: "color 0.2s ease",
            })}
          >
            JTParrett@me.com
            <span className={css({ fontSize: "14px", color: "gray.400" })}>
              ↗
            </span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://github.com/JTParrett"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              fontSize: "16px",
              fontWeight: 500,
              color: "gray.900",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderBottomWidth: 1,
              borderColor: "gray.200",
              width: "fit-content",
              _hover: {
                bg: "gray.100",
              },
              transition: "color 0.2s ease",
            })}
          >
            Github.com/JTParrett
            <span className={css({ fontSize: "14px", color: "gray.400" })}>
              ↗
            </span>
          </motion.a>
        </div>
      </motion.section>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
        className={css({
          py: 2,
          textAlign: "center",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "gray.100",
          bg: "gray.50",
        })}
      >
        <p className={css({ fontSize: "12px", color: "gray.400" })}>
          &copy; {new Date().getFullYear()} Josh Parrett. All rights reserved.
        </p>
      </motion.footer>
    </Container>
  );
}
