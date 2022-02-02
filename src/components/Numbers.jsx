import React from 'react';
import { PropTypes } from 'prop-types'
import { Button } from './index'

const numbers = [1,2,3,4,6,7,8,9,0]
const onRenderButtons = onClickNumber => {
    return (
    numbers.map(number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} 
        />
    ))
    )
}

const Numbers = ({ onClickNumber }) => {
  return (
    <section className='numbers'>
        {
            onRenderButtons(onClickNumber)
        }
    </section>
    );
};

Numbers.propTypes = {
    onClickNumber: PropTypes.func
}

export default Numbers;
