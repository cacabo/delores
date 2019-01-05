import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions/sidebarActions';

class Shade extends Component {
  render() {
    return (
      <div
        id="shade"
        className={ this.props.active ? 'active' : '' }
        onClick={this.props.toggleSidebar}
      />
    )
  }
};

Shade.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebarState }) => {
  return sidebarState;
};

// Allows us to dispatch a changeName event by calling this.props.changeFullName
// NOTE this is necessary for redux state to render on nav bar
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
};

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shade);
