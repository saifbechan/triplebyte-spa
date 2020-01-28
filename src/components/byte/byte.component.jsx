import React from 'react';
import { connect } from 'react-redux';

import { toggleByte } from '../../redux/bytes/bytes.actions';

import { ByteContainer } from './byte.styles';

const Byte = ({ idx, toggleByte, children }) => (
  <ByteContainer onClick={() => toggleByte(idx)}>{children}</ByteContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleByte: idx => dispatch(toggleByte(idx))
});

export default connect(null, mapDispatchToProps)(Byte);
