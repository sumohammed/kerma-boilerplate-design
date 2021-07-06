import React from "react";
import Svg from "./Svg";

const Camera = props => (
  <Svg {...props}>
    <g transform="translate(2 3)">
      <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
      <circle cx="10" cy="10" r="4" />
    </g>
  </Svg>
);
export default Camera;
