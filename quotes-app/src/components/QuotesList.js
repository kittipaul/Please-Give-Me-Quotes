import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


  //
  // getAllQuotes() {
  //   axios.get("http://localhost:9000/api/quotes")
  //   .then(res => res.body)
  //   //   console.log(res.data);
  //   //   this.setState({
  //   //     quote: res.data
  //   //   })
  //   // })
  //   // .catch(err => err);
  //
  //   // this.setState({
  //   //   quotes: ['1', '2']
  //   // })
  // }

  // componentDidMount() {
  //   this.getAllQuotes();
  // }
class QuotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    }

    // this.getAllQuotes = this.getAllQuotes.bind(this);
    this.showList = this.showList.bind(this);
  }

  showList() {
    axios.get("http://localhost:9000/api/quotes")
    .then(res => {
      this.setState({
        quotes: res.data.map((q,id) => {
          return <div key={id}> {q.quote} BY {q.author}</div>
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
          <Link to="/"> Home </Link>
          {this.state.quotes}
        </div>
      </div>
    );
  }
}

export default QuotesList;
