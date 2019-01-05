import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleSidebar } from '../../actions/sidebarActions';
import NavLinks from './NavLinks';

class Nav extends Component { // eslint-disable-line
  render() {
    const { active } = this.props;

    return (
      <div id="nav-wrapper">
        <nav id="nav">
          <Link to="/" style={{ color: '#fff' }}>
            <h4 className="title">
              Delores
            </h4>
          </Link>

          <div
            id="toggle"
            role="button"
            className={active ? 'active' : ''}
            onClick={this.props.toggleSidebar /* eslint-disable-line */}
            onKeyPress={this.props.toggleSidebar /* eslint-disable-line */}
            tabIndex={-1}
          >
            <span className="bar" id="first" />
            <span className="bar" id="second" />
            <span className="bar" id="third" />
          </div>

          <NavLinks />
        </nav>
      </div>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebarState }) => sidebarState;

// Allows us to dispatch a changeName event by calling this.props.changeFullName
// NOTE this is necessary for redux state to render on nav bar
const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
