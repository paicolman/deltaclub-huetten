import { motion } from "framer-motion";

export default function WindRose({ direction = 30, speed = 50 }) {
  const size = 300;
  const radius = 150;
  const center = 180;
  const windsockAngle = `${direction}deg`;
  const windSockX = '0px'
  const windSockY = '-150px'

  const directions = [
    { label: "N", angle: 0 },
    { label: "S", angle: 180 },
    { label: "E", angle: 90 },
    { label: "W", angle: 270 },
    { label: "NE", angle: 45 },
    { label: "SE", angle: 135 },
    { label: "SW", angle: 225 },
    { label: "NW", angle: 315 }
  ];

  return (
    <div className='windRoseContainer'>
      <svg width={size} height={size} viewBox={`0 0 360 360`}>
        <polygon
          points="180,40 210,180 180,320 150,180"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <polygon
          points="40,180 180,210 320,180 180,150"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <polygon
          points="90,270 180,210 270,270 210,180 270,90 180,150 90,90 150,180"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="4,4"
          fill="none"
        />
        <circle cx="180" cy="180" r="4" fill="white" />
        {directions.map(({ label, angle }) => {
          const rad = (angle - 90) * (Math.PI / 180);
          const textX = center + (radius + 20) * Math.cos(rad);
          const textY = center + (radius + 20) * Math.sin(rad);
          return (
            <text
              key={label}
              x={textX}
              y={textY}
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontWeight={'bolder'}
            >
              {label}
            </text>
          );
        })}
      </svg>
      <img src="/windsock.png" className="windsock" style={{ rotate: windsockAngle, top: windSockY, left: windSockX }} />
    </div>
  );
}