import {HTMLInputTypeAttribute} from "react"
export 
interface InputProps {
    id: string | undefined
    name: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
    label: string
}