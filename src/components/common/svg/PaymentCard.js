import React from "react";

const Card = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="200"
      viewBox="0 0 1050 600"
      {...props}
    >
      <defs></defs>
      <rect width="1050" height="600" rx="30" ry="30" />
      <image
        className="cardmap"
        x="137"
        y="65"
        width="777"
        height="470"
        xlinkHref="https://triva.s3.eu-west-2.amazonaws.com/card/world-map.jpg"
      />
      {props.type && (
        <image x="40" y="40" width="156" height="122" xlinkHref={props.type} />
      )}
      {props.month && (
        <text className="carddate" x="952" y="302">
          <tspan x="930">EXP</tspan>
          <tspan x="930" dy="30">
            {props.month || "xx"}/{props.year || "xx"}
          </tspan>
        </text>
      )}
      <text
        className="cardnum"
        transform="translate(118.848 431.069) scale(1.673)"
        x="220"
        y="50"
      >
        {props.num}
      </text>
    </svg>
  );
};

export default Card;
