import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 800px) {
    padding-bottom: 5rem;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
  span {
    color: #23d997;
    font-weight: bold;
  }
`;
