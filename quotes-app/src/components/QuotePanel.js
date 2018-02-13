import React, { Component } from 'react';
import axios from 'axios';


class QuotePanel extends Component {
  constructor(props) {
    super(props);

    this.removeQuote = this.removeQuote.bind(this);
  }

  removeQuote() {
    axios.delete("http://localhost:9000/api/quotes", {
      data: {quote: this.props.quote}
    })
    .then(res => console.log(res.data))
    .catch(err => console.log("Can't remove quote"))
  }

  render() {
    return (
      <div className="Container">
        <div className="panel-quote">
          {this.props.quote}
        </div>
        <div className="panel-author">
          {this.props.author}
        </div>
        <button onClick={this.removeQuote}> Remove </button>
      </div>
    );
  }
}

export default QuotePanel;
