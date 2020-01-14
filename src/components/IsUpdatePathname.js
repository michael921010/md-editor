import React from 'react';
import { withRouter } from 'react-router-dom';

class IsUpdatePathname extends React.Component {
  componentDidUpdate(prevProps) {
    this.props.isUpdate(
      this.props.location.pathname !== prevProps.location.pathname
    );
  }

  render() {
    return null;
  }
}

IsUpdatePathname.defaultProps = {
  isUpdate: () => { },
};

export default withRouter(IsUpdatePathname);
