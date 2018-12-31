import React from "react";
import anime from "animejs";

class VideoModal extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.containerRef = React.createRef();
        this.state = {
            isPlaying: false,
            showVideo: false,
            isEnding: false,
        }
        this.windowHeight = 720;
    }
    componentDidUpdate() {
        if (this.state.isPlaying && !this.state.showVideo) {
            anime({
                targets: this.containerRef.current,
                scale: [0.1, 1],
                translateX: [2 * window.innerWidth, 0],
                translateY: [-500, 0],
                borderRadius: ["50vw", 0],
                backgroundColor: ["rgb(255,255,255)", "rgb(0,0,0)"],
                duration: 2000,
                easing: "easeInOutQuad",
                complete: () => {
                    this.setState({
                        showVideo: true
                    })
                }
            })
        }
        else if (this.state.isEnding && !this.state.showVideo) {
            anime({
                targets: this.containerRef.current,
                scale: [1, 0],
                translateX: [2 * window.innerWidth, 0],
                translateY: [-500, 0],
                borderRadius: [0, "50vw"],
                backgroundColor: ["rgb(0,0,0)", "rgb(255,255,255)"],
                duration: 2000,
                easing: "easeInOutQuad",
                complete: () => {
                    this.setState({
                        isEnding: false
                    })
                    this.props.stopMusic && this.props.stopMusic();
                }
            })
        }
    }

    componentDidMount() {
        this.windowHeight = window.innerHeight;
    }

    render() {
        return <div className={!this.props.shouldShow ? "video-modal small" : "video-modal"} onClick={this.handleClick.bind(this)} ref={this.containerRef}>
            <video 
                ref={this.videoRef} 
                width={this.windowHeight * 720/420} 
                className={!this.state.showVideo ? "video hidden" : "video"} height={this.windowHeight}  
                style={{
                    position: "absolute", top: "0", left: 0
                }
            }>
                <source src="/static/english-seminar/song.m4v" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            }

            <div className={!this.state.showVideo ? "container hidden" : "container"}>
                <div className="bubble-wrap">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </div>
            <div className="x-button" onClick={() => this.finishSong()}>X</div>
        </div>
    }

    handleClick() {
        if (!this.props.shouldShow) {
            this.videoRef.current.play();
            this.setState({
                isPlaying: true
            })
            this.props.onClick && this.props.onClick();
        }
    }

    finishSong() {
        this.videoRef.current.pause();
        this.setState({
            showVideo: false,
            isPlaying: false,
            isEnding: true
        });        
    }

}

export default VideoModal;