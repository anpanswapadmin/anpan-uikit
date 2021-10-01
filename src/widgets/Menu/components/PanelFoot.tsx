import React from "react";
import styled from "styled-components";
import PanelFooterD from "./PanelFooterD";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
flex: none;
`;

const PanelFoot: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelFooterD {...props} />
    </StyledPanel>
  );
};

export default PanelFoot;
