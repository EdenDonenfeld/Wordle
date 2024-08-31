import '../css/Cell.css';

const Cell = ({ letter }) => {
    return (
        <button className="letter-btn">{letter}</button>
    );
}

export default Cell;