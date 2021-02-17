import React, { Component } from 'react';
import DurationSelector from "./subcomponents/DurationSelector";
import Head from "next/head";

class StopMotion extends Component {
  constructor(props) {
    super(props);
    this.text =  "This is stop motion. Drag the FPS slider to change the animation speed in real time. Additionally, you can import your own stop motion images and animate them."
    this.state = {
      isPlaying: false,
      isStopped: true,
      currentIndex: 0,
      iterations: this.text.length,
      duration: 1000 / 30,
      isEnded: false,
    }
    this.imagesArr = [];
  }
  render() {
    let {iterations, currentIndex} = this.state;
    let start = [170, 80, 232];
    let end = [ 46, 249, 172 ];
    let colors = [];
    // y = x^2
    for (let i = 0; i <= iterations; i++) {
      let percent = i / iterations;
      let newcolor = start.map((color, i) => {
        return percent * (end[i] - color) + color;
      })
      colors.push(newcolor);
    }

    let startButtonText = "Start";
    if (this.state.isPlaying) startButtonText = "Pause";
    if (this.state.isEnded) startButtonText = "Reset";
    return (
      <div className="frames-controller">
        <Head>
          <title>Stop Motion</title>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900" rel="stylesheet"/>
        </Head>
        <div className="files-controller">
          <div className="file-menu-item">
            Import Images
            <input type="file" multiple onChange={this.handleFileUpload.bind(this)} />
          </div>
          <div className="file-menu-item" onClick={() => this.removeImages()}>Remove Images</div>
        </div>
        <div className="control-panel">
          <div className="title">Stop Motion</div>
          <div className="line-separator"></div>
          <DurationSelector durationSetter={this.changeDuration.bind(this)}/>
          <div 
            className={this.state.isStopped ? "start-button inactive" : "start-button" } 
            onClick={(e) => this.resetSequence()}>
            Stop
          </div>
          <div className="start-button" onClick={(e) => this.toggleStart()}>
            { startButtonText }
          </div>
        </div>
       
        <div className="colors-container">
          {
            this.imagesArr.length == 0 ?
              colors.map((color, i) => {
                return <div key={i} className="color-div" style={{
                  backgroundColor: "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")",
                  zIndex: i < currentIndex ? currentIndex - 1 - i : iterations -  (i - currentIndex),
                }}>
                  <div>{i}</div>
                  <div className="text-div" style={{padding: "0 2vw"}}>{
                    this.text.slice(0, i) 
                  }</div>
                </div>
              })
              :
              <img src={this.imagesArr[this.state.currentIndex]} alt={"loading" + this.state.currentIndex}/>
          }
        </div>
      </div>
    );
  }
  // index = 0; 0 -> 100, 1 -> 99 2 -> 88
  // index = 1; 0 -> 0, 1 -> 100, 2 -> 99,
  // index = 2; 0 -> 1, 1 -> 0, 2 -> 100
  handleFileUpload(e) {
    this.resetSequence();
    this.setState({
      files: e.target.files
    })

    let promises = [];
    for (let i in e.target.files) {
      if (typeof(e.target.files[i]) === typeof({})) {
        let fileReader = new FileReader();
        promises.push(new Promise(function(resolve, reject) {
          fileReader.onload = function() {
            resolve(fileReader.result);
          };
          fileReader.onprogress = function(e) {
            console.log(Math.round((e.loaded * 100) / e.total));
          }
        }));
        fileReader.readAsDataURL(e.target.files[i]);
      }
    }
    Promise.all(promises).then((images) => {
      this.imagesArr = images;
      this.setState({
        iterations: images.length
      })
    });
  }
  removeImages() {
    this.imagesArr = [];
    this.setState({
      iterations: this.text.length
    });
    this.resetSequence();
  }
  

  changeDuration(duration) {
    this.setState({
      duration: duration
    })
  }
  toggleStart() {
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false,
      })
      return;
    }
    if (this.state.isEnded) {
      this.resetSequence();
      return;
    }

    this.setState({
      isPlaying: true,
      isStopped: false,
    }, () => {
      this.runningAnimation();
    });
  }
  resetSequence() {
    this.setState({
      isEnded: false,
      isPlaying: false,
      isStopped: true,
      currentIndex: 0
    })
  }

  runningAnimation() {
    if (!this.state.isPlaying) {
      return;
    }

    if (this.imagesArr.length == 0 ? this.state.currentIndex < this.state.iterations : this.state.currentIndex + 1 < this.state.iterations) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
    else {
      this.setState({
        isPlaying: false,
        isStopped: true,
        isEnded: true
      })
    }
    setTimeout(() => {
      this.runningAnimation();
    }, this.state.duration);
  }
}

export default StopMotion;
