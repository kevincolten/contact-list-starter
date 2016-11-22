import React, { Component } from 'react';

class App extends Component {
  render() {
    const Contacts = [
      {
        _id: 'dale',
        name: 'Dale Cooper',
        occupation: 'FBI Agent',
        avatar:
      },
      {
        _id: 'spike',
        name: 'Spike Speigel',
        occupation: 'Bounty Hunter',
        avatar:
      },
      {
        _id: 'wirt',
        name: 'Wirt',
        occupation: 'Adventurer,'
        avatar:
      },
      {
        _id: 'michael',
        name: 'Michael Myers',
        occupation: 'Loving little brother',
        avatar:
      },
      {
        _id: 'dana',
        name: 'Dana Scully',
        occupation: 'FBI Agent',
        avatar:
      }
    ];
    return (
      <div className="App">
        <ul className="contact-list">
        {contacts.map(contact => <li key={contact._id}>{contact.name}</li>}
        </ul>
      </div>
    );  
  }
}

export default App;
