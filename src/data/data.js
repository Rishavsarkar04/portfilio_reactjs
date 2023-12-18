import { SiMicrosoftacademic } from "react-icons/si";
import { Icon } from "@iconify/react";

export const tabs = [
  { id: "home", label: "Home", key: 1 },
  { id: "about", label: "About", key: 2 },
  { id: "experience", label: "Experience", key: 3 },
  { id: "project", label: "Project", key: 4 },
  { id: "contact", label: "Contact", key: 5 },
];
export const frontendlist = [
  { id: "react", label: "React", icon: <Icon icon="skill-icons:react-dark" /> },
  { id: "redux", label: "Redux", icon: <Icon icon="skill-icons:redux" /> },
  {
    id: "reactquery",
    label: "React qurey",
    icon: <Icon icon="logos:react-query-icon" />,
  },
  {
    id: "html",
    label: "Html",
    icon: <Icon icon="vscode-icons:file-type-html" />,
  },
  { id: "css", label: "Css", icon: <Icon icon="vscode-icons:file-type-css" /> },
  { id: "sass", label: "Sass", icon: <Icon icon="skill-icons:sass" /> },
];
export const backendlist = [
  { id: "django", label: "Django", icon: <Icon icon="skill-icons:django" /> },
  { id: "nodejs", label: "Node js", icon: <Icon icon="devicon:nodejs" /> },
  {
    id: "express",
    label: "Express js",
    icon: <Icon icon="skill-icons:expressjs-dark" />,
  },
  { id: "flask", label: "Flask", icon: <Icon icon="devicon:flask" /> },
  { id: "mysql", label: "Mysql", icon: <Icon icon="devicon:mysql" /> },
  {
    id: "mongoDb",
    label: "MongoDb",
    icon: <Icon icon="skill-icons:mongodb" />,
  },
];
export const langlist = [
  { id: "python", label: "Python", icon: <Icon icon="logos:python" /> },
  {
    id: "javascript",
    label: "Javascript",
    icon: <Icon icon="vscode-icons:file-type-js-official" />,
  },
];

export const dict = {
  education: [
    {
      id: 12,
      year: "2015-2017",
      location: "Kolkata, West Bengal",
      level: "Higher Secondary",
      institute: "Laban Hrad Vidyapith",
      description:
        "I completed my class 12 high school education at Laban Hrad Vidyapith, Kolkata. where I studied Math, Computer Application, Economics.",
      icon: <SiMicrosoftacademic />,
    },
    {
      id: 15,
      year: "2017-2020",
      location: "Kolkata, West Bengal",
      level: "Bachelor of Science (B.sc)",
      institute: "Gurudas college",
      description:
        "I have done my graduation degree in Economics(honours) from Gurudas College Which is under Calcutta University. where I studied Economics, Math, Statistics .",
      icon: <SiMicrosoftacademic />,
    },
    {
      id: 17,
      year: "2021-2023",
      location: "Kolkata, West Bengal",
      level: "Master Of Computer Application (MCA)",
      description:
        "I have completed my master degree in computer application from Guru Nanak Institute Of Technology,kolkata.",
      institute: "Guru Nanak Institute Of Technology",
      icon: <SiMicrosoftacademic />,
    },
  ],
  job: [],
};

export const projects = [
  {
    id: 1,
    name: "Ecomerce Site",
    techs: ["Python", "Django", "Msql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "https://github.com/Rishavsarkar04/e-commerce_django",
    img: "/img/img1.jpg",
  },
  {
    id: 2,
    name: "Portfolio Website",
    techs: ["React", "Javascript", "Html", "Css", "Sass", "Framer Motion"],
    desc: "",
    site_url: "https://rishavsarkar.vercel.app/",
    github_url: "https://github.com/Rishavsarkar04/portfilio_reactjs",
    img: "/img/img1.jpg",
  },

  {
    id: 3,
    name: "Chat Application",
    techs: ["Python", "Django", "Django Chanels", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url:
      "https://github.com/Rishavsarkar04/chat_application_django_channels",
    img: "/img/img1.jpg",
  },
  {
    id: 4,
    name: "Jwt Autehntication Api",
    techs: ["Python", "Django", "Mysql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url:
      "https://github.com/Rishavsarkar04/jwt_authentication_django_rest_framework",
    img: "/img/img1.jpg",
  },

  {
    id: 5,
    name: "Todo Application",
    techs: ["React", "React-Router", "Context-Api", "Javascript", "Css"],
    desc: "",
    site_url: "",
    github_url: "https://github.com/Rishavsarkar04/todo_reactjs",
    img: "/img/img1.jpg",
  },

  {
    id: 6,
    name: "Blogging Site",
    techs: ["Python", "Flask", "Mysql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "https://github.com/Rishavsarkar04/blog_flask",
    img: "/img/img1.jpg",
  },

  {
    id: 7,
    name: "Flower Identification Model",
    techs: ["Python", "Keras"],
    desc: "",
    site_url: "",
    github_url:
      "https://github.com/Rishavsarkar04/medicinal-flower-recognitation-model",
    img: "/img/img1.jpg",
  },
];
