import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBodySocial = styled.div<CardBodyProps>`
  ${space}
`;

CardBodySocial.defaultProps = {
  p: "2px",
};

export default CardBodySocial;
