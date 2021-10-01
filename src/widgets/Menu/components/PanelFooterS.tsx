import React from "react";
import styled from "styled-components";

import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";

import SocialLinks from "./SocialLinks";


interface Props extends PanelProps, PushedProps {}


const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,

}) => {
  return (
    
      <SocialEntry>
        <SocialLinks />
      </SocialEntry>
    
  );
};

export default PanelFooter;
