import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { rehydrate } from '../../actions/userActions';

class Rehydrator extends Component {
  componentDidMount() {
    const { dispatchRehydrate } = this.props;
    dispatchRehydrate();
  }

  render() {
    return null;
  }
}

Rehydrator.propTypes = {
  dispatchRehydrate: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchRehydrate: () => dispatch(rehydrate()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rehydrator);
