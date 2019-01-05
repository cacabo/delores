import React from 'react';
import PropTypes from 'prop-types';

const Radios = ({
  label,
  options,
  inline,
  value,
  name,
  handleChange,
}) => (
  <div className="form-group">
    {label && (<label htmlFor={name}>{label}</label>)}
    {options.map(option => (
      <div
        className={inline ? 'form-check form-check-inline' : 'form-check'}
        key={`radios-select-${option}`}
        id={name}
      >
        <label htmlFor={option}>
          <input
            className="form-check-input"
            name="radius"
            type="radio"
            value={option}
            id={option}
            checked={value === option}
            onChange={handleChange}
          />
          {option}
        </label>
      </div>
    ))}
  </div>
);

Radios.defaultProps = {
  label: '',
  inline: false,
};

Radios.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired, // eslint-disable-line
  inline: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Radios;
