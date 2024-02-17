import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GrSend } from "react-icons/gr";

function TemplatePointers() {
    const [userInput, setUserInput] = useState("");
    const [generatedContent, setGeneratedContent] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);

    const API_KEY = "AIzaSyDnH1XbThGaEQN7-QP73Uxv26WfTHGFmh4";
    const genAI = new GoogleGenerativeAI(API_KEY);

    async function generateContent(prompt) {
        setIsGenerating(true);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setGeneratedContent(text);
        } catch (error) {
            console.error("Error generating content:", error.message);
        } finally {
            setIsGenerating(false);
        }
    }

    const handleSendMessage = () => {
        if (userInput.trim() !== "") {
            const newChat = { role: "user", content: userInput };
            setChatHistory((prevChat) => [...prevChat, newChat]);

            generateContent(userInput);
            setUserInput("");
        }
    };

    useEffect(() => {
        if (generatedContent.trim() !== "") {
            const newChat = { role: "ai", content: generatedContent };
            setChatHistory((prevChat) => [...prevChat, newChat]);
        }
    }, [generatedContent]);

    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="overflow-auto flex-grow">
                {chatHistory.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat ${chat.role === "ai" ? "chat-start" : "chat-end"
                            }`}
                    >
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={`${chat.role} Avatar`}
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            {chat.role === "ai" ? "AI" : "User"}
                        </div>
                        <div className="chat-bubble">{chat.content}</div>
                        <div className="chat-footer opacity-50">
                            {chat.role === "ai" ? "Delivered" : "Sent"}
                        </div>
                    </div>
                ))}
                {isGenerating && (
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="AI Avatar"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <div className="chat-header">AI</div>
                        <div className="chat-bubble">Generating...</div>
                        <div className="chat-footer opacity-50">Delivering</div>
                    </div>
                )}
            </div>

            <div className="fixed bottom-0 left-0 right-0 flex items-center">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-grow p-2 border rounded-l-md"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700"
                    style={{ fontSize: '27px' }}
                >
                    <GrSend />
                </button>
            </div>
        </div>
    );
}

export default TemplatePointers;
