import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMicrosoftacademic } from "react-icons/si";

export const frontendlist = [
  { id: "react", label: "React", icon: <FaReact /> },
  { id: "redux", label: "Redux", icon: <TbBrandRedux /> },
  { id: "reactquery", label: "React qurey", icon: <SiReactquery /> },
  { id: "html", label: "Html", icon: <FaHtml5 /> },
  { id: "css", label: "Css", icon: <FaCss3Alt /> },
  { id: "sass", label: "Sass", icon: <FaSass /> },
];
export const backendlist = [
  { id: "django", label: "Django", icon: <SiDjango /> },
  { id: "nodejs", label: "Node js", icon: <FaNodeJs /> },
  { id: "express", label: "Express js", icon: <SiExpress /> },
  { id: "flask", label: "Flask", icon: <SiFlask /> },
  { id: "mysql", label: "Mysql", icon: <TbBrandMysql /> },
  { id: "mongoDb", label: "MongoDb", icon: <SiMongodb /> },
];
export const langlist = [
  { id: "python", label: "Python", icon: <FaPython /> },
  { id: "javascript", label: "Javascript", icon: <IoLogoJavascript /> },
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

export const project = [
  {
    id: 1,
    name: "Ecomerce Site",
    techs: ["Python", "Django", "mMsql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },
  {
    id: 2,
    name: "Portfolio Website",
    techs: ["React", "Javascript", "Html", "Css", "Sass", "Framer Motion"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },

  {
    id: 3,
    name: "Chat Application",
    techs: ["Python", "Django", "Django Chanels", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },
  {
    id: 4,
    name: "Jwt Autehntication Api",
    techs: ["Python", "Django", "Mysql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },

  {
    id: 5,
    name: "Todo Application",
    techs: ["React", "React-Router", "Context-Api", "Javascript", "Css"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },

  {
    id: 6,
    name: "Bloging Site",
    techs: ["Python", "Flask", "Mysql", "Javascript", "Html", "Css"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },

  {
    id: 7,
    name: "Flower Identification Model",
    techs: ["Python", "Keras"],
    desc: "",
    site_url: "",
    github_url: "",
    img: "",
  },
];
