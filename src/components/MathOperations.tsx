import React, { FC } from 'react';
import Button from './Button/Button'
import { ButtonClickHandler } from './Button/Button'

type Props = {
  onClickOperations: ButtonClickHandler,
  onClickEqual: ButtonClickHandler
}

const MathOperations: FC<Props> = ({ onClickOperations, onClickEqual }) => (
  <section className="math-operations">
      <Button text="-" clickHandler={onClickOperations} type={''} />
      <Button text="+" clickHandler={onClickOperations} type={''} />
      <Button text="*" clickHandler={onClickOperations} type={''} />
      <Button text="/" clickHandler={onClickOperations} type={''} />
      <Button text="=" clickHandler={onClickEqual} type={''} />
  </section>
)

export default MathOperations;
