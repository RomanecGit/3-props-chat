import PropTypes from 'prop-types';

function Typing({from, message}) {
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
            <i className="fa fa-circle online"></i>
            <i className="fa fa-circle online typing1"></i>
            <i className="fa fa-circle online typing2"></i>
        </li>
    );
}

Typing.propTypes = {
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


export default Typing