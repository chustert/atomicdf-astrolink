"use client";

console.warn(
  "⚠️ Avoid importing components from 'index.js' for better performance. This practice is deprecated and may be removed in the future."
);

export * as _Builtin from "./_Builtin";
export * from "./devlinkContext";
export * from "./interactions";
export * from "./utils";
export * from "./devlink";
export * from "./DevLinkProvider";
export * from "./GlobalStyles";
export * from "./LinkButton";
export * from "./LinkButtonAlternate";
export * from "./Navbar";
export * from "./PrimaryButton";
export * from "./PrimaryButtonAlternate";
export * from "./SecondaryButton";
export * from "./SecondaryButtonAlternate";
