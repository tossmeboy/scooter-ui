import * as React from 'react';

import { SimpleTopAppBar } from 'rmwc/TopAppBar';

class Toolbar extends React.Component {
  render() {
    return (
      <SimpleTopAppBar
        fixed={true}
        title="Scooter UI"
        actionItems={[
          { onClick: () => window.location.reload(), use: 'refresh' }
        ]}
      />
    );
  }
}

export default Toolbar;
