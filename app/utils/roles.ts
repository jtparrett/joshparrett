export interface Role {
  company: string;
  title: string;
  date: string;
  tools: string;
  body: string;
}

export const ROLES: Array<Role> = [
  {
    company: "Thursday",
    title: "Senior Engineer",
    date: "September 2022 - Present",
    tools:
      "React Native, Expo, Xcode, Typescript, Jest, react-query, Redux, Notion",
    body: `Working to refactor and re-architect the company's staple iOS and Android applications, 
my primary role has included removing large amounts of code debt in replacement for typescript based modern technologies and methodologies.`,
  },

  {
    company: "Specter",
    title: "Lead Platform Engineer",
    date: "January 2022 - September 2022",
    tools: "React, Remix Run, Typescript, React-Query, Supabase, Prisma",
    body: `Employed as a solo technical lead on the company's first bespoke platform, I was tasked with UX/UI design and development of a greenfield platform in the investment space. Using advanced full-stack techniques to grow the platform from the ground up. Enhancing my skills with the likes of Prisma, Remix, and the Vercel serverless deployment architecture.`,
  },

  {
    company: "Thursday",
    title: "Senior Engineer",
    date: "September 2021 - January 2022",
    tools:
      "React Native, Expo, Xcode Typescript, Jest, react-query, Redux, Notion",
    body: `Working alongside a small tight-knit team, developing core features of the company's staple iOS and Android applications whilst undertaking a large-scale re-architecture using advanced React Native techniques. Responsible for implementing unit & integration testing, linting and
    deployment pipelines via the Gitlab CI.`,
  },

  {
    company: "Procensus",
    title: "Javascript Engineer & UI/UX Designer",
    date: "January 2021 - September 2021",
    tools:
      "React, NextJS, Typescript, Jest, react-testing-library, react-query, Framer, Illustrator, Photoshop, Jira",
    body: `Primarily joining the team to overhaul and redesign the existing frontend architecture, migrating an existing Angular/React hybrid application to NextJS with key focuses on server side rendering, high test coverage and a refreshed user interface. Tasked with migrating existing features/pages, setting and documenting a standard for the development approach and determining appropriate technologies, along with visually redesigning the entire platform from the ground up single handedly.
    My role has been heavily involved in the agile process, defining epic specifications and documenting implementation detail at the subtask level. Along with providing detailed code reviews and ensuring amazing code quality amongst the team.`,
  },

  {
    company: "Beatchain",
    title: "Senior Fullstack Javascript Developer",
    date: "July 2019 - October 2019",
    tools:
      "React, React Native, React Native Web, Expo, ES6,Node,GraphQL, Apollo Client, Serverless, AWS, Netlify",
    body: `At Duco our team has worked to migrate an existing complex Backbone platform to React. With my personal tasks including the development of a query builder interface and a natural-rule-language tool, giving users the ability to construct bespoke queries via the user interface using complex recursive rendering.
    Joining at the inception of the team, I have helped to define standards and grow the team. Setting strict testing thresholds and type checking. While adhering to monthly release cycles and defining agile methodologies.`,
  },

  {
    company: "Du.co",
    title: "Senior Javascript Engineer",
    date: "October 2019 - January 2021",
    tools:
      "React, Typescript, Jest, react-testing-library, GraphQL, Apollo Client, Jira",
    body: `At Beatchain my role entailed single handedly developing our core products react-native application from the ground up, supporting iOS and Android. Whilst also introducing a NodeJS GraphQL/Apollo Server lambda service for handling data requests, updates and caching.
    Whilst also created the products shared component library, built using react-native-web, storybook and the apollo client, allowing for cross platform components, shared client-side
    logic and reusable graphql queries.`,
  },

  {
    company: "Rota",
    title: "Fullstack Javascript Developer",
    date: "March 2019 - July 2019",
    tools:
      "React, React Native, Redux, Expo, ES6, Node, GraphQL, Apollo Client, Serverless, AWS",
    body: `My role at Rota involved building features across backend NodeJS micro services and React/React Native frontend applications. Using Redux for application state.
    Whilst managing deployments and system architecture using AWS.`,
  },

  {
    company: "Rawnet ONE",
    title: "Senior Javascript Product Developer",
    date: "2017 - 2019",
    tools:
      "React, React Native, Redux, Objective C, ES6, Node, Json Api,GraphQL, Apollo Client, Serverless, AWS",
    body: `My role involved React/React Native development on the company's first Greenfield product. Producing innovative ideas around peer-to-peer and application architecture. Working with a rails based JSON API, and a NodeJS based GraphQL interface. Whilst engaging in a strict Agile workflow.
    Growing a Javascript team from the ground up, producing standards, and pursuing the most cutting edge technologies. Inclusive of React/GraphQL and NodeJS
    Driving the company to API driven/GraphQL React/React Native applications. Working with Redux and Flux for application state management, and the Apollo Client for GraphQL queries.`,
  },

  {
    company: "Rawnet Ltd",
    title: "Frontend Developer",
    date: "2014 - 2017",
    tools:
      "HTML5, CSS3, Javascript (ES6), React, React Native, Rails, PHP, Node, Gulp, Grunt, BEM, SASS, SCSS",
    body: `Crafting bespoke UI web solutions.
    Integrating with the Concrete 5 CMS and numerous Rails API’s.`,
  },

  {
    company: "Heath Wallace",
    title: "Apprentice Web Developer",
    date: "2012 - 2014",
    tools: "HTML, CSS, Javascript, jQuery, Photoshop",
    body: `Working as a Front-end developer integrating bespoke UI into a sitecore CMS for clients such
    as HSBC and Holden Leasing.`,
  },
];
