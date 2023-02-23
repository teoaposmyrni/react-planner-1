import React from 'react';
import PropTypes from 'prop-types';

import { ReactSVGPanZoom, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT, TOOL_AUTO } from 'react-svg-pan-zoom';
import * as constants from '../../constants';
import * as SharedStyle from '../../shared-style';

export default function Map2D(
  { state, width, height }) {
  let { map2D, mode, scene } = state;
  let layerID = scene.selectedLayer;
  
  return (
    <div>
       <Leaflet />
    </div>
  );
}


Map2D.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Map2D.contextTypes = {
  map2DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  verticesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  areaActions: PropTypes.object.isRequired,
  projectActions: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};
