"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SecondaryButton.module.css";

export function SecondaryButton({
  as: _Component = _Builtin.Link,
  variant = "Secondary Button",
  text = "Button",

  link = {
    href: "#",
  },

  visibility = true,
}) {
  const _styleVariantMap = {
    "Secondary Button": "",
    "is-small": "w-variant-a33ea806-696f-c0be-73e4-9c5ddd05bc05",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "button",
        "is-secondary",
        _activeStyleVariant
      )}
      button={true}
      block=""
      options={link}
    >
      {text}
    </_Component>
  ) : null;
}
