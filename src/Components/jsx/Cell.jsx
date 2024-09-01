import '../css/Cell.css';

const Cell = ({ letter, color }) => {

    const buttonStyle = {
        backgroundColor: color,
        border: color === 'white' ? '2px solid #d3d6da' : '2px solid ' + color,
        color: color === 'white' ? "black" : "white",
    }

    return (
        <button className="letter-btn" style={buttonStyle} >{letter}</button>
    );
}

export default Cell;