import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import CardLayout from "../components/CardLayout";
import projects from "../Data/projects";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <WorksContainerStyle ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="featuredName"
      >
        <h1>
          Featured <br />
          Works
        </h1>
        <p>
          My creative spirit comes alive in the digital realm. With nimble
          fingers flying across the keyboard, I craft clear experiences out of
          nothing but ones and zeroes.
        </p>
      </motion.div>

      <div className="worksContainer">
        <CardLayout />
        <CardLayout />
        <CardLayout />
        <CardLayout />
      </div>
    </WorksContainerStyle>
  );
};

export default Works;

const WorksContainerStyle = styled(motion.div)`
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;

  .featuredName {
    display: flex;
    justify-content: space-between;
    height: 10%;
    gap: 2rem;
    align-items: center;
    padding: 0 2rem;

    h1 {
      width: 50%;
      font-size: 8rem;
      display: flex;
      text-align: start;
      line-height: 0.9;
      letter-spacing: 1rem;
    }

    p {
      width: 50%;
      display: flex;
      text-align: end;
      font-size: 1.5rem;
    }
  }

  .worksContainer {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
    gap: 4rem;
    padding: 0 2rem;
  }
`;
