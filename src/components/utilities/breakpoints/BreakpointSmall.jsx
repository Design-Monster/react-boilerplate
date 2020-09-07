import React from 'react';
import Breakpoint from 'components/utilities/breakpoints/Breakpoints';

import { PropTypes } from 'prop-types';

function BreakpointSmall(props) {
  return (
  <Breakpoint name='small'>
    {props.children}
  </Breakpoint>
  );
}

BreakpointSmall.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}

export default BreakpointSmall