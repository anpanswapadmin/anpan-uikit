import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Swap",
    href: "https://exchange.anpanswap.finance",
  },
  {
    label: "Liquidity",
    href: "https://exchange.anpanswap.finance/#/pool",
  },
  {
    label: "Analytics",
    href: "https://anpanswap.info",
  },
  {
    label: "Farms",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    href: "/honey",
  },
];

export const socials = [
  {
    label: "Products",
    items: [  
      {
        label: "Swap",
        href: "https://exchange.anpanswap.finance/#/swap",
      },
      {
        label: "Liquidity",
        href: "https://exchange.anpanswap.finance/#/pool",
      },
      {
        label: "Analytics",
        href: "https://anpanswap.info",
      },
      {
        label: "Farms",
        href: "/farms",
      },
      {
        label: "Stake",
        href: "/pools",
      },
      {
        label: "Prediction",
        href: "/prediction",
      },
    ],
  },
];

export const MENU_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 184;
export const SIDEBAR_WIDTH_REDUCED = 56;