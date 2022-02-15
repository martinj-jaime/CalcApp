import React, { FC } from 'react';
import Button from './Button/Button'
import { ButtonClickHandler } from './Button/Button'

type Props = {
    onContentClear: ButtonClickHandler,
    onDelete: ButtonClickHandler
}

const Functions: FC<Props> = ({ onContentClear, onDelete }) => {
  return (
    <section className='functions'>
        <Button type="button-long-text" text="clear" clickHandler={onContentClear}  />
        <Button text="&larr;" clickHandler={onDelete} type={''} />
    </section>
    );
};

export default Functions;
