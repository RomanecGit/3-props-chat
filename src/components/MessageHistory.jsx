import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({list}) {
    //если список сообщений пустой - не выводим ничего
    if (!list.length)
        return;

    return (
        <ul>
            {
                list.map(message => {
                    if (message.type === "response")
                        return <Response key={message.id} from={message.from} message={message} />
                    else if (message.type === "typing")
                        return <Typing key={message.id} from={message.from} message={message} />
                    else
                        return <Message key={message.id} from={message.from} message={message} />
                })
            }
        </ul>
    );
}

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
};

MessageHistory.defaultProps = {
    list: [],
}

export default MessageHistory