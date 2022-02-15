import React, { FC } from 'react';
import './Button.css'

export type ButtonClickHandler = (text?:string) => void

type Prop = {
    text?: string, // ? = acepta ser undefined
    type: string,
    clickHandler: ButtonClickHandler
}

const Button: FC<Prop> = ({ text, type, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)} >
        <span> {text} </span>
    </button>
);

export default Button;
