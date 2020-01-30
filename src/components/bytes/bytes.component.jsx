import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Byte from '../byte/byte.component';

import { BytesContainer } from './bytes.styles';

const Bytes = ({ values }) => (
  <BytesContainer>
    {values.map((value, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Byte key={idx} idx={idx}>
        {value}
      </Byte>
    ))}
  </BytesContainer>
);

const mapStateToProps = ({ bytes: { values } }) => ({
  values
});

Bytes.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default connect(mapStateToProps)(Bytes);
