"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LinkButtonAlternate.module.css";

export function LinkButtonAlternate({
  as: _Component = _Builtin.Link,
  text = "Button",

  link = {
    href: "#",
  },

  visibility = true,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "btn", "is-link", "is-alternate")}
      button={true}
      block=""
      options={link}
    >
      {text}
    </_Component>
  ) : null;
}
