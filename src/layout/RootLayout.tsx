import React, { ReactNode } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RootContainerStyle>
      <Header />
      {children}
      <Footer />
    </RootContainerStyle>
  );
};

export default RootLayout;

const RootContainerStyle = styled(motion.div)``;
