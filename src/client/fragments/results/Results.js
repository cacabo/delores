import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from 'styled-components';

const Container = s.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

// TOOD probably not needed

const ResultsClass = ({
  pending,
  error,
  hospitals,
}) => {
  if (pending) {
    return (
      <Container className="container">
        Loading...
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="container">
        {error}
      </Container>
    );
  }

  return (
    <Container>
      {hospitals.map(h => <p>{h.code}</p>)}
    </Container>
  );
};

ResultsClass.defaultProps = {
  error: '',
  hospitals: null,
};

ResultsClass.propTypes = {
  error: PropTypes.string,
  pending: PropTypes.bool.isRequired,
  hospitals: PropTypes.array, // eslint-disable-line
};

const mapStateToProps = ({ hospitalsState }) => hospitalsState;

export default connect(mapStateToProps)(ResultsClass);
