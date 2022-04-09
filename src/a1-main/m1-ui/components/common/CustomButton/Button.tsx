import { FC } from 'react';

import { ButtonType } from './types/buttonType';

import style from 'styles/Button.module.scss';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Button: FC<ButtonType> = ({
  children,
  className,
  condition,
  onClick,
  type,
  disabled,
  id,
}): ReturnComponentType => {
  const finalClassName = `${condition ? style.red : style.default} ${className}`;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      id={id}
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
