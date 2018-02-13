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
    axios.get("http://localhost:9000/api/quotes")
    .then(res => {
      this.setState({
        quotes: res.data.map((q,id) => {
          return <QuotePanel key={id} quote={q.quote} author={q.author} />
        })
      })
    })
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.showList();
  }

  render() {
    return (
      <div className="Container">
        <div>
          <Link to="/">Home</Link>
          <h2>My Quotes</h2>
          {this.state.quotes}
        </div>
      </div>
    );
  }
}

export default QuotesList;
