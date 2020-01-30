import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { OctalContainer } from './octal.styles';

const Octal = ({ values }) => (
  <OctalContainer>{parseInt(values.join(''), 2)}</OctalContainer>
);

const mapStateToProps = ({ bytes: { values } }) => ({
  values
});

Octal.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default connect(mapStateToProps)(Octal);
