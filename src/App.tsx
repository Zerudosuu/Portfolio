import React, { useRef } from "react";
import styled from "styled-components";
import HorizontalScroll from "./components/horizontalScroll/horizontalScroll";
import { motion } from "motion/react";

function App() {
  return (
    <Container>
      <Section>
        <h1> this is the header</h1>
      </Section>
      <HorizontalScroll />
      <Section>
        <h1> this is the footer</h1>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: -10 }}
          drag
        />
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #242424;
  color: white;
`;

const MotionButton = styled(motion.button)`
  width: 400px;
  height: 100px;
`;
