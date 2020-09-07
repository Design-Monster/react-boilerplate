import React from 'react';
import Breakpoint from 'components/utilities/breakpoints/Breakpoints';
import { PropTypes } from 'prop-types';

function BreakpointMedium(props) {
  return (
  <Breakpoint name='medium'>
    {props.children}
  </Breakpoint>
  );
}

BreakpointMedium.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}

export default BreakpointMedium