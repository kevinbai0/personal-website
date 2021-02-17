import anime from "animejs";

const toCharactersAnimation = (refs) => { 
    anime.timeline().add({
        targets: refs.startButton.current,
        duration: 500,
        color: "rgba(0,0,0,0)",
        easing: "easeInOutQuad"
    }).add({
        targets: refs.startButton.current,
        duration: 1000,
        borderRadius: "10px",
        width: ["18%", "80%"],
        height: ["5%", "55%"],
        color: "rgba(0,0,0,0)",
        easing: "easeInOutQuad",
    }).add({
        targets: refs.afterText.current,
        duration: 500,
        opacity: 1,
        easing: "easeInOutQuad"
    });
}

const expandedTimelineAnimation = (refs, callback) => {
    let timeline = anime.timeline()
    timeline.add({
        targets: refs.cameraShot.topLeft.current,
        translateX: -500,
        translateY: -500,
        duration: 1000,
        offset: 0,
        easing: "easeInOutQuad",
    }).add({
        targets: refs.cameraShot.topRight.current,
        translateX: 500,
        translateY: -500,
        duration: 1000,
        offset: 0,
        easing: "easeInOutQuad",
    }).add({
        targets: refs.cameraShot.bottomLeft.current,
        translateX: -500,
        translateY: 500,
        duration: 1000,
        offset: 0,
        easing: "easeInOutQuad",
    }).add({
        targets: refs.cameraShot.bottomRight.current,
        translateX: 500,
        translateY: 500,
        duration: 1000,
        offset: 0,
        easing: "easeInOutQuad",
    }).add({
        targets: refs.startButton.current,
        duration: 500,
        borderColor: "rgba(0,0,0,0)",
        easing: "easeInOutQuad"
    }).add({
        targets: [refs.title.current, refs.subtitle.current],
        translateY: -500,
        duration: 1000,
        easing: "easeInOutQuad"
    }).add({
        targets: [refs.afterText.current],
        opacity: 0,
        duration: 500,
        easing: "easeInOutQuad"
    })
    timeline.finished.then(() => callback());
}


export { toCharactersAnimation, expandedTimelineAnimation };