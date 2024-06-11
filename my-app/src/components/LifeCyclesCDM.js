import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function BorderExample() {
  return <Spinner animation="border" />;
}

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log('constructor called');
    super(props);

    this.state = {
      data: 'loading',
    };
  }

  getData() {
    console.log('getData() called');
    setTimeout(() => {
      console.log('Data fetched!');
      this.setState({
        data: 'Done!',
      });
    }, 3000);
  }

  componentDidMount() {
    console.log('Component mounted');
    this.getData();
  }

  render() {
    console.log('Render method called');
    return (
      <div>
        {this.state.data === 'loading' ? (
          <div>
            <p className="h1 mt-3 mb-3">Loading</p>
            <BorderExample />
          </div>
        ) : (
          <h1>
            {this.state.data}
            <br />
            <FontAwesomeIcon className="fa-lg mt-3" icon={faSquareCheck} />
          </h1>
        )}
      </div>
    );
  }
}

export default LifeCyclesCDM;
