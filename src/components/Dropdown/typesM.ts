export type Position = "top" | "top-right" | "bottom";

export interface PositionProps {
  position?: Position;
}

export interface DropdownPropsM extends PositionProps {
  target: React.ReactElement;
}
