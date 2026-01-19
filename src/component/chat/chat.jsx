import { UseApi } from '../../store/store'

function Chat() {
    const chat = UseApi(state => state.chat);
    // console.log(chat);

    return (
        <div className="absolute left-[25%] right-[25%] w-1/2">
            <ul>
                {
                    chat && chat?.length > 0 ? chat?.map(item => {
                        return (
                            <li key={item.user}>
                                <p>{item.user}</p>
                                <p>{item.bot}</p>
                            </li>
                        )
                    }) : (<p>Ask</p>)
                }
            </ul>
        </div>
    )
}
export default Chat