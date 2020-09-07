import React from 'react';
import MediaQuery from 'react-responsive'
import { PropTypes } from 'prop-types';

const breakpoints = {
  small: '(min-width: 0) and (max-width: 33.99em)',
  medium: '(min-width: 34em) and (max-width: 49.99em)',
  large: '(min-width: 50em) and (max-width: 72.99em)',
  wide: '(min-width: 73em)',
};
  
function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props } query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}

Breakpoint.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])
}

export default Breakpoint;
