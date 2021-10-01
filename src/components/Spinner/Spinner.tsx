import React from "react";
import styled, { keyframes } from "styled-components";

import AnpansIcon from "./AnpansIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const Container = styled.div`
  position: fixed;
`;

const RotatingAnpansIcon = styled(AnpansIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear;
  
`;



const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingAnpansIcon width={`${size * 0.5}px`} />
  
    </Container>
  );
};

export default Spinner;
