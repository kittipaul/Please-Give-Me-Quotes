import React, { Component } from 'react';

class QuotePanel extends Component {

  render() {
    return (
      <div className="Container">
        <div className="panel-quote">
          {this.props.quote}
        </div>
        <div className="panel-author">
          {this.props.author}
        </div>
      </div>
    );
  }
}

export default QuotePanel;
