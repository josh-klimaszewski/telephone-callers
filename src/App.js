import React, { Component } from 'react';
import ViewBox from './components/view-box';
import NavBar from './components/nav-bar';
import ListBox from './components/list-box';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.videoHandler = this.videoHandler.bind(this);
    this.projectHandler = this.projectHandler.bind(this);
    this.state = {
      homeListShow: true,
      projectsListShow: false,
      videosListShow: false,
      selectedVideoUrl: null,
      selectedProject: {}
    }
  }
  videoHandler(videoUrl) {
    this.setState({selectedVideoUrl: videoUrl})
  }
  projectHandler(project) {
    this.setState({selectedProject: project})
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
              selectedVideoUrl={this.state.selectedVideoUrl}
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
          onVideoSelect={this.videoHandler}
          onProjectSelect={this.projectHandler}
        />}
      </div>
    );
  }
  
}

export default App;
