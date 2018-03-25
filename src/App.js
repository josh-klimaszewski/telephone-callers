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
      homeShow: true,
      projectsListShow: false,
      videosListShow: false,
      selectedVideoUrl: 'https://www.youtube.com/watch?v=aehA_6-NMm0',
      selectedProject: {name: 'Wainscoting 2057', imageUrl: 'https://f4.bcbits.com/img/a3019626676_16.jpg', src: '991521820'}
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
        
          <div className="view">
            <div className="header">Telephone Callers</div>
            <ViewBox
              homeShow={this.state.homeShow}
              projectsListShow={this.state.projectsListShow}
              videosListShow={this.state.videosListShow}
              selectedVideoUrl={this.state.selectedVideoUrl}
              selectedProject={this.state.selectedProject}
             />
          </div>
          <div className="nav-box">
            <NavBar
              onHomeClick={() => this.setState({homeShow: true, projectsListShow: false, videosListShow: false})}
              onProjectsClick={() => this.setState({homeShow: false, projectsListShow: true, videosListShow: false})}
              onVideosClick={() => this.setState({homeShow: false, projectsListShow: false, videosListShow: true})}
            />
            {!this.state.homeShow && <ListBox 
              projectsListShow={this.state.projectsListShow}
              videosListShow={this.state.videosListShow}
              onVideoSelect={this.videoHandler}
              onProjectSelect={this.projectHandler}
            />}
          </div>
        </div>
    );
  }
}
export default App;
