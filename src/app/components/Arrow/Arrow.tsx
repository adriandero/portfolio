import * as React from "react";
import { getArrow } from "curved-arrows";

export function Arrow() {
  const p1 = { x: 100, y: 100 };
  const p2 = { x: 300, y: 200 };
  const arrowHeadSize = 9;
  const color = "red";
  const [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae] = getArrow(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    {
      padEnd: arrowHeadSize,
    }
  );

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`}
        stroke={color}
        strokeWidth={arrowHeadSize / 2}
        fill="none"
      />
      <polygon
        points={`0,${-arrowHeadSize} ${
          arrowHeadSize * 2
        },0, 0,${arrowHeadSize}`}
        transform={`translate(${ex}, ${ey}) rotate(${ae})`}
        fill={color}
      />
    </svg>
  );
}
