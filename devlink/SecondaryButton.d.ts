import * as React from "react";
import * as Types from "./types";

declare function SecondaryButton(props: {
  as?: React.ElementType;
  variant?: "Secondary Button" | "is-small";
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
