import React from 'react'

import styled from "styled-components";
import HeartRate from './HeartRate';
import Navbar from './Navbar';
import Pulserate from './Pulserate';
import RecentActivity from './RecentActivity';

function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row">
          <HeartRate />
          <Pulserate />
        </div>
        <RecentActivity />
      </div>
    
   
    </Section>
  )
}
const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: #D0D3D4;

  .grid {
    padding: 1rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0.2rem;

    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 0.2rem;
      margin-top:20px;
    }
    
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: max-content;
    .grid {
      grid-template-columns: 1fr;
      padding: 1rem;
      height: max-content;
      .row,
      .row2 {
        /* height: max-content; */
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Dashboard