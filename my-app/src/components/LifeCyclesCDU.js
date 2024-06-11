import React, { Component } from 'react';

export class LifeCyclesCDU extends Component {
  constructor(props) {
    console.log('Constructor called');
    super(props);
    this.state = {
      greeting: 'Hello!',
    };
  }
  updateGreeting = () => {
    console.log('update greeting called');
    this.setState((prevState) => {
      return {
        greeting: prevState.greeting === 'Hello!' ? 'Goodbye' : 'Hello!',
      };
    });
  };
  componentDidUpdate() {
    console.log('Component updated');
  }
  render() {
    console.log('render method called');
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button
          className="btn btn-outline-light btn-lg my-2"
          onClick={this.updateGreeting}
        >
          Update Greeting
        </button>
      </div>
    );
  }
}

export default LifeCyclesCDU;
