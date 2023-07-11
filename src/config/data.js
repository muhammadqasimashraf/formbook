export const parentArray = [
  {
    books: [
      {
        BookIntro: {
          heading: "Book 1: Builder Book",
          subHeading: [
            "Learn how to build a full-stack, production-ready JavaScript web application from scratch",
            "Unlike online tutorials, which can be outdated, disjointed, and frustrating to fit together,<br/> our book gives you a structured, up-to-date guide on building a complete web app from start to finish.",
          ],
          previewbtnText: "Preview & buy book for $99",

          tableofcontentHeading: "Table Of Contents",
          features: {
            whyBookHeading: "Why this book?",
            featuresArray: [
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
                  "If you have questions, search our closed<a href='www.google.com'>GitHub issues</a>  or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days.",
              },
            ],
          },
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
                  {
                    topic: "Authors",
                    isList: false,
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
                    subTopics: [
                      "Static method Book.buy",
                      "Purchase data model",
                    ],
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
        Reviews: {
          BookPage: [
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/sam-reaves-picture.jpeg",
              name: "Sam Reaves",
              review:
                "I use Udemy for learning specific technologies but chose Builder Book after being impressed with their website being the actual project you build. The up to date, step by step instructions made creating the app a breeze.",
            },
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/salie-lie-picture.jpg",
              name: "Salie Lim",
              review:
                '"Builder Book is by far the best book I have found on the MERN stack. It also covers testing. Very comprehensive book with explanations so that you actually understand what the code does."',
            },
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/earllee-picture.jpg",
              name: "Earl Lee",
              review:
                '"As an engineer turned product manager thats a few years removed from writing code, Builder Book has been a quick and convenient way to brush up on full-stack web development and learn React for a side project."',
            },
            {
              urlThumbnail:
                "https://avatars1.githubusercontent.com/u/29977869?s=460&v=4",
              name: "Rick Hallett",
              review:
                '"The authors are particularly receptive to open-source issues and pull-requests; this made my experience very worthwhile. Strongly recommend to those going from junior to middleweight JavaScript developers"',
            },
          ],
        },
        Authors: {
          headingOfAuthors: "Authors",
          subHeadingofAuthors: "Full stack team",
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
      {
        BookIntro: {
          heading: "Book 2: SaaS Boilerplate",
          subHeading: [
            "Learn how to build a production-ready, feature-rich SaaS web application from scratch .",
            "Starting a small and independent software business is hard.,<br/>Our detailed book on building a ready-to-go saas boilerplate will save you weeks of effort and thousands of dollars..",
          ],
          previewbtnText: "Preview & buy book for $250",

          tableofcontentHeading: "Table Of Contents",
          features: {
            whyBookHeading: "Why this book?",
            featuresArray: [
              {
                paragraphHeading: "Robust JavaScript stack",
                paragraph:
                  "Our open source project occasionally trends on GitHub inside the TypeScript category, and we keep our book up-to-date with the latest versions of all dependencies. Build a web app with React.js, Next.js, Material-UI, MobX, WebSockets, Express.js, Node.js, Mongoose, MongoDB. Write with TypeScript..",
              },
              {
                paragraphHeading: "Popular third-party APIs",
                paragraph:
                  "In addition to numerous internal API infrastructures, integrate your SaaS web application with external API services. Integrate with Google for user authentication and analytics, AWS SES for transactional emails, AWS S3 for file hosting and serving, MailChimp for newsletters, and Stripe for selling.",
              },
              {
                paragraphHeading:
                  "Build your own SaaS product and become an owner of your SaaS business",
                paragraph:
                  "This book is not another to-do list app. You will build a practical web application with must-have features that can become your SaaS business. We take you through every step of building a SaaS web application from scratch.",
              },
              {
                paragraphHeading: "Public support",
                paragraph:
                  "If you have questions, search our closed<a href='www.google.com'>GitHub issues</a>  or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days.",
              },
            ],
          },
        },
        chapters: [
          {
            firstfive: [
              {
                chapterName: "Introduction. Project structure.",
                topics: [
                  {
                    topic: "Table of Contents",
                    isList: false,
                  },
                  {
                    topic: "Why this book?",
                    isList: false,
                  },
                  {
                    topic: "Who is this book for?",
                    isList: false,
                  },
                  {
                    topic: "What will you learn?",
                    isList: false,
                  },
                  {
                    topic: "ScreenShots",
                    isList: false,
                  },
                  {
                    topic: "Project Structure ",
                    isList: false,
                  },
                  {
                    topic: "Authors",
                    isList: false,
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 1: Setup. GitHub and Git. Visual Studio code editor. Node, Yarn. package.json. TypeScript. ESLint, Prettier. Next.js. Server-side rendering. Project structure. Document HOC. App HOC. Index page. Testing. Environmental variables.",
                topics: [
                  {
                    topic: "Setup",
                    isList: true,
                    subTopics: [
                      "GitHub and Git",
                      "Visual Studio Code Editor",
                      "Node Yarn",
                      "Package.json",
                      "Typescript",
                      "Eslint",
                    ],
                  },
                  {
                    topic: "Next.js",
                    isList: true,
                    subTopics: [
                      "Server-side rendering",
                      "Project structure",
                      "Extension for Document HOC",
                      "Extension for App HOC",
                      "Index page",
                    ],
                  },
                  {
                    topic: "Testing",
                    isList: false,
                  },
                  {
                    topic: "Environmental variables",
                    isList: false,
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 2: Material-UI. Client-side and server-side rendered pages. Dark theme, CssBaseline. Shared layout. Adding styles. Shared components. MenuWithLinks. Notifier. Confirmer. Nprogress. Mobile browser.",
                topics: [
                  {
                    topic: "Material-UI",
                    isList: true,
                    subTopics: [
                      "Client-side and server-side rendered pages",
                      "Theme, dark theme, CssBaseline",
                      "Remove styles injected on the server",
                    ],
                  },
                  {
                    topic: "Shared Layout",
                    isList: false,
                  },
                  {
                    topic: "Adding styles",
                    isList: false,
                  },
                  {
                    topic: "Shared components",
                    isList: true,
                    subTopics: ["MenuWithLinks", "Notifier", "Confirmer"],
                  },
                  {
                    topic: "Nprogress",
                    isList: false,
                  },
                  {
                    topic: "Mobile Version",
                    isList: false,
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 3: HTTP, request, response. APP project. Fetch method. API method at Index page. Next-Express server. Express route. Asynchronous function, Promise, async/await. API server. New project API. Updating APP.",
                topics: [
                  {
                    topic: "HTTP, request, response",
                    isList: false,
                  },
                  {
                    topic: "APP project",
                    isList: true,
                    subTopics: [
                      "Step 1: Fetch method",
                      "Step 2: API method at Index page",
                      "Step 3: Next-Express server. Express route.",
                    ],
                  },
                  {
                    topic: "Asynchronous execution and callback async/await",
                    isList: false,
                  },
                  {
                    topic: "API server",
                    isList: true,
                    subTopics: ["New project API", "Updating APP"],
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 4: Infrastructure for User. MongoDB database. MongoDB index. Jest testing for TypeScript. Your Settings page. API infrastructure for uploading file.",
                topics: [
                  {
                    topic: "Infrastructure for User",
                    isList: true,
                    subTopics: [
                      "User Schema and Model. Type interface.",
                      "Static methods and Mongoose methods",
                      "Express routes, router and API methods",
                    ],
                  },
                  {
                    topic: "MongoDB database",
                    isList: true,
                    subTopics: [
                      "MongoDB Atlas",
                      "Creating MongoDB document",
                      "Connecting database",
                      "Testing connection",
                    ],
                  },
                  {
                    topic: "MongoDB index",
                    isList: false,
                  },
                  {
                    topic: "Jest testing for TypeScript",
                    isList: true,
                    subTopics: [
                      "generateSlug method",
                      "Testing generateSlug method",
                    ],
                  },
                  {
                    topic: "Your Settings page",
                    isList: true,
                    subTopics: [
                      "Form and input",
                      "API infrastructure for updating profile",
                    ],
                  },
                  {
                    topic: "Uploading file API",
                    isList: true,
                    subTopics: [
                      "Page method uploadFile",
                      "Getting signed request API",
                      "Env variables and CORS settings for uploading file",
                      "Uploading file using signed request API",
                      "Testing file upload",
                      "resizeImage",
                    ],
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 5: Login page. Session and cookie. Google OAuth API. Authentication HOC withAuth. firstGridItem logic in App HOC..",
                topics: [
                  {
                    topic: "Login page",
                    isList: true,
                    subTopics: ["LoginButton."],
                  },
                  {
                    topic: "Session and cookie",
                    isList: true,
                    subTopics: [
                      "Configure session and mount middleware",
                      "Save session to database",
                      "Configure and create cookie",
                    ],
                  },
                  {
                    topic: "Google OAuth API",
                    isList: true,
                    subTopics: [
                      "Express routes for Google OAuth API",
                      "Configure passport",
                      "verify function",
                      "passport and session",
                      "Static methods publicFields and signInOrSignUpViaGoogle",
                      "getUserApiMethod API method and /get-user Express route",
                      "Google Cloud Platform",
                      "Testing Google OAuth",
                    ],
                  },
                  {
                    topic: "Authentication HOC withAuth",
                    isList: true,
                    subTopics: [
                      "getUserApiMethod in withAuth",
                      "Redirect logic in withAuth",
                      "Render logic in withAuth HOC",
                      "Testing withAuth HOC",
                    ],
                  },

                  {
                    topic: "firstGridItem logic in App HOC",
                    isList: false,
                  },
                ],
              },
            ],
          },
          {
            secondfive: [
              {
                chapterName:
                  "Chapter 6: AWS SES API. Passwordless OAuth API. Mailchimp API.",
                topics: [
                  {
                    topic: "AWS SES API",
                    isList: true,
                    subTopics: [
                      "EmailTemplate model, insertTemplates and getEmailTemplate methods",
                      "Adding getEmailTemplate and sendEmail to signInOrSignUpViaGoogle",
                      "sendEmail method",
                      "Setting up AWS SES and EMAIL_SUPPORT_FROM_ADDRESS",
                      "Testing AWS SES API",
                    ],
                  },
                  {
                    topic: "Passwordless OAuth API",
                    isList: true,
                    subTopics: [
                      "Configure passwordless",
                      "Configure passwordless token",
                      "Express routes for Passwordless API",
                      "signInOrSignUpByPasswordless method for User model",
                      "Testing Passwordless OAuth API",
                    ],
                  },
                  {
                    topic: "Mailchimp API",
                    isList: true,
                    subTopics: [
                      "callAPI method",
                      "addToMailchimp method",
                      "Adding addToMailchimp to signInOrSignUpViaGoogle and signInOrSignUpByPasswordless",
                      "Environmental variables for Mailchimp API",
                      "Testing Mailchimp API",
                    ],
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 7: Application state, App HOC, store and MobX. Toggle theme API. Team API. Invitation API.",
                topics: [
                  {
                    topic: "Application state, withStore HOC, store and MobX",
                    isList: true,
                    subTopics: [
                      "Updating App HOC",
                      "store, observable, decorate",
                      "initializeStore, getStore, server-side rendering, action",
                      "Data store for User",
                      "Updating withAuth HOC",
                      "Update YouSettings page",
                      "Testing store infrastructure",
                    ],
                  },
                  {
                    topic: "Toggle theme API",
                    isList: true,
                    subTopics: [
                      "Layout",
                      "Store method toggleTheme",
                      "toggleThemeApiMethod API method",
                      "Express route /user/toggle-theme",
                      "Static method toggleTheme",
                      "Testing toggle theme API",
                    ],
                  },
                  {
                    topic: "Team API",
                    isList: true,
                    subTopics: [
                      "Model and static methods - Team",
                      "Updating User model - Team - here",
                      "Express routes - Team",
                      "API methods - Team",
                      "Data store and store methods - Team",
                      "Updating main store - Team",
                      "Initial data from App.getInitialProps - Team",
                      "teamRequired - Team",
                      "CreateTeam page",
                      "TeamSettings page",
                      "Testing Team API",
                    ],
                  },
                  {
                    topic: "Invitation API",
                    isList: true,
                    subTopics: [
                      "Updating TeamSettings page",
                      "InviteMember component",
                      "Invitation page",
                      "Updating LoginButton component",
                      "Invitation data store - Invitation",
                      "Updating Team data store - Invitation",
                      "API methods - Invitation",
                      "Express routes - Invitation",
                      "Model and static methods",
                      "Invitation email template",
                      "Updating Team model - Invitation",
                      "Testing Invitation API",
                    ],
                  },
                ],
              },
              {
                chapterName:
                  "Chapter 8: Discussion API. Post API. Websockets for Discussion and Post..",
                topics: [
                  {
                    topic: "Discussion API",
                    isList: true,
                    subTopics: [
                      "Model and static methods - Discussion",
                      "Express routes - Discussion",
                      "API methods - Discussion",
                      "Data store - Discussion",
                      "Updating Team data store - Discussion",
                      "Discussion page",
                      "Discussion-specific components",
                      "Common components for Discussion API",
                      "Testing Discussion API without Post API",
                    ],
                  },
                  {
                    topic: "Post API",
                    isList: true,
                    subTopics: [
                      "Model and static methods - Post",
                      "Express routes - Post",
                      "API methods - Post",
                      "Data store and store methods - Post",
                      "Updating DiscussionPageComp page and",
                      "CreateDiscussionForm",
                      "Post-specific components",
                      "Testing Post API",
                    ],
                  },
                  {
                    topic: "Websockets for Discussion and Post",
                    isList: true,
                    subTopics: [
                      "API server",
                      "API server - setupSockets method",
                      "API server - server-side websocket",
                      "APP client",
                      "Testing websockets",
                    ],
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
                  "Chapter 9: Stripe API - API project. Stripe API - APP project. Setup at Stripe dashboard and environmental variables. Email notification for new post API - API project. Amazon API Gateway and AWS Lambda.",
                topics: [
                  {
                    topic: "Stripe API - API project",
                    isList: true,
                    subTopics: [
                      "Stripe setup - API",
                      "Stripe methods - API",
                      "Stripe checkout callback - API",
                      "Stripe webhook - API",
                      "Team Model - API",
                      "User Model - API",
                      "Team Leader Express routes - API",
                    ],
                  },
                  {
                    topic: "Stripe API - APP project",
                    isList: true,
                    subTopics: [
                      "Team Leader API methods - APP",
                      "Team data store - APP",
                      "User data store - APP",
                      "Billing page and testing - APP",
                      "TeamSettings page and testing - APP",
                    ],
                  },
                  {
                    topic:
                      "Setup at Stripe dashboard and environmental variables",
                    isList: true,
                    subTopics: ["Testing Stripe API"],
                  },
                  {
                    topic: "Email notification for new post API - API project",
                    isList: true,
                    subTopics: [
                      "Discussion and EmailTemplate Models - API",
                      "Express routes for adding and editing Discussion",
                      "sendDataToLambdaApiMethod API method - APP",
                      "Discussion data store - APP",
                      "CreateDiscussionForm, EditDiscussionForm and PostForm - APP",
                      "Testing updates to internal API infrastructure",
                    ],
                  },
                  {
                    topic: "Amazon API Gateway and AWS Lambda",
                    isList: true,
                    subTopics: [
                      "Amazon API Gateway",
                      "AWS Lambda",
                      "Testing entire Email notification for new post API",
                    ],
                  },
                ],
              },
            ],
          },
        ],
        Reviews: {
          BookPage: [
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/matt-moyles-picture.jpg",
              name: "Matt Moyles",
              review:
                "I found it very useful in Next.js learning. I followed along with the book, then used the async-labs/saas boilerplate to start a new app at my job.",
            },
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/fahad-riaz-picture.jpeg",
              name: "Fahad Riaz",
              review:
                '"I m a backend developer and was looking for something that brought me up to speed on how to deploy a production ready website.This fit the bill"',
            },
            {
              urlThumbnail:
                "https://d2w0479rccr6dx.cloudfront.net/book-reviews/paul-serafimovich-picture.jpeg",
              name: "Pavel Serafimovich",
              review:
                '"This is a great book. Clear presentation style. The accompanying code is of very high quality. Your anti-monopoly ideology is also inspiring."',
            },

            {
              urlThumbnail:
                "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/andrew-shrout-picture.jpeg",
              name: "Andrew Shrout",
              review:
                '"Thanks again for everything in the book and all the help in GitHub. Really appreciate how much you ve all done to make my company come to life."',
            },
          ],
        },
        Authors: {
          headingOfAuthors: "Authors",
          subHeadingofAuthors: "Full stack team",
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
    ],
    ReviewPage: [
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/paulparks-picture.jpeg",
        name: "Paul Parks",
        country: "San Diego, CA",
        review:
          "I am primarily a backend engineer who has not been exposed to too much front end or web development. Builderbook has been a great resource that has allowed me to learn several frameworks and design patterns with ease i want this book reviewed by tothers also",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/patrickcaughey-picture.jpeg",
        name: "Patrick Caughey",
        country: "San Diego, CA",
        review:
          "The SaaS Boilerplate book has been super helpful. The first few chapters got me up and running very quickly, and as I re-read them I continued to learn more about the 'why' behind the decisions you made. It's been fun and quite informative!",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/aleksandrs-savkins-picture.jpeg",
        name: "Aleksandrs Savkins",
        country: "Riga, Latvia",
        review:
          "I needed some and i want this books reviewed by others guide that will cover the entire processes of creating web apps and saas. I didn't want to waste time and go through many guides, the book is a huge time saver",
      },
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
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/igor-andreienko-picture.jpg",
        name: "Igor Andry",
        country: "Ukraine",
        review:
          "I decided to study the first book and then move on to the next one. The book is really well written, which makes it a joy to study. Thank you",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/fahad-riaz-picture.jpeg",
        name: "Fahad Riaz",
        review:
          "I'm a backend developer and I was looking for something that brought me up to speed on how to deploy a production ready website. This was the first thing I found that fit the bill and seemed comprehensive enough.",
      },

      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/paul-serafimovich-picture.jpeg",
        name: "Pavel Sarafimovich",
        country: "Russia",
        review:
          "This is a great book. Clear presentation style. The accompanying code is of very high quality. Your anti-monopoly ideology is also inspiring.",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-j-picture.png",
        name: "Jennifer K",
        country: "",

        review:
          "I have a Wordpress dev job and it’s nearly impossible for me to get more experience with other technologies without projects like Builder Book. Everyone is doing video courses but I don’t have time to sit through videos. I love being able to read/skim and easily go back through chapters.",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/andrew-shrout-picture.jpeg",
        name: "Andrew Shrout",
        review:
          '"Thanks again for everything in the book and all the help in GitHub. Really appreciate how much you ve all done to make my company come to life."',
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/michael-stromer-picture.jpeg",
        name: "Michal Stormer",
        country: "New York, NY",
        review:
          "I found builder book using the first book's GitHub repo. From your first book, I was able to relaunch my website: https://michaelstromer.nyc. Thanks for making great content. I learned a lot in your second book, and am finishing up with the deployment this week.",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/clayton-hanson-picture.jpeg",
        name: "Clyton Hansel",
        country: "Charlotte, NC",
        review:
          "Builder Book helped me climb out of the Valley of Despair, which is the area between learning basic HTML and being able to code higher functions proficiently. It's rewarding work to get through each chapter and I can't wait to start the SaaS book.",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-j-picture.png",
        name: "Jamal F.",
        country: "",

        review:
          "I have only just started to read the book. So far I am enjoying the content as it is clarifying the way many of these technologies required to build a web app works. Thus far it is very useful in saving me time without getting bogged down in the beginner details",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-c-picture.png",
        name: "Choo Cheng",
        country: "New York",

        review:
          "I couldn't find many full blown projects built with nextjs and material UI to learn from and your book helped me a lot in connecting the dots. The book could use some diagrams explaining how things integrate with each other and how data flows for a beginner like me. Overall the instructions has been clear and I have no trouble following",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/yannick-wiley-picture.jpeg",
        name: "Yannick Wiley",
        country: "Erie, PA",

        review:
          "I’m a full stack developer and wanted to start to build an MVP to help generate some extra income and continue to build features on top of that. So I begin to search how I could do that using react and being able to render my data on the server side and your builder book product came up. And it attracted my attention, and wanted to try it out myself. So far I’m loving it.",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/matt-moyles-picture.jpg",
        name: "Matt Moyles",
        country: "",
        review:
          "I found it very useful in helping to accelerate my next.js learning. I followed along with the book in building the sample app, and then used the async-labs/saas boilerplate to start a new app at my day job. The book definitely helped me get from 0 to 60 on next.js in a shot period of time, and I’m now feeling pretty comfortable with next.js. I also really like the hands on approach. Building a sample app is a great way to learn a new framework!",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/mamadou-picture.jpeg",
        name: "Mamadou Dialous",
        country: "New York",
        review:
          "Basically the content is good and it's well explained and rich of quality. I learned some features that I was looking to get such as how to combine Express, Next and React as well as Material UI. In addition, I learned some features that I were missing such as how to send out a welcome email. This is a very good real world tutorial that I recommend to developers who are looking to improve their skills",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/eleazar-ramos-picture.jpeg",
        name: "Eleazar Ramos",
        country: "",

        review:
          "Going through the book now and it’s excellent. I took a boot camp last year, but haven’t really coded since. It is a great refresher of concepts, and for the new things I’m learning, it explains it concisely! I’ll be using these concepts for a SaaS app that I’m building",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-j-picture.png",
        name: "Josh Karamuth",
        country: "",

        review:
          "I have been looking for such a book for a long time because every other course is teaching you how to build todo list apps that nobody cares about. So, thanks a lot for putting out such a resource.",
      },

      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/dmitriy-seleznev-picture.jpg",
        name: "Dmitriy Seleznev",
        country: "",
        review:
          "I've just read first and second chapters of your book. I think, section Material-UI \"integration\" in first chapter is too complicated. And it can scare away newbies like me. Reading this chapter requires a good understanding of how JSS, React-JSS and Material-UI works. Maybe, if Material-UI integration is not a very popular use case, then it can be described in additional materials or in the last chapters. Overall, I'm happy with the book so far",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-d-picture.png",
        name: "Drew Page",

        review:
          "I was searching for async/await and found my way to the Async product which led to Builder Book. I'm about halfway through the book and finding it really helpful. Thank you for putting this together.",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/edward-danilyuk-picture.jpg",
        name: "Adward, Denny",
        country: "Lancaster, PA",
        review:
          "The intro content along with how you broke things down step by step and didn’t assume I knew how to do something was great. The other great thing is you can pull out any piece (authentication, using the next framework, stripe integration) whatever - and use that piece of knowledge in your project as well",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/letter-e-picture.png",
        name: "Eduardo Larrad",

        review:
          "I found the reference of the book in the material-ui site. I think is a great job. Thanks for the effort",
      },
      {
        urlThumbnail:
          "			https://d2w0479rccr6dx.cloudfront.net/book-reviews/federico-sananes-picture.jpeg",
        name: "Federico Sananes",
        country: "Argentina",
        review:
          "I bought the book because I read the testimonials in your web and saw you were uploading everything to GitHub, that is so brave. You did and keep doing all this work and open-source it. I knew I could just read the code but wanted to support you too. I was searching node information to solve some things I needed to do for a freelance project.",
      },
      {
        urlThumbnail:
          "			https://d2w0479rccr6dx.cloudfront.net/book-reviews/danh-nguyen-picture.jpg",
        name: "Davi Jose",
        country: "São Paulo, Brasil",
        review:
          "Acho que já escrevi um review, mas se for possível um novo comentário, até agora estou aprendendo muito, quero agradecer ao idealizadores do livro, maravilhoso",
      },
      {
        urlThumbnail:
          "			https://d2w0479rccr6dx.cloudfront.net/book-reviews/justin-cannon-picture.jpeg",
        name: "Justin Cannon",
        country: "San Francisco, CA",
        review:
          "I was actually pretty disappointed, not because I don't think you did a great job writing the book - but because I found that the Next framework abstracts way too much. I'm a fairly experienced developer and was looking for a deeper dive into many things that are just abstracted away by Next. But it does look like an excellent resource for more beginner developers!",
      },
      {
        urlThumbnail:
          "				https://d2w0479rccr6dx.cloudfront.net/book-reviews/anonymous.png",
        name: "Anonymous Reader",

        review:
          "Because I was a beginner(even now I'm a beginner), I had no idea about server-side and I thought examples would be helpful. I kept searching for examples on the internet and finally found the book on REACT homepage. Your book was well explained, so I could read it easily.",
      },
      {
        urlThumbnail:
          "				https://d2w0479rccr6dx.cloudfront.net/book-reviews/jason-sprouse-picture.jpg",
        name: "Jason Sprouse",
        country: "Dallas, TX",
        review:
          "Builder Book is a labor of love. It's obvious that Tima, Kelly and Delgermurun are not only passionate about software development and architectural design, they are also committed to providing an exceptional learning experience to those who are fortunate enough to read Builder Book. It's stated very clearly in the books introduction, many times we pour over resources and learn a little here and there, but when it comes to organizing everything into a meticulous pattern great for referencing in a new build or elsewhere, there's just not much to rely on short of maybe, our browsers bookmarks. Builder Book excels where our browser's bookmark falls short.",
      },
      {
        urlThumbnail:
          "		https://d2w0479rccr6dx.cloudfront.net/book-reviews/jacolby-green-picture.jpeg",
        name: "Jacolby Green",
        country: "Plano, TX",
        review:
          "This book is well written and precise. It is easy to understand and very useful. I was not aware of how to get React to render on the server before but I was introduced in this tutorial. One of the most useful things I have learned so far is how to integrate Material-UI with React on the client and server using Next.js",
      },
      {
        urlThumbnail:
          "			https://d2w0479rccr6dx.cloudfront.net/book-reviews/mirko-tebaldi-picture.png",
        name: "Mirko Tebaldi",
        country: "Ferrara, Italy",
        review:
          "I was sure it was too expensive but 1) good books require time, 2) I love the 'life time upgrade' plan, 3) the book is teaching about google auth, and this is precious. I already have some prototypes using SSR thanks to your book",
      },

      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/manot-luijiu-picture.jpg",
        name: "Manot Luijiu",
        country: "Thailand",

        review:
          "Most other online courses taught me in 'dev environment' (can't use in real world). Therefore, they made me stuck in 'How to code in prod environment?'. Once I noticed that Builder Book will teach me about real production web app, I immediately purchased it..",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/percy-hung-image.jpg",
        name: "Pham Minh Hung",
        country: "HCMC, Vietnam",
        review:
          '"Your book is amazing. I checked out two books published in 2018 (including BuilderBook) and I liked your book more since it covers things I like and it comes with the promise of updating the book regularly <= really like this"',
      },
      {
        urlThumbnail:
          "https://avatars3.githubusercontent.com/u/745267?s=400&v=4",
        name: "Scott Horn",
        country: "Bellevue, WA",
        review:
          "Builder book provides a great foundation for getting started with modern tools and showing reusable examples of gradual app development including login, debugging, logging and deployment.",
      },
      {
        urlThumbnail:
          "https://avatars1.githubusercontent.com/u/29977869?s=460&v=4",
        name: "Rick Hallett",
        country: "United Kingdom",
        review:
          "Some of the code is challenging for a junior, but being stretched is a good experience. The authors have been particularly receptive to open-source issues and pull-requests; this latter point has made my experience a very worthwhile one. Strongly recommended to those going from junior to middleweight JavaScript developers",
      },

      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/yuri-gor-picture.jpeg",
        name: "Yuri Gor",
        country: "Warsaw, Poland",

        review:
          "Material-UI + Next.js + NoSQL DB - it's exactly what I was trying to build by myself. Finally I found this blueprint project at github. I hope I will evolve the project into my own idea, in production! I highly recommend this book: it keeps good balance between detailed explanations and focus on the target, so you will not lose much time nor something important",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/derek-hammit-picture.jpg",
        name: "Derek Hammitt",
        country: "Chicago, IL",

        review:
          "I'm in the exact place your book describes - feeling more and more comfortable with HTML/CSS/JavaScript, just getting started with React, building an API with Express, and struggling through my first full application. I've leaned Node and Express' docs, and MDN's Express tutorials. Your book is an awesome complement to those resources. ",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/karolis-stulgys-picture.jpg",
        name: "Karolis Stulgyss",
        country: "Sydney, Australia",

        review:
          "The SSR setup is crazy and I have no idea what's going on :) Other than that it's great ",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/danh-nguyen-picture.jpg",
        name: "Danh Nguyen",
        country: "Portland, OR",

        review:
          "Very pleased with the book's detailed explanations of design choices and modern web app topics along with the tutorials. In the end you don't just complete the app -you become a far more knowledgeable developer overall. ",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/mirko-tebaldi-picture.png",
        name: "Mirko Tebaldi",
        country: "Ferrara, Italy",

        review:
          "I was sure it was too expensive but 1) good books require time, 2) I love the 'life time upgrade' plan, 3) the book is teaching about google auth, and this is precious. I already have some prototypes using SSR thanks to your book ",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/mirko-tebaldi-picture.png",
        name: "Scott Horn",
        country: "Bellevue, WA",

        review:
          "Builder book provides a great foundation for getting started with modern tools and showing reusable examples of gradual app development including login, debugging, logging and deployment ",
      },
      {
        urlThumbnail:
          "https://d2w0479rccr6dx.cloudfront.net/book-reviews/derek-hammit-picture.jpg",
        name: "Derek Hammitt",
        country: "Chicago, IL",

        review:
          "I'm in the exact place your book describes - feeling more and more comfortable with HTML/CSS/JavaScript, just getting started with React, building an API with Express, and struggling through my first full application. I've leaned Node and Express' docs, and MDN's Express tutorials. Your book is an awesome complement to those resources ",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/dion-pettaway-picture.png",
        name: "Dion Pettaway",
        country: "Columbia, SC",

        review:
          "As I'm someone who prefers reading to videos, I was hoping this book would be thorough and in depth. Happy to see that it was. I really like the explanations. It definitely solidified a few implementation things I never had a perfect grasp on (lightbulb moment for HOC even though I technically use them). ",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/hemant-goyal-picture.jpg",
        name: "Hemant Goyal",
        country: "Alwar, India",

        review:
          "Builder Book is a super learning book that explains every corner of development with React. I highly recommend it to people",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/hemant-goyal-picture.jpg",
        name: "Hemant Goyal",
        country: "Alwar, India",

        review:
          "Builder Book is a super learning book that explains every corner of development with React. I highly recommend it to people",
      },
      {
        urlThumbnail:
          "	https://d2w0479rccr6dx.cloudfront.net/book-reviews/nicolaniro-picture.jpeg",
        name: "Hemant Goyal",
        country: "Alwar, India",

        review:
          "Builder Book is a super learning book that explains every corner of development with React. I highly recommend it to people",
      },

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
