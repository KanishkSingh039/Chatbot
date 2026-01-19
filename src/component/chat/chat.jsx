import { UseApi } from '../../store/store'

function Chat() {
    const chat = UseApi(state => state.chat);
    // console.log(chat);

    return (
        <div className="absolute left-[25%] right-[25%] w-1/2">
            <ul className="pb-[100px] ">
                {
                    chat && chat?.length > 0 ? chat?.map(item => {
                        return (
                            <li key={item.user} className="flex flex-col gap-2 mt-5 ">
                                <div className="flex justify-end items-center">
                                    <p className="border rounded-2xl border-black bg-gray-700 rounded-tr-none h-[30px] w-fit  px-2">{item.user}</p>
                                </div>
                                <div>
                                    <p >{item.bot}</p>
                                </div>
                            </li>
                        )
                    }) : (<p>Ask</p>)
                }
            </ul>
        </div>
    )
}
export default Chat