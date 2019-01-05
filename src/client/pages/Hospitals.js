import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHospitals } from '../actions/hospitalActions';

class HospitalsClass extends Component {
  componentDidMount() {
    const { getHospitalsDispatch } = this.props;
    getHospitalsDispatch();
  }

  render() {
    const {
      hospitals,
      pending,
      error,
    } = this.props;

    // TODO LOADING
    if (pending) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    // TODO ERROR MESSAGE
    if (error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">State</th>
            <th scope="col">Address</th>
            <th scope="col">Long</th>
            <th scope="col">Lat</th>
          </tr>
        </thead>

        <tbody>
          {hospitals.map(({
            name,
            code,
            state,
            address,
            location,
          }, idx) => {
            const { lat, lng } = location;
            return (
              <tr key={code}>
                <td>{idx + 1}</td>
                <td>{code}</td>
                <td>{name}</td>
                <td>{state}</td>
                <td>{address}</td>
                <td>{lat}</td>
                <td>{lng}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

HospitalsClass.defaultProps = {
  error: '',
  hospitals: null,
};

HospitalsClass.propTypes = {
  getHospitalsDispatch: PropTypes.func.isRequired,
  hospitals: PropTypes.array, // eslint-disable-line
  error: PropTypes.string,
  pending: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ hospitalsState }) => hospitalsState;

const mapDispatchToProps = dispatch => ({
  getHospitalsDispatch: venueId => dispatch(getHospitals(venueId)),
});

// Redux config
export const Hospitals = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HospitalsClass);
