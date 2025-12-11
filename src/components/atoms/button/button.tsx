import type { IButton } from "./button.types";
import "./button.css"
import type React from "react";
import '../../../core/styles/buttonSize.css'
import '../../../core/styles/color.css'
import '../../../core/styles/blur.css'


export const Button = (props: IButton & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>): React.JSX.Element => {
 const { label, variant, size, backgroundColor, textColor, blurAmount, disabled, className, ...rest } = props;


  return (

    <button
     className={`btn btn-${variant} btn-${size} ${backgroundColor} ${textColor} blur-${blurAmount} ${className}`}
     disabled={disabled}
     {...rest}
    >
      {props.children ?? label}
    </button>

  )
}