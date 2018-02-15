import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
    };

    this.loadQuotesFromAPI = this.loadQuotesFromAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.post("http://localhost:9000/api/quotes",
    { quote: this.state.quote,
      author: this.state.author
    })
    .then(res => console.log(res.data))
    .catch(err => err);
    document.getElementById("save-quote-button").style.visibility="hidden";
  }

  loadQuotesFromAPI() {
    axios.get("https://quotes.rest/qod?category=inspire")
    .then(res => {
      this.setState({
        quote: res.data.contents.quotes[0].quote,
        author: res.data.contents.quotes[0].author,
      });
    })
    .catch(err => console.log('Loading API fail'))
  }

  componentDidMount() {
    this.loadQuotesFromAPI();
  }

  render() {
    return (
      <div className="Container">
        <button className="go-to-list-button">
          <Link to="/QuotesList" className="link-to-list"> Quotes List </Link>
        </button>
        <div className="quote-wrapper">
          <div className="quote-text">
            "{this.state.quote}"
          </div>
          <div className="author-name">
            By {this.state.author}
          </div>
          <button id="save-quote-button" onClick={this.handleClick}>Add quote to list</button>
        </div>
        <div className="credit-to-api">
          <span>
            <img src="https://theysaidso.com/branding/theysaidso.png" height="15" width="15" alt="theysaidso.com"/>
            <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com">theysaidso.com</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Quote;
