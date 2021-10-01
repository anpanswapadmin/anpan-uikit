import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
`;

CardBody.defaultProps = {
  pt: "16px",
  pb: "16px",
  pl: "24px",
  pr: "24px",
};

export default CardBody;
