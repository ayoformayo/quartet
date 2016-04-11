import React from 'react';

class Success extends React.Component {
  render() {
    return(
      <h1 style={{'textAlign': 'center'}}>{this.props.message}</h1>
    )
  }
}

export default Success;
