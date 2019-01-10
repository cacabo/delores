import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeSessionModal } from '../../actions/sessionActions';
import { Modal, ModalContainer } from '../../components';

const SessionModal = ({ loginModal, registerModal, dispatchCloseSessionModal }) => {
  const show = loginModal || registerModal;

  return (
    <Modal show={show} toggle={dispatchCloseSessionModal}>
      <ModalContainer>
        <h1>nice modal</h1>
      </ModalContainer>
    </Modal>
  );
};

SessionModal.propTypes = {
  loginModal: PropTypes.bool.isRequired,
  registerModal: PropTypes.bool.isRequired,
  dispatchCloseSessionModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sessionState }) => (sessionState);

const mapDispatchToProps = dispatch => ({
  dispatchCloseSessionModal: () => dispatch(closeSessionModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionModal);
