import React from 'react';
import Breakpoint from 'components/utilities/breakpoints/Breakpoints';
import { PropTypes } from 'prop-types';

function BreakpointLarge(props) {
  return (
  <Breakpoint name='large'>
    {props.children}
  </Breakpoint>
  );
}

BreakpointLarge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}

export default BreakpointLarge