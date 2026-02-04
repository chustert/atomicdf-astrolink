import * as React from "react";
import * as Types from "./types";

declare function PrimaryButtonAlternate(props: {
  as?: React.ElementType;
  variant?: "Primary Button - Alternate" | "is-small";
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
