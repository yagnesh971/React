import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = { fname: 'Yagnesh', lname: 'Vullam', firstName: true };
  }

  modify() {
    console.log('this.state.firstName ', this.state.firstName);
    this.setState({ firstName: !this.state.firstName });
  }

  render() {
    return (
      <div>
        Hello {this.state.firstName ? this.state.fname : this.state.lname}
        <button onClick={() => this.modify()}>Test</button>
      </div>
    );
  }
}
