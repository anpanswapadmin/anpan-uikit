import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
     
      <path
        fillRule="evenodd"
        d="M23,14.7H0.3C0.1,14.7,0,14.8,0,15v2c0,0.2,0.1,0.3,0.3,0.3H20l-4.7,6.2c-0.1,0.2,0,0.4,0.2,0.4h2.4c0.2,0,0.3-0.1,0.4-0.2l5.5-7.3C24.3,15.8,23.8,14.7,23,14.7L23,14.7z M23.7,6.7H4l4.7-6.2C8.8,0.3,8.7,0,8.5,0H6.1C6,0,5.8,0.1,5.7,0.2L0.2,7.5C-0.3,8.2,0.2,9.3,1,9.3h22.7C23.9,9.3,24,9.1,24,9V7C24,6.8,23.9,6.7,23.7,6.7z"
      />
    </Svg>
  );
};

export default Icon;
