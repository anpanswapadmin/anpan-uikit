import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#D1884F" stroke="#633001" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M51.5,93.5c21,0,47-17,47-45c0-25-17-46-48-46s-48,21.1-48,46
	s20.1,45,47,45"/>
      </svg>
    </Svg>
  );
};

export default Icon;
