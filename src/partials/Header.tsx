import { motion } from "motion/react";

import styled from "styled-components";

const Header = () => {
  return (
    <NavContainerStyle
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h1>Logo</h1>
      <h1>Logo</h1>
      <h1>Logo</h1>
    </NavContainerStyle>
  );
};

export default Header;

const NavContainerStyle = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  font-weight: 100;
  position: sticky;
  top: 0;
  z-index: -2;
  background-color: pink;
  color: black;
`;
