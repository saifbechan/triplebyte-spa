import React from 'react';
import { connect } from 'react-redux';

import Byte from '../byte/byte.component';

import { BytesContainer } from './bytes.styles';

const Bytes = ({ values }) => (
  <BytesContainer>
    {values.map((value, idx) => (
      <Byte key={idx} idx={idx}>
        {value}
      </Byte>
    ))}
  </BytesContainer>
);

const mapStateToProps = ({ bytes: { values } }) => ({
  values
});

export default connect(mapStateToProps)(Bytes);
