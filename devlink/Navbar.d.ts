import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  navbarLinksSlot?: Types.Devlink.Slot;
  buttonsSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
