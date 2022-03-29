import React from "react";
import styled from "styled-components";

function RightBarSubMenu() {
  return (
    <Submenu>
      <div className="sub-menu">
        <ul>
          <li>26</li>
          <li style={{color:'grey'}}>Years Old</li>
        </ul>
        <ul>
          <li>Male</li>
          <li style={{color:'grey'}}>Gender</li>
        </ul>
      </div>
      <div className="sub-menu">
        <ul>
          <li>170</li>
          <li style={{color:'grey'}}>Height</li>
        </ul>
        <ul>
          <li>62</li>
          <li style={{color:'grey'}}>Weight</li>
        </ul>
      </div>
    </Submenu>
  );
}

const Submenu = styled.section`
  color: black;
  border: 1px solid none;
   border-radius:5px;
    margin-top:10px;
  height: auto;
  background: white;
  align-items: center;
  
  
  .sub-menu {
    display: flex;
    

    ul {
        padding:5px;
       
       margin:1px;
        box-shadow: 0 0  0.5px;
        
        width: 6.5rem;
      li{
          list-style:none;
          text-align:center;
         
          
      }
    }
  }
`;

export default RightBarSubMenu;
