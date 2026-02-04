"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PrimaryButtonAlternate.module.css";

export function PrimaryButtonAlternate({
  as: _Component = _Builtin.Link,
  variant = "Primary Button - Alternate",
  text = "Button",

  link = {
    href: "#",
  },

  visibility = true,
}) {
  const _styleVariantMap = {
    "Primary Button - Alternate": "",
    "is-small": "w-variant-69315b24-0561-d93d-fa25-fcdcfbd13c7c",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "button",
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
