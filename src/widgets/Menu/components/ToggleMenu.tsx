import React from "react";
import Flex from "../../../components/Box/Flex";

import MenuButton from "./MenuButton";
import { FaIndent, FaAlignJustify } from 'react-icons/fa';

interface Props {
  isPushed: boolean;
  togglePush: () => void;
}

const ToggleMenu: React.FC<Props> = ({ isPushed, togglePush }) => {

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} ml="16px" mr="14px" >
        {isPushed ? (
          <FaIndent width="24px" color="textSubtle" />
        ) : (
          <FaAlignJustify width="24px" color="textSubtle" />
        )}
      </MenuButton>
    </Flex>
  );
};

export default ToggleMenu;
