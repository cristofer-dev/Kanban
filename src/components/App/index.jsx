import React, { Component } from 'react';
import uuid from 'uuid'
import { Link, Route, Switch } from 'react-router-dom';

import 'normalize-css'
import styles from './app.css'

import Column from '../Column'
import Header from '../Header'
import Profile from '../Profile'

class App extends Component {

  constructor () {
    super()
    this.state = {
      tasks: {
        inbox:[
          {
            id: uuid.v4(),
            text: 'Task 01',
            assigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 02',
            assigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 03',
            assigned: 'Kengi'
          }
        ],
        inProgress:[
          {
            id: uuid.v4(),
            text: 'Task 04',
            assigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 05',
            assigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 06',
            assigned: 'Kengi'
          }
        ],
        terminate:[
          {
            id: uuid.v4(),
            text: 'Task 07',
            assigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 08',
            assigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 09',
            assigned: 'Kengi'
          }
        ],
        history:[
          {
            id: uuid.v4(),
            text: 'Task 99',
            assigned: 'Mey'
          },
          {
            id: uuid.v4(),
            text: 'Task 100',
            assigned: 'Mikao'
          },
          {
            id: uuid.v4(),
            text: 'Task 101',
            assigned: 'Kengi'
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
          <Route
            exact path="/"
            render={() => (
              <div className="row">
                <Column action="inbox" tasks={this.state.tasks.inbox} bgColor="gray_1" icon="inbox"/>
                <Column action="inprogress" tasks={this.state.tasks.inProgress} bgColor="gray_2" icon="cogs"/>
                <Column action="terminate" tasks={this.state.tasks.terminate} bgColor="gray_1" icon="check"/>
                <Column action="history" tasks={this.state.tasks.history} bgColor="gray_2" icon="comments"/>            
              </div>
            )}
          />
          <Route path="/profile" component={Profile}/>
          
        </div>
      </div>
    );
  }
}

export default App
