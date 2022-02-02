import React from 'react';
import { PropTypes } from 'prop-types'
import { Button } from './index'

const Functions = ({ onContentClear, onDelete }) => {
  return (
    <section className='functions'>
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
    );
};

Functions.propType = {
    onContentClear: PropTypes.func, 
    onDelete: PropTypes.func
}

export default Functions;
