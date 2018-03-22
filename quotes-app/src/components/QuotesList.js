import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuotePanel from './QuotePanel';

class QuotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    }

    this.showList = this.showList.bind(this);
  }

  showList() {
    axios.get("/api/quotes")
    .then(res => {
      this.setState({
        quotes: res.data.map((q,id) => {
          return <QuotePanel showList={this.showList} key={id} quote={q.quote} author={q.author} />
        })
      })
    })
    .catch(err => console.log("this show list went wrong"));
  }

  componentDidMount() {
    this.showList();
  }

  render() {
    return (
      <div className="Container">
        <button className="go-to-home-button">
          <Link to="/" className="link-to-home">Home</Link>
        </button>
        <h2 className="my-quotes">My Quotes</h2>
        {this.state.quotes}
      </div>
    );
  }
}

export default QuotesList;
