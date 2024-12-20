import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const ParagraphHighlight = ({ value }: { value: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");
  return (
    <ParagraphHighlightStyle ref={targetRef}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </ParagraphHighlightStyle>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
export default ParagraphHighlight;

const ParagraphHighlightStyle = styled(motion.p)`
  font-size: 50px;
  max-width: 1444px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  line-height: 1;

  .word {
    margin-right: 10px;
    margin-top: 12px;
    position: relative;

    .shadow {
      position: absolute;
      opacity: 0.1;
    }
  }
`;
