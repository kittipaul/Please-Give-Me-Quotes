import React, { Component } from 'react';
import axios from 'axios'

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
      background: ''
    };
    this.loadQuotesFromAPI = this.loadQuotesFromAPI.bind(this);
  }
  loadQuotesFromAPI() {
    axios.get(this.props.url)
    .then(res => {
      this.setState({
        quote: res.data.contents.quotes[0].quote,
        author: res.data.contents.quotes[0].author,
        background: res.data.contents.quotes[0].background
      });
    })
  }

  componentDidMount() {
    this.loadQuotesFromAPI();
  }

  render() {
    return (
      <div className="Container">
        <div className="bg-image">
          <img src={this.state.background} alt="background pic" />
          <div className="quote-text">
            {this.state.quote}
          </div>
          <div className="author-name">
            {this.state.author}
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
