import React from "react";
import styled from "styled-components";
import PanelBodyD from "./PanelBodyD";

import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  
}

const StyledPanelD = styled.div<{ isPushed: boolean; showMenu: boolean }>`

  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 11;
  
  overflow-x: hidden;
  transform: translate3d(0, 0, 0);
  
`;

const PanelD: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanelD isPushed={isPushed} showMenu={showMenu}>
      <PanelBodyD {...props} />
      
    </StyledPanelD>
  );
};

export default PanelD;
