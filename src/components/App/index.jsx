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
            <Column action="inbox" bgColor="gray_1"/>
            <Column action="inprogress" bgColor="gray_2"/>
            <Column action="terminate" bgColor="gray_1"/>
            <Column action="history" bgColor="gray_2"/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App
