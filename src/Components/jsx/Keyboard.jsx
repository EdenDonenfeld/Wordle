import Button from "./Button";
import '../css/Keyboard.css';

const Keyboard = () => {

    const firstRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const thirdRowLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    return (
        <div className="keyboard-container">
            <div className="first-row">
                {firstRowLetters.map((letter, index) => {
                    return <Button key={index} letter={letter} />
                })}
            </div>
            <div className="second-row">
                {secondRowLetters.map((letter, index) => {
                    return <Button key={index} letter={letter} />
                })}
            </div>
            <div className="third-row">
                <Button letter="Enter" />
                {thirdRowLetters.map((letter, index) => {
                    return <Button key={index} letter={letter} />
                })}
                <Button letter="Del" />
            </div>
        </div>
    );
}

export default Keyboard;