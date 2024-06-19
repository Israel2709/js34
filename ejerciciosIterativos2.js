let blogEntries = [
  {
    title: "Understanding JavaScript Closures",
    content:
      "JavaScript closures are a fundamental concept that every JavaScript developer should understand. In this post, we will explore closures in depth, discuss why they are important, and look at some practical examples of how they can be used in your code...",
    createdDate: "2024-06-01",
    createdBy: "Alice",
    reactions: 832,
    comments: [
      "Great explanation! This really helped me understand closures better.",
      "Can you also explain how closures work in asynchronous code?",
    ],
    stars: 5,
    hashTags: ["javascript", "node"],
    readTime: "15 min",
  },
  {
    title: "A Guide to Flexbox in CSS",
    content:
      "Flexbox is a powerful layout module in CSS that allows you to design complex layouts with ease. This guide will walk you through the basics of Flexbox, how to use it to build responsive layouts, and some tips and tricks to get the most out of it...",
    createdDate: "2024-05-19",
    createdBy: "Charlie",
    reactions: 511,
    comments: [
      "This guide is super helpful, thank you!",
      "I've been struggling with Flexbox, and this made it so much clearer.",
    ],
    stars: 4,
    hashTags: ["css", "html"],
    readTime: "10 min",
  },
  {
    title: "React Hooks: A Complete Introduction",
    content:
      "React hooks have revolutionized the way we write React components. In this comprehensive introduction, we will cover the basics of hooks, how to use them, and some advanced patterns you can leverage in your applications...",
    createdDate: "2023-09-26",
    createdBy: "Grace",
    reactions: 644,
    comments: [
      "Fantastic introduction to hooks!",
      "This is exactly what I needed to get started with hooks.",
    ],
    stars: 5,
    hashTags: ["react", "javascript"],
    readTime: "20 min",
  },
  {
    title: "Building RESTful APIs with Node.js",
    content:
      "Node.js provides a robust platform for building RESTful APIs. In this tutorial, we will go through the process of setting up a Node.js server, creating RESTful endpoints, and connecting to a MongoDB database...",
    createdDate: "2024-01-28",
    createdBy: "Hannah",
    reactions: 69,
    comments: [
      "Clear and concise tutorial. Thanks!",
      "Can you add more details on error handling?",
    ],
    stars: 4,
    hashTags: ["node", "javascript", "mongo"],
    readTime: "25 min",
  },
  {
    title: "Mastering CSS Grid Layout",
    content:
      "CSS Grid Layout is a two-dimensional layout system that can handle both columns and rows. This post will guide you through the fundamentals of CSS Grid, and show you how to create complex layouts with ease...",
    createdDate: "2024-02-26",
    createdBy: "Frank",
    reactions: 809,
    comments: [
      "This is the best CSS Grid tutorial I've found.",
      "Very detailed and easy to follow.",
    ],
    stars: 5,
    hashTags: ["css", "html"],
    readTime: "15 min",
  },
  {
    title: "Getting Started with Firebase",
    content:
      "Firebase offers a suite of cloud-based tools that can help you build, improve, and grow your apps. In this post, we'll explore Firebase's core features and how to integrate them into your web applications...",
    createdDate: "2023-11-13",
    createdBy: "Eva",
    reactions: 294,
    comments: [
      "Great overview of Firebase!",
      "Can you provide more examples on using Firebase Firestore?",
    ],
    stars: 3,
    hashTags: ["firebase", "javascript"],
    readTime: "12 min",
  },
  {
    title: "Understanding the Document Object Model (DOM)",
    content:
      "The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. This post will help you understand the DOM and how to manipulate it using JavaScript...",
    createdDate: "2023-10-22",
    createdBy: "David",
    reactions: 403,
    comments: [
      "Finally, I understand the DOM!",
      "This was very informative, thank you.",
    ],
    stars: 4,
    hashTags: ["html", "javascript"],
    readTime: "18 min",
  },
  {
    title: "Advanced JavaScript: Promises and Async/Await",
    content:
      "Handling asynchronous operations in JavaScript can be tricky. This post will dive deep into Promises and the async/await syntax, providing you with the knowledge you need to handle asynchronous code like a pro...",
    createdDate: "2023-07-13",
    createdBy: "Grace",
    reactions: 148,
    comments: [
      "Very thorough explanation of async/await.",
      "This cleared up a lot of confusion I had about promises.",
    ],
    stars: 5,
    hashTags: ["javascript", "node"],
    readTime: "22 min",
  },
  {
    title: "Setting Up a MongoDB Database",
    content:
      "MongoDB is a popular NoSQL database that is widely used in modern web applications. This guide will walk you through setting up a MongoDB database, connecting to it, and performing basic CRUD operations...",
    createdDate: "2024-01-06",
    createdBy: "Charlie",
    reactions: 684,
    comments: [
      "Excellent MongoDB setup guide.",
      "I appreciate the clear instructions.",
    ],
    stars: 4,
    hashTags: ["mongo", "node"],
    readTime: "14 min",
  },
  {
    title: "Introduction to Web Accessibility",
    content:
      "Web accessibility ensures that websites are usable by people of all abilities and disabilities. This post will cover the basics of web accessibility, why it is important, and how to implement it in your web projects...",
    createdDate: "2024-03-29",
    createdBy: "Julia",
    reactions: 536,
    comments: [
      "This is a crucial topic, thanks for covering it!",
      "Great tips on making websites more accessible.",
    ],
    stars: 5,
    hashTags: ["html", "css"],
    readTime: "16 min",
  },
];

/*
1.- Dado el array de entradas de blog, crea un nuevo array que contenga solo los títulos de las entradas.
2.- Filtra las entradas de blog para obtener solo aquellas que tengan más de 500 reacciones.
3.- Calcula el número total de reacciones de todas las entradas de blog.
4.- Imprime en la consola el título de cada entrada de blog junto con su tiempo de lectura.
5.- Encuentra la primera entrada de blog que tenga exactamente 5 estrellas.
6.- Verifica si todas las entradas de blog tienen al menos una reacción.
7.- Verifica si al menos una entrada de blog tiene más de 800 reacciones.
8.- Crea un resumen de cada entrada de blog que contenga solo los primeros 100 caracteres del contenido seguido de "...".
9.- Convierte las fechas de creación de las entradas de blog al formato "MM-DD-YYYY".
10.- Reemplaza todas las ocurrencias de "JavaScript" en los contenidos de las entradas de blog por "JS".
*/
