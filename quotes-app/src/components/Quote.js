import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
      background: '',
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
        background: res.data.contents.quotes[0].background
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
        <div className="navheader">
          <a href="">Home</a> <br />
          <Link to="/QuotesList"> Go to list </Link> <br />
        </div>
        <div className="bg-image">
          <img src={this.state.background} alt="background pic" />
          <div className="quote-text">
            {this.state.quote}
          </div>
          <div className="author-name">
            {this.state.author}
          </div>
          <button id="save-quote-button" onClick={this.handleClick}>Add quote to list</button>
        </div>
      </div>
    );
  }
}

export default Quote;
