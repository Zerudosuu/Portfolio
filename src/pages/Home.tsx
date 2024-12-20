import React, { useRef } from "react";
import RootLayout from "../layout/RootLayout";
import styled from "styled-components";
import { useScroll, useTransform, motion } from "motion/react";
import Works from "./Works";

// Refactored HomeContent component
const HomeContent = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const backGroundChange = useTransform(
    scrollYProgress,
    [0, 1],
    ["#242424", "#fff"]
  );

  const backGroundChange2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["#fff", "#242424"]
  );

  return (
    <motion.section className="home" ref={container}>
      <motion.div
        className="home_nameContainer"
        style={{
          scale: scale1,
          backgroundColor: backGroundChange,
        }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h1>RONALD</h1>
        <h1>SALVADOR</h1>
      </motion.div>
    </motion.section>
  );
};

const Home = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end .1"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <RootLayout>
      <HomeStyleContainer>
        <section className="home">
          <HomeContent />
          {/* <div className="videoContainer">
            <video autoPlay muted loop style={{ borderRadius: "10px" }}>
              <source src="/public/Video/Chroma Trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </section>
        <section className="works">
          <Works />
        </section>
        <motion.section className="introduction" ref={container}>
          <motion.div
            style={{ scale: scale1, opacity: opacity }}
            className="Title"
          >
            <h1> About Me</h1>
          </motion.div>
          {/* <ParagraphHighlight
            value={
              "I specialize in crafting experiences that captivate players and push the boundaries of interactive entertainment. By combining cutting-edge technology with a deep love for storytelling, I strive to design games that not only entertain but also inspire. I believe games have the power to connect, challenge, and transform—and I’m dedicated to unlocking that potential through every project I undertake."
            }
          /> */}
        </motion.section>

        <section className="Introduction2">
          <h2> More about me</h2>
        </section>

        <section className=""></section>
      </HomeStyleContainer>
    </RootLayout>
  );
};

export default Home;

const HomeStyleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto; /* Parent height for scrolling */
  width: 100%;
  background-color: #242424;
  text-align: center;

  .home {
    display: flex;
    flex-direction: column; /* Added for vertical alignment */
    height: 200vh; /* Extended height for scrollable space */
    color: white;
    position: relative;
    overflow: hidden;

    .home_nameContainer {
      height: 90vh;
      width: 100vw;
      line-height: 12rem;
      position: sticky;
      top: -10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 15rem;
      }
    }
    /* 
    .videoContainer {
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 40vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5rem;

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    } */
  }

  .works {
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: white;
    width: 100%;
  }

  .introduction {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: white;
    padding: 0 5rem;
    color: #242424;
    position: relative;

    h1 {
      font-size: 10rem;
    }

    .Title {
      position: sticky;
      top: 20%;
      color: #242424;
    }
  }

  .Introduction2 {
    height: 100vh;
    width: 100%;

    color: #ffffff;
    padding: 0 5rem;

    p {
      font-size: 2rem;
      width: 50%;
      text-align: center;
    }
  }
`;
