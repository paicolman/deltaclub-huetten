import { motion } from "framer-motion";

export default function WindRose({ direction = 30, speed = 50 }) {
  const size = 360;
  const radius = 150;
  const center = 180;
  const pointerLength = speed;
  const backPointerLength = 50;
  const angle = (direction % 360) * (Math.PI / 180);
  const arrowAngle = (5 % 360) * (Math.PI / 180);
  const arrowLength = 15;

  const pointerX = center + pointerLength * Math.cos(angle - Math.PI / 2);
  const pointerY = center + pointerLength * Math.sin(angle - Math.PI / 2);
  const backPointerX = center - backPointerLength * Math.cos(angle - Math.PI / 2);
  const backPointerY = center - backPointerLength * Math.sin(angle - Math.PI / 2);
  const arrow1X = center + (pointerLength - arrowLength) * Math.cos((angle + arrowAngle) - Math.PI / 2);
  const arrow1Y = center + (pointerLength - arrowLength) * Math.sin((angle + arrowAngle) - Math.PI / 2);
  const arrow2X = center + (pointerLength - arrowLength) * Math.cos((angle - arrowAngle) - Math.PI / 2);
  const arrow2Y = center + (pointerLength - arrowLength) * Math.sin((angle - arrowAngle) - Math.PI / 2);

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
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points="180,40 210,180 180,320 150,180"
        stroke="black"
        strokeWidth="1"
        fill="none"
      />
      <polygon
        points="40,180 180,210 320,180 180,150"
        stroke="black"
        strokeWidth="1"
        fill="none"
      />
      <polygon
        points="90,270 180,210 270,270 210,180 270,90 180,150 90,90 150,180"
        stroke="black"
        strokeWidth="1"
        strokeDasharray="4,4"
        fill="none"
      />
      {directions.map(({ label, angle }) => {
        const rad = (angle - 90) * (Math.PI / 180);
        const textX = center + (radius + 25) * Math.cos(rad);
        const textY = center + (radius + 25) * Math.sin(rad);
        return (
          <text
            key={label}
            x={textX}
            y={textY}
            fontSize="16"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
          >
            {label}
          </text>
        );
      })}
      <motion.line
        x1={backPointerX}
        y1={backPointerY}
        x2={pointerX}
        y2={pointerY}
        stroke="red"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon
        points={`${pointerX},${pointerY} ${arrow1X},${arrow1Y} ${arrow2X},${arrow2Y} ${pointerX},${pointerY}`}
        stroke="red"
        strokeWidth="2"
        fill="red"
      />
      <circle r="7" cx={backPointerX} cy={backPointerY} fill="red" />
      <circle r="4" cx={center} cy={center} fill="blue" />
    </svg>
  );
}