import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim, lineAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>
              Give us a <span>Call</span>
            </h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>
              Send an <span>Email</span>
            </h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>
              Follow us on <span>Social Media</span>
            </h3>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 900vh;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  color: white;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    margin: 1.5rem;
    cursor: pointer;
    span {
      font-size: 1.5rem;
      color: #23d997;
    }
  }
`;

export default ContactUs;
