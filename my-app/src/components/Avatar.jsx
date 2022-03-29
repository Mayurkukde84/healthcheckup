import React from "react";
import styled from "styled-components";
import avatar from "../assets/profile.png";
import {FaBed} from 'react-icons/fa'
function Avatar() {
  return (

    
    <Section>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span>Vaibhav Rangari</span>
        
      </div>
      <div className="sub-title">
        <span><FaBed /> 2nd F,Room 7,Bed 4</span>
      </div>
      
    </Section>
    
     
  );
}

const Section = styled.section`
  color: black;
  border: 1px solid none;
  padding: 10px;
  box-shadow: 5px;
  border-radius:10px;
  height:30%;
  background:white;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  .sub-title{
    text-align:center;
    color:grey;
    size:2px;
    font-size:10px;
    margin:3px;
  }
  .image {
    img {
      height: 7rem;
      border-radius: 8rem;
      display: block;
      margin: 0 auto;
      
    }
  }
  .name {
    margin-top:10px;
    align-content: center;
    gap: 0.5rem;
    text-align:center;
    svg {
      color: var(--primary-color);
      font-size: 1.3rem;
    }
  }
`;

export default Avatar;