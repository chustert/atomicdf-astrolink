"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SecondaryButtonAlternate.module.css";

export function SecondaryButtonAlternate({
  as: _Component = _Builtin.Link,
  variant = "Secondary Button - Alternate",
  text = "Button",

  link = {
    href: "#",
  },

  visibility = true,
}) {
  const _styleVariantMap = {
    "Secondary Button - Alternate": "",
    "is-small": "w-variant-7a1ecf71-8740-6df7-b33e-cfb5f29b2f2e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "button",
        "is-secondary",
        "is-alternate",
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
