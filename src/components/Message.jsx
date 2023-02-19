import PropTypes from 'prop-types';

function Message({from, message}) {
    // id — уникальный идентификатор сообщения, строка;
    // from — автор сообщения, объект;
    // type — тип сообщения, строка, варианты значений: response, message, typing;
    // time — время публикации сообщения, строка;
    // text — текст сообщения, строка, может отсутствовать.
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name">
                    <i className="fa fa-circle online"></i>
                    {from.name}
                </span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">
                {message.text}
            </div>
        </li>
    );
}

Message.propTypes = {
    from: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    message: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["response", "message", "typing"]).isRequired,
        time: PropTypes.string.isRequired,
        text: PropTypes.string,
    }),
};


export default Message