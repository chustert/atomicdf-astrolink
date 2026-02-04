"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PrimaryButton.module.css";

export function PrimaryButton({
  as: _Component = _Builtin.Link,
  variant = "Primary Button",
  text = "Button",

  link = {
    href: "#",
  },

  visibility = true,
}) {
  const _styleVariantMap = {
    "Primary Button": "",
    "is-small": "w-variant-726e05c1-3c81-2281-22ac-c83412a414aa",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={true}
      block=""
      options={link}
    >
      {text}
    </_Component>
  ) : null;
}
