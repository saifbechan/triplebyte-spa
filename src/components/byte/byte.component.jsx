import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleByte as toggleByteAction } from '../../redux/bytes/bytes.actions';

import { ByteContainer } from './byte.styles';

const Byte = ({ idx, toggleByte, children }) => (
  <ByteContainer onClick={() => toggleByte(idx)}>{children}</ByteContainer>
);

Byte.propTypes = {
  idx: PropTypes.number.isRequired,
  toggleByte: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleByte: idx => dispatch(toggleByteAction(idx))
});

export default connect(null, mapDispatchToProps)(Byte);
