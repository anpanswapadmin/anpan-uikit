import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
     
      <path
        fillRule="evenodd"
        d="M9.4,11.1l4.9,8.2l7-11.7l2.8,4.7V0h-7.3l2.8,4.7l-5.2,8.8L9.4,5.3L0,21.1L1.7,24L9.4,11.1z"
      />
    </Svg>
  );
};

export default Icon;
