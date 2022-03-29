import React from "react";
import styled from "styled-components";
import {BsFillPencilFill} from "react-icons/bs";
function Allergies() {
  return (
    <Side>
      <span>Allergies</span>
      <hr />
      <span style={{color:'grey'}}>Nuts</span>
      <hr />
      <span style={{color:'grey'}}>Pencilin</span>
      <hr />
      <span>Conditions</span>
      <hr />
      <span style={{color:'grey'}}>Glaucoma</span>
      <hr />
      <div className="button">
      <button>Add</button>
      <span>Edit <BsFillPencilFill /></span>
      </div>
      
    </Side>
  );
}
const Side = styled.section`
  color: black;
  border: 1px solid none;
  padding: 10px;
  border-radius:10px;
  box-shadow: 5px;
  margin-top: 14px;
  height: auto;
  background: white;
  align-items: center;
  .button{
      text-align:center;
    button{
      margin:10px;
      text-align:center;
      color:white;
      padding:5px;
      width:80px;
      height:35px;
      border-radius:5px;
      background:#0275d8;

  }

  }
  
  hr{
      margin:1px;
      margin-bottom:25px;
  }
`;
export default Allergies;
