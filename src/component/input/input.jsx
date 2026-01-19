import { useState } from 'react'
import { UseApi } from '../../store/store'
import Chat from '../chat/chat'

function Input() {
    const [userinput, setuserInput] = useState('');
    const api = UseApi(state => state.apiresponse);
    function responding() {

        api(userinput)
    }
    return (
        <div className="min-h-full">
            <h1 className="text-2xl relative top-1 left-1/2 min-h-full">ChatBot</h1>
            <div className=" w-full flex flex-row justify-center m-2 min-h-full ">
                <div className=" flex justify-center items-center w-1/2 fixed bottom-5">
                    <input className="w-full border-solid border-2 rounded-2xl bg-gray-400" type="text" onChange={event => setuserInput(event.target.value)} placeholder="Describe what to know" />
                    <button onClick={responding} className="bg-white text-black rounded-lg  flex px-2 py-0.5 cursor-pointer">Ask</button>
                </div>
                <div className="overflow-auto flex flex-col">
                    <Chat />
                </div>
            </div>
        </div>
    )
}
export default Input