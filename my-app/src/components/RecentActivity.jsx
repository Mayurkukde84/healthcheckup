import React from "react";
import { BarChart, Bar, ResponsiveContainer ,XAxis} from 'recharts';

import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
function RecentActivity() {
    const data = [
        {
          name: '9AM',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '10AM',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '11AM',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '12AM',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '1PM',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2PM',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '3PM',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: '4PM',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '5PM',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '6PM',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: '7PM',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '8PM',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '9PM',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: '9AM',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: '10AM',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: '11AM',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: '12AM',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          
      ];
  return (
  <Section>
      <div className="title-container">
      <div className="title">
        <h3 style={{color:'#8884d8'}}>Recent Activity</h3>
        
        
      </div>
    </div>
    <ResponsiveContainer width="100%" height="80%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8"  />
          <XAxis dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
  </Section>
  )
}
const Section = styled.section`
  ${applyCardStyles}
  margin:5px;
  margin-top: 15px;
  height: 20rem !important;
  color: white;
  width: 55rem;
  
  .title-container {
    display: flex;
    justify-content: space-between;

    .title {
      color: black;

      h3 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
  }
  .chart {
    height: 10rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .title {
        text-align: center;
      }
    }
  }
`;
export default RecentActivity;
