import React, { useState } from 'react';

const RadioButton = ({
  checked: propChecked,
  className,
  disabled,
  value,
  onClick
}) => {
  const [checked, setChecked] = useState(propChecked);

  const handleRadioButtonChange = () => {
    setChecked(!checked);
    if (onClick) onClick();
  };

  return (
    <div className={className}>
      <label>
        <input
          type='radio'
          name='react-tips'
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => handleRadioButtonChange()}
          className='form-check-input'
        />
        {value}
      </label>
    </div>
  );
};
export default RadioButton;
