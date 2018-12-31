import React from "react";
import ScrollButton from "./ScrollButton";
import ThesisPage from "./ThesisPage";
import anime from "animejs";

class EvidencePage extends React.Component {
    constructor(props) {
        super(props);
        this.pageRefs = [];
        let count = props.subprongs.length * 3 + 2;
        for (let i = 0; i < count; i++) {
            this.pageRefs.push(React.createRef());
        }
        this.state = {
            count: count,
            currentPage: 0
        }
    }

    transitionPage(index) {
        let {count, currentPage} = this.state;
        this.setState({
            currentPage: currentPage+1 < count ? currentPage + 1 : currentPage
        })
    }
    componentDidUpdate() {
        let counter = 0;
        /*for (let i = this.state.currentPage; i >= 0; i--) {
            this.pageRefs[i].current.style.zIndex=100 - counter++;
            this.pageRefs[i].current.style.height="100vh";
        }
        for (let i = this.state.count; i > this.state.count; i--) {
            this.pageRefs[i].current.style.zIndex=100-counter++;
            this.pageRefs[i].current.style.height="100vh";
        }*/
        for (let i = 0; i < this.state.count ; i++) {
            this.pageRefs[i].current.style.zIndex = 100-i;
        }

        let affected = this.pageRefs.filter((val, i) => i < this.state.currentPage).map((val) => val.current);
        anime({
            targets: affected,
            opacity: 0,
            duration: 2000,
            easing: "easeInOutQuad",
            complete: () => {
                affected.forEach((element) => {
                    element.style.visibility="hidden"
                })
            }
        })
        
        
    }

    render() {
        let {subprongs} = this.props;
        console.log(this.props.state);
        return <div className={"evidence-page " + this.props.state}>
            <div className="evidence-landing evidence-container" ref={this.pageRefs[0]}>
                <div className="evidence-title">Evidence</div>
                <ScrollButton onClick={() => this.transitionPage(0)}/>
            </div>
            {
                subprongs.map((subprong, i) => {
                    let multiLearLength = subprong.quoteLearMultiple && subprong.quoteLearMultiple.length;
                    let numRowsLear = multiLearLength && multiLearLength > 5 ? (Math.ceil(multiLearLength / 2)) : multiLearLength;
                    return <div key={i}>
                        <div className="subprong-container evidence-container" ref={this.pageRefs[i * 3 + 1]}>
                            <div className="subprong-title">{subprong.title}</div>
                            <ScrollButton onClick={() => this.transitionPage(i*3 + 1)} dark/>
                        </div>
                        <div className="quote-container blue evidence-container" ref={this.pageRefs[i * 3 + 2]}>
                            <div className="quote-symbol">“</div>
                            <div className="quote-lines">
                            <div className="inline-quote">
                                    <div className="rectangle"></div>
                                    {
                                        subprong.quoteOedipus ? <div className="quote-content">{subprong.quoteOedipus}</div> :
                                            <div className="multi-quote-content" style={{
                                                gridTemplateRows: "repeat(" + subprong.quoteOedipusMultiple.length + ", 1fr)",
                                                gridTemplateColumns: "1fr",
                                            }}>
                                                {
                                                    subprong.quoteOedipusMultiple.map((text, i) => {
                                                        let val = i+1;
                                                        let str = val < 10 ? "0" + val : "" + val;
                                                        return <div key={i} className="q">{str} {text}</div>
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                                <div className="quote-author">{subprong.quoteOedipusAuthor}</div>
                            </div>
                            <ScrollButton onClick={() => this.transitionPage(i * 3 + 2)}/>
                        </div>
                        <div className="quote-container red evidence-container" ref={this.pageRefs[i * 3 + 3]}>
                            <div className="quote-symbol">“</div>
                            <div className="quote-lines">
                                <div className="inline-quote">
                                    <div className="rectangle"></div>
                                    {
                                        subprong.quoteLear ? <div className="quote-content">{subprong.quoteLear}</div> :
                                            <div className="multi-quote-content" style={{
                                                gridTemplateRows: "repeat(" + numRowsLear + ", 1fr)",
                                                gridTemplateColumns: numRowsLear === multiLearLength ? "1fr" : "auto auto",
                                            }}>
                                                {
                                                    subprong.quoteLearMultiple.map((text, i) => {
                                                        let val = i+1;
                                                        let str = val < 10 ? "0" + val : "" + val;
                                                        return <div key={i} className="q">{str} {text}</div>
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                                <div className="quote-author">{subprong.quoteLearAuthor}</div>
                            </div>
                            <ScrollButton onClick={() => this.transitionPage(i * 3 + 3)}/>
                        </div>
                    </div>
                })
            }
            <ThesisPage reference={this.pageRefs[this.state.count - 1]}/>
        </div>
    }
}

export default EvidencePage;