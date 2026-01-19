import { create } from "zustand";


export const UseApi = create(set => ({
    response: "",
    chat: [],
    apiresponse: async (userInput) => {
        const API_KEY = import.meta.env.VITE_GEMINII_KEY;
        const GEMINI_URL =
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
        const respons = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: userInput
                    }]
                }]
            })
        });
        const res = await respons.json();
        const Output = res.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log(res);
        // console.log(res?.candidates?.[0]?.content?.parts?.[0]?.text);
        console.log(Output);
        set(state => ({
            response: Output,
            chat: [...state.chat,
            {
                user: userInput,
                bot: Output
            }
            ]
        }))
    }
}))