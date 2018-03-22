import React, { Component } from 'react';
import axios from 'axios';
import FaTrashO from 'react-icons/lib/fa/trash-o';


class QuotePanel extends Component {
  constructor(props) {
    super(props);

    this.removeQuote = this.removeQuote.bind(this);
  }

  removeQuote() {
    axios.delete("/api/quotes", {
      data: {quote: this.props.quote}
    })
    .then(this.props.showList())
    .then(res => console.log(res.data))
    .catch(err => console.log("Can't remove quote"))
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div className="panel-quote">
          {this.props.quote}
        </div>
        <div className="panel-author">
          By {this.props.author}
        </div>
        <button onClick={this.removeQuote} className="remove-button">Remove<FaTrashO /></button>
      </div>
    );
  }
}

export default QuotePanel;
