const modalStyle = 
    <style jsx>{`
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
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 1fr;
            align-items: center;
            justify-items: center;
            padding: 2vw;
        }
        .modal-content .tab-bar {
            width: 80%;
            background-color: #222222;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: white;
            font-size: 1.2vw;
            font-weight: 900;
            height: 7vh;
        }
        .modal-content .tab-bar .tab-bar-item {
            width: 100%;
            height: 100%;
            display: grid;
            justify-items: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.5s ease;
        }
        .tab-bar-item:hover {
            background-color: #555;
        }
        .modal-content .tab-bar .tab-bar-item.selected {
            background-color: #6EFCD8;
            color: #555;
        }
        .modal-content .results-field {
            background-color: #1a1a1a;
            width: calc(80% - 2vw);
            border-radius: 0.25vw;
            color: white;
            height: calc(100% - 2vw);
            max-height: 35vh;
            padding: 1vw;
            overflow: scroll;
            font-family: 'Source Code Pro', monospace;
        }
        .modal-content .results-field .points-group {
            margin: 0 0 1vw;
        }
        .modal-content .utility-button {
            width: 30%;
            margin: 1vw 0;
        }
    `}</style>

export default modalStyle;