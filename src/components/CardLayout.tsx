import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CardLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <CardContainerStyle
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="CardImage">
        <img src="/download.jpg" alt="project" />
      </div>
      <div className="CardContent">
        <div className="CardText">
          <h2>Project Name</h2>
          <p>Game</p>
        </div>

        <div className="Year">2024</div>
      </div>
    </CardContainerStyle>
  );
};

export default CardLayout;

const CardContainerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  border: 1px solid #ccc;
  height: 500px;
  border-radius: 20px;

  overflow: hidden;
  .CardImage {
    width: 100%;
    height: 80%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .CardContent {
    width: 100%;
    height: 20%;
    background-color: #fff6f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .CardText {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: start;
    }
  }
`;
