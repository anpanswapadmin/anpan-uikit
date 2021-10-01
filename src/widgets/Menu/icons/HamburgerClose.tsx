import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M5,12h11c0.5,0,1-0.5,1-1s-0.5-1-1-1H5c-0.6,0-1,0.5-1,1S4.4,12,5,12z M8,7h8c0.5,0,1-0.4,1-1s-0.5-1-1-1H8C7.4,5,7,5.4,7,6S7.4,7,8,7z M4,1c0,0.6,0.4,1,1,1h11c0.5,0,1-0.4,1-1s-0.5-1-1-1H5C4.4,0,4,0.4,4,1z M0.3,3.1L3.2,6L0.3,8.9c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l3.6-3.6c0.4-0.4,0.4-1,0-1.4L1.7,1.7c-0.4-0.4-1-0.4-1.4,0C-0.1,2.1-0.1,2.7,0.3,3.1z" />
    </Svg>
  );
};

export default Icon;
