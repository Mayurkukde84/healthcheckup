import React from "react";
import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {BsCalendarMonthFill} from 'react-icons/bs';
function Navbar() {
  return (
    <Nav>
      <div id="arrow">
        <BsFillArrowLeftCircleFill />
      </div>

      <div id="backlist">
        <p>Back to patient list</p>
        
      </div>
      <div className="cal">
      <BsCalendarMonthFill />
      </div>
      
      <div className="timeline">
      
      <p>Daily</p>
      <p>Weekly</p>
      <p>Monthly</p>
        
      </div>
      
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
   background-color:white;
    
  color: grey;
  .cal{
      font-size:20px;
      margin-top:5px;
      display:flex;
      color:#2E4053;
  }
  #backlist {
    margin-right:30rem;
    display: flex;
    color:#2E4053;
    font-Weight:bold;
    p{
        margin:5px
        
    }
  }
  #arrow {
    margin:5px;
    font-size: 20px;
    display:flex;
    color:#2E4053;
    font-Weight:bold;
  }
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:#2E4053;
    font-Weight:bold;
    
    p{
        margin:0  5px 0
    }
    
    
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0;
    .timeline {
      gap: 1rem;
    }
    
  }
`;
export default Navbar;
