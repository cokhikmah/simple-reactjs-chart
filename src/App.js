import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import { Jumbotron, Container } from 'reactstrap';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
      <Jumbotron fluid>
        <Container fluid>
          <Chart width="50%"/>
          <h1 className="display-3">Chart | Very Simple</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>


      </div>
    );
  }
}


export default App;
