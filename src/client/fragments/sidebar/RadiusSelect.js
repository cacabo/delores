import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  changeRadiusType,
  changeRadius,
} from '../../actions/mapActions';

import Radios from '../../components/forms/Radios';
import Slider from '../../components/forms/Slider';

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
    const { dispatchChangeRadiusType } = this.props;
    dispatchChangeRadiusType(event.target.value);
  }

  handleChangeSlider(event) {
    const valueStr = event.target.value;
    const valueNum = parseInt(valueStr, 10);
    const { dispatchChangeRadius } = this.props;
    dispatchChangeRadius(valueNum);
  }

  render() {
    const { radius, radiusType } = this.props;

    return (
      <div>
        <Radios
          label="Radius"
          name="radius"
          options={options}
          value={radiusType}
          handleChange={this.handleChange}
          inline
        />

        {radiusType === options[0] && (
          <Slider
            label="Local radius distance (mi)"
            low={0}
            high={100}
            showBounds
            showValue
            name="radius"
            value={radius}
            handleChange={this.handleChangeSlider}
          />
        )}
      </div>
    );
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
    dispatchChangeRadiusType: radiusType => dispatch(changeRadiusType(radiusType)),
    dispatchChangeRadius: radius => dispatch(changeRadius(radius)),
  };
}

RadiusSelect.propTypes = {
  radius: PropTypes.number.isRequired,
  radiusType: PropTypes.oneOf(options).isRequired,
  dispatchChangeRadius: PropTypes.func.isRequired,
  dispatchChangeRadiusType: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RadiusSelect);
