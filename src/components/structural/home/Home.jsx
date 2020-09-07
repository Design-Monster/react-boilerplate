import React from 'react';
import styles from 'components/structural/home/Home.module.scss';
import ChildExample from 'components/structural/childExample/ChildExample';
import BreakpointSmall from 'components/utilities/breakpoints/BreakpointSmall';
import BreakpointMedium from 'components/utilities/breakpoints/BreakpointMedium';
import BreakpointLarge from 'components/utilities/breakpoints/BreakpointLarge';
import BreakpointWide from 'components/utilities/breakpoints/BreakpointWide';

function Home() {
  return (
    <div className={styles.home}>
      <ChildExample />
      <BreakpointSmall>**SMALL** react-responsive example - media query in JSX files - use responsive mode to see content change based on sizes</BreakpointSmall>
      <BreakpointMedium>**MEDIUM** react-responsive example - media query in JSX files - use responsive mode to see content change based on sizes</BreakpointMedium>
      <BreakpointLarge>**LARGE** react-responsive example - media query in JSX files - use responsive mode to see content change based on sizes</BreakpointLarge>
      <BreakpointWide>**WIDE** react-responsive example - media query in JSX files - use responsive mode to see content change based on sizes</BreakpointWide>
    </div>
  );
}

export default Home;
