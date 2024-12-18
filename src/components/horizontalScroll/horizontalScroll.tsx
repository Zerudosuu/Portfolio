import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "motion/react";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);

  return (
    <Carousel ref={targetRef}>
      <div className="contentContainer">
        <motion.div
          style={{ x }}
          transition={{ type: "spring" }}
          className="images"
        >
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          ></ImageItem>
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          ></ImageItem>
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          ></ImageItem>
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          ></ImageItem>
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          ></ImageItem>
          <ImageItem
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          ></ImageItem>
        </motion.div>
      </div>
    </Carousel>
  );
};

export default HorizontalScroll;

const Carousel = styled.div`
  background-color: #242424;
  height: 400vh;

  .contentContainer {
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    .images {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 3vw;
      padding: 0 4rem 0 4rem;
    }
  }
`;

const ImageItem = styled(motion.div)`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 10px;
  background-color: wheat;
  border-radius: 20px;
`;
