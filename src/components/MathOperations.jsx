import React from 'react';
import { PropTypes } from 'prop-types'
import { Button } from './index'

const MathOperations = ({ onClickOperations, onClickEqual }) => (
  <section className="math-operations">
      <Button text="-" clickHandler={onClickOperations} />
      <Button text="+" clickHandler={onClickOperations} />
      <Button text="*" clickHandler={onClickOperations} />
      <Button text="/" clickHandler={onClickOperations} />
      <Button text="=" clickHandler={onClickEqual} />
  </section>
)

MathOperations.propType = {
    onClickOperations: PropTypes.func.isRequired, 
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations;
