import React, { Component } from 'react';
import importedNames from '../names';

export class SearchBar3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames,
    };
  }
  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    console.log(inputText);
    const filteredNames = importedNames.filter((name) => {
      return name.toLowerCase().includes(inputText);
    });
    this.setState({
      names: filteredNames,
    });
  };
  render() {
    return (
      <div>
        <h1 className="my-5 badge text-bg-warning">Name Search</h1>
        <p className="h5 text-white-50 mb-3">
          matching names found:{' '}
          <span className="badge text-bg-primary">
            {this.state.names.length}
          </span>
        </p>
        <form>
          <input
            onChange={(event) => this.handleChange(event)}
            type="text"
            placeholder="search names..."
            className="btn btn-outline-light btn-lg my-2"
          />
        </form>
        <hr />
        <div style={{ margin: 'auto' }}>
          {this.state.names.map((name) => {
            return (
              <p className="h6 mb-2" key={name}>
                {name}
              </p>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}
