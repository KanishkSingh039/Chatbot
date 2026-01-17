const { create } = require("zustand");


const bot = create(set => ({
    response: "",
    apiresponse: async () => {
        const [userInput, setuserInput] = useState('');
        const API_KEY = import.meta.env.VITE_GEMINII_KEY;
        const GEMINI_URL =
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
        const response = await fetch(GEMINI_URL, {
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
        const res = await response.json();
        set({
        })
    }
}))