export const parentArray = [
  {
    firstBook: {
      BookIntro: {
        heading: "Book 1: Builder Book",
        subHeading: [
          "Learn how to build a full-stack, production-ready JavaScript web application from scratch",
          "Unlike online tutorials, which can be outdated, disjointed, and frustrating to fit together,<br/> our book gives you a structured, up-to-date guide on building a complete web app from start to finish.",
        ],
        previewbtnText: "Preview & buy book for $99",
        whyBookHeading: "Why this book?",
        tableofcontentHeading: "Table Of Contents",
        features: [
          {
            paragraphHeading: "Robust JavaScript stack",
            paragraph:
              "Learn how to build a web app with React.js, Next.js, Material-UI, Express.js, Mongoose, and MongoDB. We regularly update the book with the latest versions of all dependencies.",
          },
          {
            paragraphHeading: "Popular third-party APIs",
            paragraph:
              "Learn how to integrate a web app with Google for user authentication, GitHub for markdown and collaboration, AWS SES for transactional emails, MailChimp for newsletters, and Stripe for selling.",
          },
          {
            paragraphHeading: "Build a complete web application",
            paragraph:
              "We cover every step of building a web app - writing pages/components, creating a server, connecting a database, integrating internal and external API infrastructures, and more. You could spend days or weeks searching these topics on Google. The web app you build in this book can be used to sell your own paywalled content and as a portfolio item.",
          },

          {
            paragraphHeading: "Public support",
            paragraph:
              "If you have questions, search our closed GitHub issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days.",
          },
        ],
      },
      chapters: [
        {
          firstfive: [
            {
              chapterName: "Introduction",
              topics: [
                {
                  topic: "what you will learn",
                  isList: false,
                },
                {
                  topic: "why should I pay 99$ for this",
                  isList: false,
                },
                {
                  topic: "Project Structure",
                  isList: false,
                },
                {
                  topic: "ScreenShots",
                  isList: true,
                  subTopics: ["customer pages", "admin pages"],
                },
              ],
            },
            {
              chapterName:
                "Chapter 1: Set up Node.js project. VS code editor and lint. Set up Next.js project. Material-UI integration. Server-side rendering. Custom styles.",
              topics: [
                {
                  topic: "Set up Node.js project",
                  isList: true,
                  subTopics: ["Installing node js and yarn", "package.json"],
                },
                {
                  topic: "Vs code Editor and Lint",
                  isList: true,
                  subTopics: ["VS code editor", "ESLint and Prettier"],
                },
                {
                  topic: "Set up Next.js project",
                  isList: true,
                  subTopics: [
                    "Basic Codes",
                    "Compiling Code",
                    "Document HOC",
                    "App HOC extension",
                    "Index Page",
                    "Header Component",
                  ],
                },
                {
                  topic: "Material UI Integration",
                  isList: true,
                  subTopics: [
                    "myDocument Component",
                    "Spread Operators",
                    "Theme and theme Provider",
                    "Testing Next Js/Material Ui Integrations",
                  ],
                },
                {
                  topic: "ServerSide Rendering",
                  isList: false,
                },
                {
                  topic: "Custom Styles",
                  isList: false,
                },
              ],
            },
            {
              chapterName:
                "Chapter 2: HTTP. Express server. Next-Express server, nodemon. Index.getInitialProps. User data model and mongoose. MongoDB database and dotenv. Testing server-database connection. Retrieving document. Session and cookie. MenuWithAvatar and Header components.",
              topics: [
                {
                  topic: "HTTP",
                  isList: false,
                },
                {
                  topic: "Express server",
                  isList: true,
                  subTopics: [
                    "Next-Express server, nodemon",
                    "Index.getInitialProps",
                    "Testing new server",
                  ],
                },
                {
                  topic: "User data model and mongoose",
                  isList: false,
                },
                {
                  topic: "MongoDB database and dotenv",
                  isList: true,
                  subTopics: [
                    "Testing server-database connection",
                    "Retrieving document",
                  ],
                },
                {
                  topic: "Session",
                  isList: true,
                  subTopics: [
                    "Configure session",
                    "Save session",
                    "Testing session and cookie",
                  ],
                },
                {
                  topic: "MenuWithAvatar and Header components",
                  isList: false,
                },
              ],
            },
            {
              chapterName:
                "Chapter 3: Authentication HOC. getInitialProps method. Login page and NProgress. Asynchronous execution. Promise.then. async/await. Google Oauth API infrastructure. setupGoogle, verify, passport, strategy. Express routes /auth/google, /oauth2callback, /logout. generateSlug. this. Set up at Google Cloud Platform.",
              topics: [
                {
                  topic: "Authentication HOC withAuth",
                  isList: true,
                  subTopics: [
                    "getInitialProps method",
                    "Parameters for withAuth HOC",
                    "Testing withAuth",
                  ],
                },
                {
                  topic: "Login page and NProgress",
                  isList: false,
                },
                {
                  topic: "Asynchronous execution and callback",
                  isList: true,
                  subTopics: ["Promise.then", "async/await"],
                },
                {
                  topic: "Google Oauth API infrastructure",
                  isList: true,
                  subTopics: [
                    "setupGoogle, verify, passport and strategy",
                    "Express routes /auth/google /oauth2callback, /logout",
                    "User.publicFields and User.signInOrSignUp methods",
                    "generateSlug method",
                    "this",
                    "Set up at Google Cloud Platform and testing",
                  ],
                },
              ],
            },
            {
              chapterName:
                "Chapter 4: Testing method with Jest. Transactional email API with AWS SES service. Set up AWS SES service, security credentials. sendEmail method. Export and import syntax for server code. EmailTemplate data model. Update User.signInOrSignUp. Informational success/error messages. Notifier component. notify method.s",
              topics: [
                {
                  topic: "Testing method with Jest",
                  isList: false,
                },
                {
                  topic: "Transactional email API with AWS SES service",
                  isList: true,
                  subTopics: [
                    "Set up AWS SES service, security",
                    "sendEmail method",
                    "Export and import syntax for server code",
                    "EmailTemplate data model, insertTemplates and getEmailTemplate methods",
                    "Update User.signInOrSignUp",
                    "Testing",
                  ],
                },
                {
                  topic: "Informational success/error messages",
                  isList: true,
                  subTopics: [
                    "Notifier component",
                    "notify method",
                    "Example of usage",
                  ],
                },
                {
                  topic: "Google Oauth API infrastructure",
                  isList: true,
                  subTopics: [
                    "setupGoogle, verify, passport and strategy",
                    "Express routes /auth/google /oauth2callback, /logout",
                    "User.publicFields and User.signInOrSignUp methods",
                    "generateSlug method",
                    "this",
                    "Set up at Google Cloud Platform and testing",
                  ],
                },
              ],
            },
          ],
        },
        {
          secondfive: [
            {
              chapterName:
                "Chapter 5: Book data model. Chapter data model. MongoDB index. API infrastructure and user roles. Read chapter API.",
              topics: [
                {
                  topic: "Book data model",
                  isList: true,
                  subTopics: [
                    "Schema for Book data model",
                    "Static methods for Book data model",
                  ],
                },
                {
                  topic: "Chapter data model",
                  isList: true,
                  subTopics: [
                    "Schema for Chapter data model",
                    "Static methods for Chapter data model",
                  ],
                },
                {
                  topic: "MongoDB index",
                  isList: false,
                },
                {
                  topic: "API infrastructure and user roles",
                  isList: true,
                  subTopics: [
                    "Pages and components for user roles",
                    "API methods by user roles",
                    "Express routes by user roles",
                    "Custom routing for pages",
                  ],
                },
                {
                  topic: "Read chapter API",
                  isList: true,
                  subTopics: ["ReadChapter page", "Testing Read chapter API"],
                },
              ],
            },
            {
              chapterName:
                "Chapter 6: Set up Github API infrastructure. Sync content API infrastructure. Missing UI infrastructure for Admin user. Two improvements. Testing.",
              topics: [
                {
                  topic: "Set up Github API infrastructure",
                  isList: true,
                  subTopics: [
                    "setupGithub method",
                    "Github-related Express routes",
                  ],
                },
                {
                  topic: "Sync content API infrastructure",
                  isList: true,
                  subTopics: [
                    "Github server-side methods",
                    "Book.syncContent and Chapter.syncContent",
                    "markdownToHtml and getSections methods",
                    "Express routes for Admin user",
                    "API methods for Admin user",
                  ],
                },
                {
                  topic: "Missing UI infrastructure for Admin user",
                  isList: false,
                },
                {
                  topic: "Two improvements",
                  isList: true,
                  subTopics: [
                    "routesWithSlug",
                    "Redirect UX for Admin and Customer users",
                  ],
                },
                {
                  topic: "Testing",
                  isList: true,
                  subTopics: [
                    "Connecting Github",
                    "Adding new book",
                    "Syncing content",
                  ],
                },
              ],
            },
            {
              chapterName:
                "Chapter 7: Table of Contents. Sections. Sidebar. Toggle TOC. Highlight for section. Active section. Hide Header. Mobile browser.",
              topics: [
                {
                  topic: "Table of Contents",
                  isList: true,
                  subTopics: ["Sections", "Sidebar", "Toggle TOC"],
                },
                {
                  topic: "Highlight for section",
                  isList: true,
                  subTopics: ["Active section"],
                },
                {
                  topic: "Hide Header",
                  isList: false,
                },
                {
                  topic: "Mobile browser",
                  isList: false,
                },
              ],
            },
            {
              chapterName:
                "Chapter 8: BuyButton component. Buy book API infrastructure. Setup at Stripe dashboard and environmental variables. isPurchased and ReadChapter page. Redirect. My books API and MyBooks page. Mailchimp API.",
              topics: [
                {
                  topic: "BuyButton component",
                  isList: false,
                },
                {
                  topic: "Buy book API infrastructure",
                  isList: true,
                  subTopics: [
                    "fetchCheckoutSessionApiMethod API method",
                    "Express route /stripe/fetch-checkout-session",
                    "Stripe method createSession",
                    "Express route for request from Stripe server, retrieveSession",
                  ],
                },
                {
                  topic:
                    "Setup at Stripe dashboard and environmental variables",
                  isList: true,
                  subTopics: ["Static method Book.buy", "Purchase data model"],
                },
                {
                  topic: "isPurchased and ReadChapter page",
                  isList: true,
                  subTopics: [
                    "isPurchased, preview and full content",
                    "Adding BuyButton to ReadChapter",
                    "Testing Buy book API",
                  ],
                },
                {
                  topic: "Redirect",
                  isList: false,
                },
                {
                  topic: "My books API and MyBooks page",
                  isList: true,
                  subTopics: [
                    "getMyBookListApiMethod API method",
                    "getMyBookListApiMethod API method",
                    "Static method Book.getPurchasedBooks",
                  ],
                },
                {
                  topic: "Mailchimp API",
                  isList: true,
                  subTopics: [
                    "callAPI method",
                    "addToMailchimp method",
                    "Adding addToMailchimp to",
                    "Environmental variables for Mailchimp API",
                    "Testing Mailchimp API",
                  ],
                },
              ],
            },
            {
              chapterName:
                "Chapter 9: Prepare project for deployment. Environmental variables, production/development. Logger. SEO, robots.txt, sitemap.xml. Compression and security. Deploy project. Heroku. Testing deployed project. AWS Elastic Beanstalk.",
              topics: [
                {
                  topic: "Prepare project for deployment",
                  isList: true,
                  subTopics: [
                    "Environmental variables",
                    "Logger",
                    "SEO: robots.txt, sitemap.xml",
                    "Google Analytics",
                    "Compression and security",
                    "Express route /_next/*",
                  ],
                },
                {
                  topic: "Self-hosted fonts",
                  isList: false,
                },
                {
                  topic: "AWS Cloudfront",
                  isList: false,
                },
                {
                  topic: "Material icons",
                  isList: false,
                },
                {
                  topic: "Refactor class component into functional",
                  isList: false,
                },
                {
                  topic: "Next.js SSR/CSR",
                  isList: false,
                },
                {
                  topic: "React lifecycle methods",
                  isList: false,
                },
                {
                  topic: "Next.js v13, other package upgrades",
                  isList: false,
                },
              ],
            },
          ],
        },
      ],
      Reviews: [
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
            '"Builder Book is by far the best book I have found on the MERN stack. It also covers testing. Very comprehensive book with explanations so that you actually understand what the code does."',
        },
        {
          urlThumbnail:
            "https://d2w0479rccr6dx.cloudfront.net/book-reviews/earllee-picture.jpg",
          name: "Earl Lee",
          comment:
            '"As an engineer turned product manager thats a few years removed from writing code, Builder Book has been a quick and convenient way to brush up on full-stack web development and learn React for a side project."',
        },
        {
          urlThumbnail:
            "https://avatars1.githubusercontent.com/u/29977869?s=460&v=4",
          name: "Rick Hallett",
          comment:
            '"The authors are particularly receptive to open-source issues and pull-requests; this made my experience very worthwhile. Strongly recommend to those going from junior to middleweight JavaScript developers"',
        },
      ],
      Authors: {
        headingOfFooter: "Authors",
        subHeadingofFooter: "Full stack team",
        authorsData: [
          {
            img: "https://storage.googleapis.com/builderbook/kelly-picture.png",
            name: "Kelly",
          },
          {
            img: "https://storage.googleapis.com/builderbook/timur-picture.png",
            name: "Timur",
          },
        ],
      },
      aboutUs: [
        "   maintain two popular repos - <a href='www.google.com'>saas</a> and <a href='www.google.com'>builderbook</a> (combined:over 6000 stars and 1000 unique visitors per week).",
        "built and maintain the most popular React/Typescript/Node <a href='www.google.com'>boilerplate</a>  for starting a SaaS business.",
        " built<a href='www.google.com'>Async</a> , open source team communcation web app to separate urgent vs non-urgent conversations.",
        "   built Work in <a href='www.google.com'>biotech</a> , growing niche job board for small biotech startups.",
        "  built over a dozen SaaS web applications in the last 5 years and offer custom development service: <a href='www.google.com'> async-labs.com</a>",
      ],
    },
  },
];

export const ReviewsPage = [
  {
    firstDiv: [
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/paulparks-picture.jpeg",
        name: "Paul Parks",
        review:
          "I am primarily a backend engineer who has not been exposed to too much front end or web development. Builderbook has been a great resource that has allowed me to learn several frameworks and design patterns with ease.",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/patrickcaughey-picture.jpeg",
        name: "Patrick Caughey",
        review:
          "The SaaS Boilerplate book has been super helpful. The first few chapters got me up and running very quickly, and as I re-read them I continued to learn more about the 'why' behind the decisions you made. It's been fun and quite informative!",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/aleksandrs-savkins-picture.jpeg",
        name: "Aleksandrs Savkins",
        review:
          "The book is exactly what I The book is exactly what I was looking foThe book is exactly what I was looking fowas looking forThe book is exactly what I was looking foThe book is exactly what I was looking foThe book is exactly what I was looking fo - I needed some guide that will cover the entire processes of creating web apps and saas. I didn't want to waste time and go through many guides, the book is a huge time saver!",
      },
    ],
    secondDiv: [
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/jia-wang-picture.jpg",
        name: "Jia Wang",
        country: "Massachusetts, USA",
        review:
          "I want to thank you all for your effort to build up this fantastic project. It is really awesome for full-stack beginners! As one of them, I am using this project to build my own thing, during the implementation I learned a lot, and I might have gave up if I did not choose to purchase BUILDER BOOK! Deeply appreciate that!",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/igor-andreienko-picture.jpg",
        name: "Igor Andreienko",
        country: "Ukarine",
        review:
          "I decided to study the first book and then move on to the next one. The book is really well written, which makes it a joy to study. Thank you.",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/fahad-riaz-picture.jpeg",
        name: "Fahad Riaz",
        review:
          "I'm a backend developer and I was looking for something that brought me up to speed on how to deploy a production ready website. This was the first thing I found that fit the bill and seemed comprehensive enough.",
      },
    ],
    thirdDiv: [
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/jia-wang-picture.jpg",
        name: "Jia Wang",
        country: "Massachusetts, USA",
        review:
          "I want to thank you all for your effort to build up this fantastic project. It is really awesome for full-stack beginners! As one of them, I am using this project to build my own thing, during the implementation I learned a lot, and I might have gave up if I did not choose to purchase BUILDER BOOK! Deeply appreciate that!",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/igor-andreienko-picture.jpg",
        name: "Igor Andreienko",
        country: "Ukarine",
        review:
          "I decided to study the first book and then move on to the next one. The book is really well written, which makes it a joy to study. Thank you.",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/fahad-riaz-picture.jpeg",
        name: "Fahad Riaz",
        review:
          "I'm a backend developer and I was looking for something that brought me up to speed on how to deploy a production ready website. This was the first thing I found that fit the bill and seemed comprehensive enough.",
      },
    ],
  },
];
