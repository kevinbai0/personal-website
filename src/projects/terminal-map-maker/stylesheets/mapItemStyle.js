const mapItemStyle = <style jsx>{`
.grid-item {
    cursor: pointer;
    display: grid;
    justify-items: center;
    align-items: center;
}
.grid-item:hover .rendered {
    transform: scale(3);
}
.rendered {
    cursor: pointer;
    background-color: white;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    transition: all 0.2s ease;
}
.grid-item:hover .rendered.filter {
    transform: scale(1.5);
}
.grid-item:hover .rendered.destructor {
    transform: scale(1.3);
}
.grid-item:hover .rendered.encryptor {
    transform: scale(1.4);
}
.rendered.filter, .rendered.encryptor {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
}
.rendered.destructor {
    width: 75%;
    height: 75%;
    background-color: rgba(0,0,0,0);
}

.rendered.out-of-bounds {
    background-color: #333333;
}
.rendered.enemy {
    opacity: 0.4;
}
/*.rendered.filter.enemy, .rendered.encryptor.enemy, .rendered.destructor.enemy {
    opacity: 0.8;
}*/
`}</style>

export default mapItemStyle;