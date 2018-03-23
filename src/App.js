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
            <ViewBox
              homeListShow={this.state.homeListShow}
              projectsListShow={this.state.projectsListShow}
              videosListShow={this.state.videosListShow}
             />
          </div>
          <NavBar
            onHomeClick={() => this.setState({homeListShow: true, projectsListShow: false, videosListShow: false})}
            onProjectsClick={() => this.setState({homeListShow: false, projectsListShow: true, videosListShow: false})}
            onVideosClick={() => this.setState({homeListShow: false, projectsListShow: false, videosListShow: true})}
           />
        </div>
        {!this.state.homeListShow && <ListBox 
          projectsListShow={this.state.projectsListShow}
          videosListShow={this.state.videosListShow}
        />}
      </div>
    );
  }
  
}

export default App;
