import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";

function HeartRate() {
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
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <div style={{ display: "flex" }}>
            <h3 style={{ color: "#26CBC9" }}>Heart Rate</h3>
            <div className="heart"></div>
          </div>

          <h2 style={{ color: "#26CBC9" }}>85</h2>
          <h6 style={{ color: "#26CBC9" }}>bpm</h6>
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
              stroke="#26CBC9"
              strokeWidth={2}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${applyCardStyles}
  margin:5px;
  margin-top: 15px;
  height: 18rem !important;
  color: white;
  width: 30rem;

  .title-container {
    display: flex;
    justify-content: space-between;
    .heart
{
  position: relative;
  margin-left:200px;
  width: 14px;
  height: 14px;
  background:#ff0036;
  transform: rotate(45deg) translate(10px,10px);
  animation: ani 3s linear infinite;
}
.heart:before
{
  content: '';
  width: 100%;
  height: 100%;
  background: #ff0036;
  position: absolute;
  top:-50%;
  left:0;
  border-radius: 50%;
}
.heart:after
{
  content:'';
  width: 100%;
  height: 100%;
  background: #ff0036;
  position: absolute;
  bottom:0;
  right:50%;
  border-radius: 50%;
}
.center:before
{
  content: '';
  position: absolute;
  top:0;
  left:-50%;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
}
@keyframes ani{
  0%{
    transform: rotate(45deg) translate(10px,10px) scale(1);
  }
  25%{
    transform: rotate(45deg) translate(10px,10px) scale(1);
  }
  30%{
    transform: rotate(45deg) translate(10px,10px) scale(1.4);
  }
  50%{
    transform: rotate(45deg) translate(10px,10px) scale(1.2);
  }
  70%{
    transform: rotate(45deg) translate(10px,10px) scale(1.4);
  }
  90%{
    transform: rotate(45deg) translate(10px,10px) scale(1);
  }
  100%{
    transform: rotate(45deg) translate(10px,10px) scale(1);
  }
}
    
}


}

    }

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

export default HeartRate;
