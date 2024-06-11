import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log('constructor');
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount');
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    console.log('render');
    const { date } = this.state;
    return (
      <div className="display-2">
        <FontAwesomeIcon className="fa-lg mb-3" icon={faClock} />
        <hr />
        <h2 className="badge rounded-pill text-bg-dark p-3">
          {this.state.date.toLocaleTimeString()}
        </h2>
        <br />
        <h3 className="badge rounded-pill text-bg-dark p-3">
          {date.toLocaleDateString()}
        </h3>
      </div>
    );
  }
}

export default Clock;
