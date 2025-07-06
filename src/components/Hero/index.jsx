import "./index.scss";
import {Link} from 'react-dom';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 700,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.7,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-720%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Tharun Rachakonda</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Web Developer | Python Developer 
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a 
              variants={textVariants}
              href={"#Portfolio"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              See the Latest Works
            </motion.a>
            <motion.a 
              variants={textVariants} 
              href="#Contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
        <motion.div
          className="image-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ duration: 3 }}
        >
          <div className="glow-overlay"></div>
          <img src="/hero4.png" alt="Portfolio" />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>
    </div>
  );
};

export default Hero;