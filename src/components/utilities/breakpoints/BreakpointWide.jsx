import React from 'react';
import Breakpoint from 'components/utilities/breakpoints/Breakpoints';
import { PropTypes } from 'prop-types';

function BreakpointWide(props) {
  return (
  <Breakpoint name='wide'>
    {props.children}
  </Breakpoint>
  );
}

BreakpointWide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}

export default BreakpointWide