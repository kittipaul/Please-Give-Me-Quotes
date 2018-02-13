import React, { Component } from 'react';
import Quote from './components/Quote';
import QuotesList from './components/QuotesList';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <main>
          <Route path="/" exact component={Quote} />
          <Route path="/QuotesList" component={QuotesList} />
        </main>
      </div>
    );
  }
}

export default App;
