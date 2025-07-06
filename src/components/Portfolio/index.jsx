import { useRef } from "react";
import "./index.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { title } from "framer-motion/client";

const items = [
  {
    id: 1,
    title: "Youtube Clone",
    img: "/youtubeclone.png",
    pageLink: "https://youtubeclone-tharun.netlify.app/",
    desc: "This is a YouTube Clone Web Application built using React, Material UI, and RapidAPI's YouTube Data API. The project demonstrates modern frontend development practices including component-based architecture, responsive design, dynamic routing, and API integration using Axios. Technologies used: HTML, CSS, JavaScript, React.js, Material UI, Axios",
  },
  {
    id: 2,
    title: "Nxt Trendz",
    img: "/NxtTrendz.png",
    pageLink: "https://tharun939.ccbp.tech/",
    desc: `Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where 
          users can login and can see list of products with search, filters, sort by, etc..
          Technologies React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization and Authentication are used, credentials to login are username is "rahul" & password "rahul@2021"`,
  },
  {
    id: 3,
    title: "Nxt Watch",
    img: "/nxtwatch.png",
    pageLink: "https://tharunxtwatch1.ccbp.tech/",
    desc: `Implemented Nxt Watch, a YouTube clone using React with features like login, video browsing (Trending, Gaming, Saved), search, and theme toggling (Light/Dark).
            Built pages like Login, Home, Trending, etc., using components, state, props, and event handling.
            Handled authentication via username/password with POST API calls and persisted login using JWT tokens in local storage.
            Used JWT tokens in headers to authorize further API requests, credentials to login are username is "rahul" & password "rahul@2021".
          `,
  },
  {
    id: 4,
    title: "HooBank",
    img: "/hoobank.png",
    pageLink: "https://683aec1d51d0801346d68b40--transcendent-snickerdoodle-5ea05e.netlify.app/",
    desc: "HooBank is a sleek, modern banking website built with React.js, Tailwind CSS, and Vite, focusing on responsive design and clean code architecture. It features a fully modular component structure, efficient data organization, and fast performance thanks to Vite. The project delivers a visually engaging financial interface while ensuring scalability and maintainability."
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.pageLink} target="_blank">
            <button>View project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;