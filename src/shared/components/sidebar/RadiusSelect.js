import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  changeRadiusType,
  changeRadius,
} from '../../actions/mapActions';

import Radios from '../forms/Radios';
import Slider from '../forms/Slider';

const options = [
  'Local',
  'State',
  'Nation',
];

class RadiusSelect extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
  }

  handleChange(event) {
    this.props.changeRadiusType(event.target.value);
  }

  handleChangeSlider(event) {
    const valueStr = event.target.value;
    const valueNum = parseInt(valueStr, 10);

    this.props.changeRadius(valueNum);
  }

  render() {
    return (
      <div>
        <Radios
          label="Radius"
          options={options}
          value={this.props.radiusType}
          handleChange={this.handleChange}
          inline
        />

        {
          this.props.radiusType === options[0] && (
            <Slider
              label="Local radius distance (mi)"
              low={0}
              high={100}
              showBounds
              showValue
              value={this.props.radius}
              handleChange={this.handleChangeSlider}
            />
          )
        }
      </div>
    )
  }
}

function mapStateToProps({ mapState }) {
  return {
    radiusType: mapState.radiusType,
    radius: mapState.radius,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRadiusType: (radiusType) => dispatch(changeRadiusType(radiusType)),
    changeRadius: (radius) => dispatch(changeRadius(radius)),
  };
};

RadiusSelect.propTypes = {
  radius: PropTypes.number.isRequired,
  radiusType: PropTypes.oneOf(options).isRequired,
  changeRadiusType: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadiusSelect);
