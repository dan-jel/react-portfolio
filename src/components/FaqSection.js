import React from "react";

import styled from "styled-components";
import { About } from "../styles";
import { fade } from "../animation";

import Toggle from "./Toggle";
import { useScroll } from "./useScroll";

import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} ref={element} animate={controls} inital="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              ex!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you sell??">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              ex!
            </p>
          </div>
        </Toggle>
        <Toggle title="How can I return my purchase?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              ex!
            </p>
          </div>
        </Toggle>
        <Toggle title="How long is shipping?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              ex!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
    font-weight: bold;
    color: #23d997;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
