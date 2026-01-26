import { useState } from 'react'
import { UseApi } from '../../store/store'
import Chat from '../chat/chat'
import { useRef, useEffect } from 'react'

function Input() {
    const [userinput, setuserInput] = useState('');
    const foc = useRef();
    const api = UseApi(state => state.apiresponse);
    function responding() {
        // const user = userinput;
        api(userinput);
        setuserInput("");
        console.log(userinput);

    }
    useEffect(() => {
        foc.current.focus();
    }, [])

    return (
        <div className="min-h-full">
            <div className="flex justify-center items-center fixed bg-black z-10 h-[50px] left-0 right-0 top-0">
                <h1 className="text-2xl fixed top-2 left-1/2 ">ChatBot</h1>
            </div>
            <div className=" w-full  m-2 min-h-full relative top-[60px] ">
                <div>
                    <Chat />
                </div>
                <div className=" flex justify-between items-center w-1/2 fixed bottom-5 left-[25%] right-[25%] border-solid border-2 rounded-4xl pr-2 py-2  bg-gray-600 h-15 border-transparent">
                    <input ref={foc} name="question" id="question" className="w-[80%] border-0 rounded-3xl border-transparent h-full px-2 outline-none focus:outline-none focus:ring-0 focus:border-none m-5" type="text" value={userinput} onChange={event => setuserInput(event.target.value)} placeholder="Describe what to know" onKeyDown={e => {
                        if (e.key === 'Enter') { responding() }
                    }} />
                    <button onClick={responding} className="bg-white font-bold text-3xl text-black rounded-4xl flex px-3  cursor-pointer">↑</button>
                </div>
            </div>
        </div>
    )
}
export default Input