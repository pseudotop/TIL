import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    keyword: 'hi'
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  afterUserInput(event) {
    this.setState({ keyword: event.target.value });
  }

  removeBadWords = (word) => {
    const badwords = {
      "fuck": "fxxk",
      "foot": "fxxt",
      "shit": "xxxx"
    };
    Object.keys(badwords).forEach((badword) => {
      word = word.replace(badword, badwords[badword]);
    });
    this.setState({ keyword: word });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.keyword);
  }

  render() {
    return (
      <div className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="keyword">Search</label>
          <input
            id="keyword"
            type="text"
            onChange={e => this.removeBadWords(e.target.value)}
            // onClick={this.onInputClick}
            value={this.state.keyword}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;