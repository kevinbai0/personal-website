import anime from "animejs";

const introTransition = (refs, callback) => {
    let timeline = anime.timeline();
    timeline.add({
        targets: [refs.characters.dina.current, refs.characters.ishvarAndOm.current, refs.characters.maneck.current],
        translateY: [-500, 0],
        duration: 1000,
        easing: "easeInOutQuad"
    }).add({
        targets: refs.timelineTitle.current,
        scale: [0.01, 1],
        translateY: "-50%",
        translateX: "-50%",
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1000,
        offset: 0
    }).add({
        targets: refs.timelineSection.current,
        opacity: [0,1],
        duration: 1000,
        offset: 0,
        easing: "easeInOutQuad"
    })
    timeline.finished.then(() => callback && callback());
}

export {introTransition}