import '../css/Button.css';

const Button = (props) => {
    return (
      <button className="letter-btn">{props.letter}</button>
    );
  }

export default Button;