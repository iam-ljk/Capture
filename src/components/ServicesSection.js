import React from "react";
//Import icons
import clock from "../img/clock.svg";
import disphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
//Styles
import { About, Description, Image } from "../styles";
import { reveal } from '../animation';
import { useScroll } from './useScroll'

const ServicesSection = () => {
  const [element,controls] = useScroll();
  return (
    <Services variants={reveal} ref={element} animate={controls} initial="hidden">
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock is here" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Clock is here" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={disphragm} alt="Clock is here" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money is here" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom:5rem;
  }
  p {
    width:70%;
    padding:2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display:flex;
  flex-wrap:wrap;
`;
const Card = styled.div`
  flex-basis:15rem;
  .icon {
    display:flex;
    align-items:center;
    h3 { 
      margin-left: 1rem;
      background:white;
      color:black;
      padding:1rem;
    }
  }
`;
export default ServicesSection;
