import React, { Component } from 'react';
import Quote from './components/Quote'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Quote
        url='https://quotes.rest/qod?category=inspire'/>
      </div>
    );
  }
}

export default App;
