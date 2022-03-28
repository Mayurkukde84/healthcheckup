import React from "react";
import styled from "styled-components";
function RightMenu() {
  return (
    <Aside>
      <ul className="links">
        <li>
          <h3>25</h3>
          <h6>Years Old</h6>
        </li>
      </ul>
      <ul className="links">
        <li>
          <h3>Male</h3>
          <h6>Gender</h6>
        </li>
      </ul>
      <ul className="links">
        <li>
          <h3>176 cm</h3>
          <h6>Height</h6>
        </li>
      </ul>
      <ul className="links">
        <li>
          <h3>60 Kg</h3>
          <h6>Weight</h6>
        </li>
      </ul>
      <div className="help"></div>
    </Aside>
  );
}
const Aside = styled.aside`
  background-color: var(--dark-background-color);
  height: 90%;
  width: max-content;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .help {
    svg {
      transition: 0.5s ease-in-out;
      cursor: pointer;
      color: white;
    }
    &:hover {
      svg {
        color: var(--primary-color);
      }
    }
  }
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
    }
  }
  .links {
    box-shadow: 0 0  8px var(--primary-color);
    border-radius: 0.5rem ;
    width: 8.5rem;
    flex-direction: column;
    margin-bottom:50px;
    list-style-type: none;

    li {
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      justify-content: center;
      align-items: center;
      h3 {
        text-align: center;
        color:white;
      }
      h6 {
        text-align: center;
        color:white;
      }

      svg {
        color: white;
      }
      &:hover {
        box-shadow: 0 0 60px 8px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 60px 8px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;

export default RightMenu;
