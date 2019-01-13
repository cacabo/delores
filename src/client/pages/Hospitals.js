import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from 'styled-components';

import { getHospitals } from '../actions/hospitalActions';
import { BLUE, WHITE } from '../constants/colors';
import { ErrorMessage } from '../components';

const Table = s.table`
  border-top: 0;
`;

const TableHead = s.thead`
  background: ${BLUE};
  color: ${WHITE};
  font-size: 80%;

  th {
    font-weight: normal;
  }
`;

const TableBody = s.tbody`
  font-size: 80%;
`;

const Container = s.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

// TODO split into more components

class HospitalsClass extends Component {
  componentDidMount() {
    const { token } = this.props;
    const { getHospitalsDispatch } = this.props;
    getHospitalsDispatch(token);
  }

  render() {
    const {
      hospitals,
      pending,
      error,
    } = this.props;

    // TODO LOADING COMPONENT
    if (pending) {
      return (
        <Container className="container">
          <p>Loading...</p>
        </Container>
      );
    }

    if (error) {
      return (
        <Container className="container">
          <ErrorMessage message={error} />
        </Container>
      );
    }

    return (
      <Table className="table">
        <TableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">State</th>
            <th scope="col">Address</th>
            <th scope="col">Long</th>
            <th scope="col">Lat</th>
          </tr>
        </TableHead>

        <TableBody>
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
        </TableBody>
      </Table>
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
  token: PropTypes.string.isRequired,
};

const mapStateToProps = ({ hospitalsState, userState }) => (
  Object.assign({}, hospitalsState, { token: userState.token })
);

const mapDispatchToProps = dispatch => ({
  getHospitalsDispatch: () => dispatch(getHospitals()),
});

// Redux config
export const Hospitals = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HospitalsClass);
