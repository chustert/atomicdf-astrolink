"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
// import { SecondaryButton } from "./SecondaryButton";
// import { PrimaryButton } from "./PrimaryButton";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759279936579},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbed5a49-fda2-5b26-8a44-07b97f798956","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759279936579}},"actionLists":{"a-7":{"id":"a-7","title":"Navbar [Open]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"none"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"flex"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":1,"unit":""}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759279994795},"a-8":{"id":"a-8","title":"Navbar [Close]","actionItemGroups":[{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":0,"unit":""}},{"id":"a-8-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar_menu","selectorGuids":["97123334-7842-f1d6-3ba3-c5ff9971b363"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759279994795}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "navbar_container",
          "container-large",
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
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Link One"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Link One"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Link One"}
              </_Builtin.Link>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "navbar1_menu-dropdown")}
                tag="div"
                delay="200"
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navbar1_dropdown-toggle")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Link Four"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "dropdown-chevron")}
                    value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "navbar1_dropdown-list")}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(_styles, "navbar1_dropdown-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link Five"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(_styles, "navbar1_dropdown-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link Six"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(_styles, "navbar1_dropdown-link")}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link Seven"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_buttons")}
              id={_utils.cx(
                _styles,
                "w-node-fbed5a49-fda2-5b26-8a44-07b97f798953-7f79893a"
              )}
              tag="div"
            >
              {/* <SecondaryButton variant="Secondary Button" /> */}
              {/* <PrimaryButton variant="Primary Button" /> */}
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
