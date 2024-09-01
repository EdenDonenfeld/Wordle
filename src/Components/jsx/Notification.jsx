import '../css/Notification.css';

const Notification = ({ message, visible }) => {
    return (
        <div className={`notification ${visible ? 'show' : ''}`}>
            {message}
        </div>
    );
}

export default Notification;