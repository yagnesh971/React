import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = { fname: 'Yagnesh', lname: 'Vullam', firstName: true };
    this.state = { pstop: 'stop', presume: 'resume', playback: true }
  }

  modify() {
    console.log('this.state.firstName ', this.state.firstName);
    this.setState({ firstName: !this.state.firstName });
  }
  change() {
    console.log('this.state.playback', this.state.playback);
    this.setState({ playback: !this.state.playback })
  }

  render() {
    return (
      <div>
        Hello {this.state.firstName ? this.state.fname : this.state.lname}
        play{this.state.playback ? this.state.pstop : this.state.presume}
        <button onClick={() => this.modify()}>Test</button>
        <button onClick={() => this.change()}>play</button>
      </div>
    );
  }
}
