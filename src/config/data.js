import Builderbook from "../pages/builderBook/Builderbook";

export const formattedData = {
  heading: "Book 1: Builder Book",
  subHeading:
    "Learn how to build a full-stack, production-ready JavaScript web application from scratch\\n. Unlike online tutorials, which can be outdated, disjointed, and frustrating to fit together, our book gives you a structured, up-to-date guide on building a complete web app from start to finish.",
  btnText: "Preview & buy book for $99",
  heading2: "Why this book?",
  tableofcontentHeading: "Table Of Contents",

  bookContent: [
    {
      paragraphHeading: "Robust JavaScript stack",
      paragraph:
        "Learn how to build a web app with React.js, Next.js, Material-UI, Express.js, Mongoose, and MongoDB. We regularly update the book with the latest versions of all dependencies.",
    },
    {
      paragraphHeading: "Robust JavaScript stack",
      paragraph:
        "We cover every step of building a web app - writing pages/components, creating a server, connecting a database, integrating internal and external API infrastructures, and more. You could spend days or weeks searching these topics on Google. The web app you build in this book can be used to sell your own paywalled content and as a portfolio item.",
    },
    {
      paragraphHeading: "Popular third-party APIs",
      paragraph:
        "Learn how to integrate a web app with Google for user authentication, GitHub for markdown and collaboration, AWS SES for transactional emails, MailChimp for newsletters, and Stripe for selling.",
    },
    {
      paragraphHeading: "Public support",
      paragraph:
        "If you have questions, search our closed Github issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 day",
    },
  ],
};

// let abc = ["customer Pages", "Admin Pages"];
// export const contentData = {
//   chapterName: "Introduction",
//   topics: [
//     "What you will learn",
//     "Why should I pay $99 for this book?",
//     "Project structure",
//     "Authors",
//     abc,
//   ],
// };

// export const contentData = [
//   {
//     title: "What you will learn ",
//     isList: false,
//   },
//   {
//     title: "Why should I pay $99 for this book?",
//     isList: false,
//   },
//   {
//     title: "Project structure",
//     isList: false,
//   },
//   {
//     title: "ScreenShots",
//     isList: true,
//     subtopics: ["Hello", "Hello2"],
//   },
//   {
//     title: "Project structure",
//     isList: false,
//   },
// ];

export const contentData = [
  {
    chapterName: "Introduction",
    data: [
      {
        topic: "what you will learn ",
        isList: false,
      },
      {
        topic: "why should I pay 99$ for this  ",
        isList: false,
      },
      {
        topic: "Project Structure  ",
        isList: false,
      },
      {
        topic: "ScreenShots  ",
        isList: true,
        subTopics: ["customer pages", "admin pages"],
      },
    ],
  },
  {
    chapterName:
      "Chapter 1: Set up Node.js project. VS code editor and lint. Set up Next.js project. Material-UI integration. Server-side rendering. Custom styles.",
    data: [
      {
        topic: "Set up Node.js project ",
        isList: true,
        subTopics: ["Installing node js and yarn ", "package.json"],
      },
      {
        topic: "Vs code Editor and Lint ",
        isList: true,
        subTopics: ["VS code editor ", "ESLint and Prettier"],
      },
      {
        topic: "Set up Next.js project ",
        isList: true,
        subTopics: [
          "Basic Codes",
          "Compiling Code",
          "Document HOC",
          "App HOC extension",
          "Index Page ",
          "Header Component",
        ],
      },
      {
        topic: "ScreenShots  ",
        isList: true,
        subTopics: ["customer pages", "admin pages"],
      },
    ],
  },
];
export const cardData = [
  {
    urlThumbnail:
      "https://d2w0479rccr6dx.cloudfront.net/book-reviews/sam-reaves-picture.jpeg",
    name: "Sam Reaves",
    comment:
      "I use Udemy for learning specific technologies but chose Builder Book after being impressed with their website being the actual project you build. The up to date, step by step instructions made creating the app a breeze.",
  },
  {
    urlThumbnail:
      "https://d2w0479rccr6dx.cloudfront.net/book-reviews/salie-lie-picture.jpg",
    name: "Salie Lim",
    comment:
      "Builder Book is by far the best book I have found on the MERN stack. It also covers testing. Very comprehensive book with explanations so that you actually understand what the code does.",
  },
  {
    urlThumbnail:
      "https://d2w0479rccr6dx.cloudfront.net/book-reviews/earllee-picture.jpg",
    name: "Earl Lee",
    comment:
      "As an engineer turned product manager that's a few years removed from writing code, Builder Book has been a quick and convenient way to brush up on full-stack web development and learn React for a side project.",
  },
  {
    urlThumbnail: "https://avatars1.githubusercontent.com/u/29977869?s=460&v=4",
    name: "Rick Hallett",
    comment:
      "The authors are particularly receptive to open-source issues and pull-requests; this made my experience very worthwhile. Strongly recommend to those going from junior to middleweight JavaScript developers",
  },
];
