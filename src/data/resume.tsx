import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Jayanth Gajula",
  initials: "EJ",
  url: "https://jayanth.vercel.app",
  location: "San Antonio, TX",
  locationLink: "https://www.google.com/maps/place/sanantonio",
  description:
    "Software Engineer. I love building things and helping people out. Active on X.",
  summary:
    "At the end of 2025, I want to go fulltime into building and scaling my SaaS apps. I am currently pursuing a, [batchelor's degree in computer science](/#education), [interned at Ystem n Chess Inc](#education), and completed over 20 projects for fun. Currently learning AI/ML, trying to hack, also dabbling frontend UI/UX sites too.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "AWS",
    "SQL",
    "Docker",
    "Kubernetes",
    "Unity3D",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ej.developer.d@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/jayanth",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/jayanth",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/runnindev",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "ej.developer.d@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "YStem Chess Inc.",
      href: "https://www.linkedin.com/company/ystemandchessinc/about/",
      badges: [],
      location: "Boise, ID (Remote)",
      title: "Software Engineering Intern",
      logoUrl: "/ystemchessinc.jpeg",
      start: "January 2025",
      end: "May 2025",
      description:
        `Migrated the organization's Angular frontend to a React TypeScript monorepo, improving scalability, maintainability, and UI performance while designing reusable components and enhancing user login/register functionalities.
        Collaborated with a 12-person team using Slack and Figma to deliver a responsive web platform that supports underrepresented students.
        `
    },
    {
      company: "Private Real Estate - Contract",
      logoUrl: "",
      href: "",
      badges: [],
      location: "San Antonio, TX",
      title: "Python Developer",
      start: "March 2025",
      end: "April 2025",
      description:
        `Developed a Python-based solution using AWS Lambda, S3, Glacier, Textract OCR, and DynamoDB to extract textual data from real estate images, reducing processing time by 30% and optimizing storage costs by 40%.
        Implemented a batch image uploader integrated with AWS Cognito for secure user authentication, streamlining the image upload process and improving batch processing efficiency by 25%.
        `,
    },
  ],
  education: [
    {
      school: "University of Texas - San Antonio",
      href: "https://www.utsa.edu/",
      degree: "Bachelor's Degree of Computer Science Engineering",
      logoUrl: "/utsalogo.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "General Assembly",
      href: "https://generalassemb.ly/",
      degree: "Software Engineer",
      logoUrl: "/galogo.png",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Ungithub",
      href: "https://ungithub.vercel.app",
      dates: "May 2025",
      active: true,
      description:
        "Ungithub lets you explore any GitHub repo by asking questions powered by vector search and Gemini AI. It reads and understands the codebase for you, only once, then no setup, no digging, just ask and get your answers instantly. Backend deployed on a free-tier render server, it might take a few seconds to startup, but once loaded, answers are instant. Currently free.",
      technologies: [
        "Next.js",
        "MongoDB Atlas",
        "Python",
        "FastAPI",
        "NLP",
        "LangChain",
        "Gemini AI"
      ],
      links: [
        {
          type: "Website",
          href: "https://ungithub.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
                {
          type: "GitHub",
          href: "https://github.com/jayanth920/ungithub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ungithub.png",
      video:
        "",
    },
    {
      title: "Aurable",
      href: "https://aurable.vercel.app",
      dates: "May 2025",
      active: true,
      description:
        "Aurable is a SaaS platform that lets you build and launch web apps with ease, similar to services like Lovable or Bolt.net. It offers a generous free tier with 10,000–20,000 credits with Gemini Pro 2.5, so you can start creating without any upfront cost. Ideal for makers, startups, and developers looking to prototype or deploy quickly.",
      technologies: [
        "Next.js",
        "Convex DB",
        "GCP Oauth 2.0",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://aurable.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
                {
          type: "GitHub",
          href: "https://github.com/jayanth920/aurable",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aurable.png",
      video:
        "",
    },
    {
      title: "Floor 8",
      href: "https://github.com/jayanth920/Floor8",
      dates: "May 2025",
      active: true,
      description:
        "A psychological horror game built in Unity where players explore looping hotel hallways to identify eerie anomalies. The objective is to descend floors by correctly detecting changes in the environment, one mistake sends the player back to Floor 8. Features immersive visuals, voice command controls, dynamic anomalies, and post-processing effects.",
      technologies: [
        "Unity",
        "C#",
        "Voice Recognition",
        "Shader Graph",
        "Post-Processing",
        "3D Modeling",
      ],
      links: [
        {
          type: "Video",
          href: "https://youtu.be/2Pw9BfwMR3U",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Download",
          href: "https://drive.google.com/drive/folders/1EDKQX3Yxsglili2aeWm-mabG2mCmlv0e?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/jayanth920/Floor8",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/user-attachments/assets/e5c98216-900d-4f93-bb3e-23c9f19ad66c", // You can upload a thumbnail or screenshot and add the image URL here
      video: "",
    },
    {
      title: "Boss Shell",
      href: "",
      dates: "Dec 2024",
      active: true,
      description:
        "A next-level Python-based terminal experience! 🚀. This project is currently in its Beta phase and completely open-source. The initial beta version was developed in just a day! Stay tuned for more updates as BossShell evolves.",
      technologies: [
        "Python & Core Modules",

      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/jayanth920/boss-shell",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/boss-shell.png",
      video:
        "",
    },
    {
      title: "LinkedIn Post Generator",
      href: "https://github.com/jayanth920/genai-linkedin-postgen",
      dates: "April 2025",
      active: true,
      description: "An AI-powered LinkedIn post generator built using LLaMA 3, LangChain, and Streamlit. It personalizes posts based on tone, length, language, and hashtags using few-shot learning. Includes a RandomForest-based ML model to predict engagement (likes/comments) based on post features like sentiment and length.",
      technologies: [
        "Streamlit",
        "LangChain (Groq, LLaMA 3)",
        "Python",
        "scikit-learn",
        "TextBlob",
        "joblib",
        "pandas"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jayanth920/genai-linkedin-postgen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/jayanth920/genai-linkedin-postgen/raw/main/screenshots/post.png", // Replace with a screenshot or keep blank
      video: "",
    },
    {
      title: "LeetCode Mate: Tag Hider Extension",
      href: "https://github.com/jayanth920/leetcode-mate", // Replace with your actual GitHub repo
      dates: "Oct 2024",
      active: true,
      description: "A minimal Chrome extension that hides difficulty and topic tags across LeetCode pages (Profile, Problem List, Question Page) to help users solve problems without bias. It injects lightweight CSS rules for a distraction-free experience.",
      technologies: [
        "JavaScript",
        "Chrome Extensions API",
        "CSS"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jayanth920/leetcode-mate", // Replace with repo link
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/leetcodeext.png",
      video: "", // Optional Loom/YT showing it in action
    },
    {
      title: "HTTP Server",
      href: "",
      dates: "July 2024",
      active: true,
      description: "A lightweight, low-level HTTP server built using Node.js core modules (net, fs, zlib). This project demonstrates how HTTP communication works under the hood, without relying on frameworks like Express or Fastify",
      technologies: [
        "Jaascript & Core Modules",

      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/jayanth920/http-server-js",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1ph7yc1i1vqqgwpxegw5.png",
      video:
        "",
    },
    {
      title: "LiveDocs: Personal Live Text Editor",
      href: "https://livedocs-main.vercel.app/",
      dates: "Dec 2024",
      active: true,
      description: "LiveDocs is a real-time live text editor built with React, Firebase Firestore, and React Quill. It enables multiple users to simultaneously edit a document with live synchronization and Google Docs–style UX. Built with optimized syncing for low database usage.",
      technologies: [
        "React",
        "Firebase Firestore",
        "React Quill",
        "JavaScript",
        "CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://livedocs-main.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/jayanth920/live-docs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/livedocs.png",
      video: "",
    }
  ],
  hackathons: [
    {
  title: "VelociCode",
  description:
    "VelociCode is a month-long hackathon where developers and designers build creative, dino-themed games or tools using any tech stack. The theme for 2025 was 'EGG' and I made a language called egglang with .egg filenames and a  vs code extension as well.",
  location: "TechPort San Antonio, TX",
  dates: "June 2025",
  image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/364/771/datas/full_width.png", 
  links: [
    {
      type: "Website",
      href: "https://hacksa-velocicode-2025.devpost.com/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "GitHub",
      href: "https://github.com/jayanth920/egglang",
      icon: <Icons.github className="size-3" />,
    },
  ],
},
    {
  title: "Google Cloud AI in Action",
  description:
    "A global Google Cloud hackathon with MongoDB and GitLab to build AI-powered apps using public datasets, cloud computing, and DevSecOps workflows. I made an app called ungithub to study repositories.",
  location: "Online",
  dates: "June 2025",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroV7JQvlAS1wSXW3bIKdPG_lZBHkl3fZC9w&s", 
  links: [
    {
      type: "Devpost",
      href: "https://ai-in-action.devpost.com/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "GitHub",
      href: "https://github.com/jayanth920/ungithub",
      icon: <Icons.github className="size-3" />,
    },
  ],
}

  ],
} as const;
