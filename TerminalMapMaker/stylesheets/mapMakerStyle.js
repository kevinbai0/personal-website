const mapMakerStyle = <style jsx>{`
    .modal {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.8);
        z-index: 5;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .modal section.modal-content {
        width: 50vw;
        height: 50vh;
        background-color: #121212;
        display: grid;
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
    }
    .modal-content .title {
        color: white;
        font-weight: 800;
        font-size: 2vw;
    }
    .modal-content .results-field {
        background-color: #222222;
        width: 80%;
        height: 100%;
        border-radius: 0.25vw;
        color: white;
        padding: 1vw;
    }
    .modal-content .results-field .points-group {
        margin: 0 0 1vw;
    }
    .modal-content .utility-button {
        width: 30%;
    }

    .map-maker-container {
        font-family: sans-serif;
        position: absolute;
        margin: 0;
        left: 0;
        top: 0;
        background-color: #1c1c1c;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }
    .map-maker-grid {
        width: 80vmin;
        height: 80vmin;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(28, 1fr);
    }
    .grid-row {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(28, 1fr);
    }
    .map-maker-options-container {
        background-color: #292929;
        height: 80vmin;
        width: 90%;
        justify-self: start;
        border-radius: 1vmin;
        box-shadow: 0 2px 30px rgba(0,0,0,0.1);
        display: grid;
        grid-template-rows: 1fr auto minmax(8vw, 1fr) 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        padding: 1vw;
    }
    .map-maker-options-container .container-title {
        color: white;
        font-weight: 600;
        justify-self: center;
        margin: 2vw 0 0;
        font-size: 2vw;
    }
    .options-container {
        background-color: #222222;
    }
    .map-maker-options-container .firewalls-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
    }
    .map-maker-options-container .firewall-title {
        color: white;
        margin: 0 0 1vw 0;
        font-size: 1.2vw;
        font-weight: 800;
    }
    .map-maker-options-container .current-coordinate-container {
        margin: 1vw 0 0;
        color: white;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .firewalls-container .firewall-item {
        width: 50%;
        height: 50%;
        display: grid;
        justify-items: center;
        align-items: center;
        background-color: #444444;
        padding: 1vw;
        border-radius: 1vw;
        width: 4vw;
        height: 4vw;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 900;
        font-size: 3vw;
        color: #FF22A1;
    }
    .firewall-item.firewall-item-selected {
        transform: scale(1.1);
        background-color: #ffffff;
    }
    .firewall-item:hover {
        transform: scale(1.1);
    }

    .groups-container {
        display: flex;
        flex-wrap: wrap;
        margin: 1vw 0 0;
        padding: 1vw;
    }
    .groups-container .group-item {
        width: 6vw;
        height: 6vw;
        border-radius: 1vw;
        transition: all 0.2s ease;
        cursor: pointer;
        margin: 0.5vw;
    }
    .group-item.add-group-item {
        border: 3px solid #444444;
        color: #444444;
        font-weight: 900;
        font-size: 5vw;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .group-item.add-group-item div {
        transform: translateY(-5%);
    }
    .group-item:hover {
        border: 3px solid #888888;
        color: #888888;
    }
    .export-points-container {
        margin: 1vw 0 0;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
    }
    .utility-button {
        color: white;
        background-color: #555555;
        border-radius: 5vw;
        padding: 0.5vw 1vw;
        cursor: pointer;
        width: 50%;
        height: 30%;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
        transition: all 0.2s ease;
        font-size: 1.2vw;
    }
    .utility-button:hover {
        background-color: #32D858;
    }
`}</style>

export default mapMakerStyle;