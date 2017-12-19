import React, { Component } from 'react';
import uuid from 'uuid'

import 'normalize-css'
import styles from './app.css'

import Column from '../Column'
import Header from '../Header'

class App extends Component {

  constructor () {
    super()
    this.state = {
      tasks: {
        inbox:[
          {
            id: uuid.v4(),
            text: 'Task 01',
            asigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 02',
            asigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 03',
            asigned: 'Kengi'
          }
        ],
        inprogress:[
          {
            id: uuid.v4(),
            text: 'Task 04',
            asigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 05',
            asigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 06',
            asigned: 'Kengi'
          }
        ],
        terminate:[
          {
            id: uuid.v4(),
            text: 'Task 07',
            asigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 08',
            asigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 09',
            asigned: 'Kengi'
          }
        ],
        history:[
          {
            id: uuid.v4(),
            text: 'Task 99',
            asigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 100',
            asigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 101',
            asigned: 'Kengi'
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <Column action="inbox" tasks={this.state.tasks.inbox} bgColor="gray_1" icon="inbox"/>
            <Column action="inprogress" tasks={this.state.tasks.inprogress} bgColor="gray_2" icon="cogs"/>
            <Column action="terminate" tasks={this.state.tasks.terminate} bgColor="gray_1" icon="check"/>
            <Column action="history" tasks={this.state.tasks.history} bgColor="gray_2" icon="comments"/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App
