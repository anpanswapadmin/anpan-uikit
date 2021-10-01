import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { PanelProps, PushedProps } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSelectorM from "./LangSelectorM";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
flex: none;
`;

const SettingsEntry = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SettingsEntry>
        <LangSelectorM currentLang={currentLang} langs={langs} setLang={setLang} />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
