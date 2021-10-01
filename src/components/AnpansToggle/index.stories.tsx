import React, { useState } from "react";
import AnpansToggle from "./AnpansToggle";

export default {
  title: "Components/AnpansToggle",
  component: AnpansToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <AnpansToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <AnpansToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
