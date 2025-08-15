"use client";

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ChatbotContextType {
    prompt: string;
    setPrompt: (value: string) => void;
    response: string;
    setResponse: (value: string) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    conversationId: string | null;
    setConversationId: (value: string | null) => void;
    hitLLM: (prompt: string) => Promise<void>;
}

interface ChatbotContextProviderProps {
    children: ReactNode;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function useChatbotContext() {
    const context = useContext(ChatbotContext);
    if (context === undefined) {
        throw new Error('useChatbotContext must be used within an ChatbotContextProvider');
    }
    return context;
} 

export function ChatbotContextProvider({ children }: ChatbotContextProviderProps) {
    const [prompt, setPrompt] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [conversationId, setConversationId] = useState<string | null>(null);

    function sanitizeInput(inputPrompt: string){
        console.log(`sanitize prompt input : ${inputPrompt}`)
        if(inputPrompt === '') throw new Error("please enter prompt")
    }
    
    async function hitLLM(inputPrompt: string): Promise<void> {
        try {
            sanitizeInput(inputPrompt);
            setIsLoading(true);
            setResponse('');
            
            const requestBody = {
                prompt: inputPrompt,
                conversation_id: conversationId,
                system_prompt: null
            };

            const response = await fetch('http://localhost:8000/api/v1/llm/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.status === 'success') {
                setResponse(data.response);
                setConversationId(data.conversation_id);
            } else {
                throw new Error(data.message || 'Unknown error occurred');
            }
        } catch (error) {
            console.error('Error calling LLM API:', error);
            setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
        } finally {
            setIsLoading(false);
        }
    }

    const value = { 
        prompt, 
        setPrompt, 
        response, 
        setResponse, 
        isLoading, 
        setIsLoading, 
        conversationId, 
        setConversationId, 
        hitLLM 
    };

    return (
        <ChatbotContext.Provider value={value}>
            {children}
        </ChatbotContext.Provider>
    );
}

