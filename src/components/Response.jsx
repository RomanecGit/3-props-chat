import PropTypes from 'prop-types';

function Response({from, message}) {
    // id — уникальный идентификатор сообщения, строка;
    // from — автор сообщения, объект;
    // type — тип сообщения, строка, варианты значений: response, message, typing;
    // time — время публикации сообщения, строка;
    // text — текст сообщения, строка, может отсутствовать.
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>


    );
}

Response.propTypes = {
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


export default Response