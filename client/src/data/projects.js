import birrbot from "../images/birrbot.png";
import portfolio from "../images/portfolio_website.png";
import tob from "../images/ToB.png";
import connect from "../images/connect-4.png";
import chatroom from "../images/OS_chatroom.png";

const portfolios = [
  {
    id: 3,
    category: "React JS",
    image: portfolio,
    link1: "https://github.com/AndrewLou2/personal-portfolio",
    link2: "https://andrewlou.herokuapp.com/",
    title: "Personal Portfolio Website",
    text: "A full-stack, fully-responsive personal portfolio website show-casing myself",
  },
  {
    id: 2,
    category: "Python",
    image: birrbot,
    link1: "https://github.com/AndrewLou2/BirrBot-Discord",
    link2: "https://www.google.com",
    title: "Discord Server Bot",
    text: "A fun interactive discord bot that provides 140+ users with a unique experience",
  },
  {
    id: 1,
    category: "Unity",
    image: tob,
    link1: "https://github.com/JiyongSong1/SE2250_jsong386",
    link2: "https://www.google.com",
    title: "Thunder or Bust Game",
    text: "Managed a team of five people with the development of a 2-D RPG game",
  },
  {
    id: 4,
    category: "React JS",
    image: connect,
    link1: "https://github.com/ShaimaaAliECE/lab2-AndrewLou2",
    link2: "https://www.google.com",
    title: "Connect 4/16 Web Game",
    text: "Front-end connect-four game implementing hooks",
  },
  {
    id: 5,
    category: "C++",
    image: chatroom,
    link1: "https://github.com/AndrewLou2/OS-chatroom-app",
    link2: "https://www.google.com",
    title: "OS Chat Room App",
    text: "Multi-user multi-transaction application that implements concepts of thread synchronization (semaphores), multithreading and socket programming",
  },
];

export default portfolios;
