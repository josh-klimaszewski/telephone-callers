import React, { Component } from 'react';
import ViewBox from './components/view-box';
import NavBar from './components/nav-bar';
import ListBox from './components/list-box';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeListShow: true,
      projectsListShow: false,
      videosListShow: false
    }
  }
  render() {
    return (
      <div className="App">
        <div className="top">
          <div className="view">
            <div className="header">Telephone Callers</div>
            <ViewBox />
          </div>
          <NavBar
            onHomeClick={() => this.setState({homeListShow: true, projectsListShow: false, videosListShow: false})}
            onProjectsClick={() => this.setState({homeListShow: false, projectsListShow: true, videosListShow: false})}
            onVideosClick={() => this.setState({homeListShow: false, projectsListShow: false, videosListShow: true})}
           />
        </div>
        <ListBox 
          
        />
      </div>
    );
  }
  
}

export default App;
