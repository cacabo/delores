import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  label,
  placeholder,
  value,
  handleChange,
  options,
  name,
  type,
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor={name}>
        { label }
      </label>
    )}
    <select
      className="form-control"
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      name={name}
      id={name}
      value={value}
    >
      {
        options.map(option => (
          <option key={option}>
            { option }
          </option>
        ))
      }
    </select>
  </div>
);

Select.defaultProps = {
  label: '',
  placeholder: '',
};

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired, // eslint-disable-line
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Select;
