import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Yagnesh' };
  }

  render() {
    return (
      <div>
        Hello {this.state.name}
      </div>
    );
  }
}
