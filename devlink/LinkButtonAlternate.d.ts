import * as React from "react";
import * as Types from "./types";

declare function LinkButtonAlternate(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
