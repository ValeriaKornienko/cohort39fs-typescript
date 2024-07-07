import {MouseEvent} from "react";

export interface ButtonProps {
    imgSrc?: string | undefined
    type?: "button" | "submit" | "reset" | undefined
    name: string 
    onClick: (event: MouseEvent) => void
  }