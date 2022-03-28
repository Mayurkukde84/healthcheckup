import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
import {MdBloodtype} from 'react-icons/md';


function Pulserate() {
    const data = [
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 7000,
        },
        {
          data: 4000,
        },
        { data: 6000 },
        {
          data: 6000,
        },
        {
          data: 15000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 7000,
        },
        {
          data: 4000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 7000,
        },
        {
          data: 4000,
        },
        { data: 6000 },
        {
          data: 6000,
        },
        {
          data: 20000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 7000,
        },
        {
          data: 4000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 6000,
        },
        {
          data: 7000,
        },
        {
          data: 4000,
        },
        { data: 6000 },
        {
          data: 6000,
        },
        {
          data: 15000,
        },
        {
          data: 6000,
        },
        
        
      
      ];
  return (
    <Section>
    <div className="title-container">
      <div className="title">
      <div style={{display:'flex'}}>
        <h3 style={{color:'#DC7633'}}>Blood Pressure</h3>
        <h3 style={{justifyContent:'flexEnd',marginTop:'3px',marginLeft:'15px',color:'#DC7633'}}><MdBloodtype /></h3>
        </div>
        
        <h2 style={{color:'#DC7633',marginTop:'5px'}}>130/180 </h2>
        <h6 style={{color:'#DC7633',marginLeft:'2px'}}>mmHg</h6>
      </div>
    </div>
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          //  width={500} height={400}
          data={data}
        >
          <defs>
            <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="10%"
                stopColor="var(--primary-color)"
                stopOpacity={0.4}
              />
              <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="data"
            stroke="#DC7633"
            strokeWidth={2}
            fill="url(#colorview)"
            animationBegin={800}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  </Section>
  )
}
const Section = styled.section`
  ${applyCardStyles}
  margin:10px;
  margin-top: 18px;
  height: 18rem !important;
  color: white;
  width: 22rem;
  
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
export default Pulserate
