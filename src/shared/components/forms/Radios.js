import React from 'react';
import PropTypes from 'prop-types';

const Radios = ({
  label,
  options,
  inline,
  value,
  handleChange,
}) => (
  <div className="form-group">
    {label && (<label>{ label }</label>)}
    {
      options.map(option => (
        <div className={inline ? 'form-check form-check-inline' : 'form-check'} key={`radios-select-${option}`}>
          <label>
            <input
              className="form-check-input"
              name="radius"
              type="radio"
              value={option}
              checked={value === option}
              onChange={handleChange}
            />
            {option}
          </label>
        </div>
      ))
    }
  </div>
);

Radios.defaultProps = {
  label: '',
  inline: false,
};

Radios.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  inline: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Radios;
