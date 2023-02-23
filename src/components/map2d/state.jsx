import React from 'react';
import PropTypes from 'prop-types';
import * as SharedStyle from '../../shared-style';

const guideStyle = {
  stroke: SharedStyle.SECONDARY_COLOR.main,
  strokewidth:'2.5px'
};

export default function State({state, catalog}) {

  return (
     <Leaflet /> 
  )
}

State.propTypes = {
  state: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired
};
