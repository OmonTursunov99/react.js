import React, { useMemo } from "react";
import "./index.scss";

const DefaultButton = (props) => {
  const VARIANT_VALID_KEYS = ["light"];
  
  const actualize = useMemo(
    () => {
      const attr = {
        class: "default-button",
        style: "",
      };
      
      if (!!props.icon && !props.label) {
        attr.class += " default-button__only-icon";
      }
      
      if (!!props.variant) {
        if (VARIANT_VALID_KEYS.includes(props.variant)) {
          attr.class += ` default-button__${props.variant}`;
        } else {
          attr.class += " default-button__light";
        }
      } else {
        attr.class += " default-button__light";
      }
      
      return {
        attr,
        type: props.type || "button",
        icon: props.icon || undefined,
        label: props.label || undefined,
        variant: props.variant || "default-button__light",
        children: props.children,
      };
    },
    [ props ],
  )
  
  return (
    <button
      className={ actualize.attr.class }
      type={ actualize.type }
    >
      {
        actualize.icon &&
        <div className="material-symbols-outlined default-button__icon">{ actualize.icon }</div>
      }
      {
        actualize.label &&
        <div className="default-button__label">{ actualize.label }</div>
      }
    </button>
  );
};

export default DefaultButton;