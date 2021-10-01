import React from "react";
import { AnpansStack, AnpansInput, AnpansLabel } from "./StyledAnpansToggle";
import { AnpansToggleProps, scales } from "./types";

const AnpansToggle: React.FC<AnpansToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <AnpansStack scale={scale}>
    <AnpansInput id={props.id || "anpans-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <AnpansLabel scale={scale} checked={checked} htmlFor={props.id || "anpans-toggle"}>
      <div className="anpanss">
        <div className="anpans" />
        <div className="anpans" />
        <div className="anpans" />
        <div className="butter" />
      </div>
    </AnpansLabel>
  </AnpansStack>
);

AnpansToggle.defaultProps = {
  scale: scales.MD,
};

export default AnpansToggle;
