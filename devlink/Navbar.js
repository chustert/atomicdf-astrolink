"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759279936579},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759279936579}},"actionLists":{"a-7":{"id":"a-7","title":"Navbar [Open]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"none"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"flex"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":1,"unit":""}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759279994795},"a-8":{"id":"a-8","title":"Navbar [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":0,"unit":""}},{"id":"a-8-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759279994795}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({
  as: _Component = _Builtin.Block,
  navbarLinksSlot,
  buttonsSlot,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "navbar_container",
          "container-lg",
          "padding-global"
        )}
        id={_utils.cx(
          _styles,
          "w-node-fbed5a49-fda2-5b26-8a44-07b97f79893b-7f79893a"
        )}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar_logo-link")}
          id={_utils.cx(
            _styles,
            "w-node-fbed5a49-fda2-5b26-8a44-07b97f79893c-7f79893a"
          )}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar_logo")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/698114a58693a946ea68b675/698114a58693a946ea68b6a9_Logo-wide.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar_menu")}
          id={_utils.cx(
            _styles,
            "w-node-fbed5a49-fda2-5b26-8a44-07b97f79893e-7f79893a"
          )}
          tag="nav"
          aria-label="Main navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_menu-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-links")}
              tag="div"
            >
              {navbarLinksSlot}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_buttons")}
              id={_utils.cx(
                _styles,
                "w-node-fbed5a49-fda2-5b26-8a44-07b97f798953-7f79893a"
              )}
              tag="div"
            >
              {buttonsSlot}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "navbar_menu-button")}
          id={_utils.cx(
            _styles,
            "w-node-fbed5a49-fda2-5b26-8a44-07b97f798956-7f79893a"
          )}
          data-w-id="fbed5a49-fda2-5b26-8a44-07b97f798956"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-top")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-middle")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-bottom")}
            tag="div"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
