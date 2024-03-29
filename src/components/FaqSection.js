import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from './useScroll';
import { reveal } from '../animation'

const FaqSection = () => {
  const [element,controls] = useScroll();
  return (
    <Faq 
    transition={{ duration: 0.5 }}
    ref={element}
    animate={controls}
    initial="hidden"
    variants={reveal}>
      <h2>
        An Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </Toggle>

        <Toggle title="What Product do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment method">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.
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
