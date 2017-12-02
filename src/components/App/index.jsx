import React, { Component } from 'react';

import 'normalize-css'
import styles from './app.css'

import Column from '../Column'
import Header from '../Header'

class App extends Component {

  render() {
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <Column action="inbox" />
            <Column action="inprogress" />
            <Column action="terminate" />
            <Column action="history" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App