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
      selectedProject: {
        name: 'Wainscoting 2057', 
        imageUrl: 'https://f4.bcbits.com/img/a3019626676_16.jpg', 
        src: '991521820', 
        description: `Recorded in early 2011 around Ann Arbor and Detroit. Posthumous self release. Released May 2, 2012.`
      }
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
            <div className="header">
              <h1 className="logo logo1">te</h1>
              <h1 className="logo logo2">lep</h1>
              <h1 className="logo logo3">h</h1>
              <h1 className="logo logo4">one</h1>
              <h1 className="logo logo5">c</h1>
              <h1 className="logo logo6">al</h1>
              <h1 className="logo logo7">ler</h1>
              <h1 className="logo logo8">s</h1>
            </div>
            <ViewBox
              homeShow={this.state.homeShow}
              projectsListShow={this.state.projectsListShow}
              videosListShow={this.state.videosListShow}
              selectedVideoUrl={this.state.selectedVideoUrl}
              selectedProject={this.state.selectedProject}
             />
          </div>
          <div className="nav-box">
            {!this.state.homeShow && <ListBox 
              projectsListShow={this.state.projectsListShow}
              videosListShow={this.state.videosListShow}
              onVideoSelect={this.videoHandler}
              onProjectSelect={this.projectHandler}
            />}
            <NavBar
              onHomeClick={() => this.setState({homeShow: true, projectsListShow: false, videosListShow: false})}
              onProjectsClick={() => this.setState({homeShow: false, projectsListShow: true, videosListShow: false})}
              onVideosClick={() => this.setState({homeShow: false, projectsListShow: false, videosListShow: true})}
            />
            
          </div>
        </div>
    );
  }
}
export default App;
