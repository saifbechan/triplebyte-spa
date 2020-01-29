import React from 'react';
import { connect } from 'react-redux';

import { OctalContainer } from './octal.styles';

export const Octal = ({ values }) => (
  <OctalContainer>{parseInt(values.join(''), 2)}</OctalContainer>
);

const mapStateToProps = ({ bytes: { values } }) => ({
  values
});

export default connect(mapStateToProps)(Octal);
