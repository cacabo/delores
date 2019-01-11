import React from 'react';
import PropTypes from 'prop-types';

export const Slider = ({
  low = 0,
  high = 100,
  value,
  showBounds,
  showValue,
  handleChange,
  label,
  name,
}) => {
  let mid;
  let diff;

  if (showValue) {
    mid = (high + low) / 2;
    diff = high - low;
  }

  return (
    <div className="form-group">
      {label && (<label htmlFor={name}>{label}</label>)}
      <div className="slider-container">
        {showBounds && (<span>{ low }</span>)}
        <div className="slider-wrapper">
          <input
            id={name}
            type="range"
            min={low}
            max={high}
            value={value}
            className="slider"
            onChange={handleChange}
          />
          {showValue && (
            <div className="value">
              <span style={{ transform: `translateX(${(value - mid) * 100 / diff}%)` }}>{ value }</span>
            </div>
          )}
        </div>
        {showBounds && (<span>{ high }</span>)}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  low: 0,
  high: 100,
  showBounds: false,
  label: null,
  showValue: false,
};

Slider.propTypes = {
  low: PropTypes.number,
  high: PropTypes.number,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  showBounds: PropTypes.bool,
  showValue: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};
