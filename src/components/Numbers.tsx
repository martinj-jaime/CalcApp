import React, { FC } from 'react';
import Button from './Button/Button'
import { ButtonClickHandler } from './Button/Button';

type Props = {
    onClickNumber: ButtonClickHandler
}

const numbers = [7,8,9,4,5,6,1,2,3,0]
const onRenderButtons = (onClickNumber: ButtonClickHandler) => {
    return (
    numbers.map((number:number) => (
        <Button 
            key={number}
            text={number.toString()}
            clickHandler={onClickNumber} 
            type={''} 
        />
    ))
    )
}

const Numbers: FC<Props> = ({ onClickNumber }) => {
  return (
    <section className='numbers'>
        {
            onRenderButtons(onClickNumber)
        }
    </section>
    );
};

export default Numbers;
