"use client"

import React, { useEffect, useState } from "react";
import { Chat } from "@/types/Chat";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { v4 as uuidv4 } from "uuid";
import { SidebarButton } from "@/components/SidebarButton";
import { SideBarChatButton } from "@/components/SideBarChatButton";

const modelIA = [
    { value: "OPENIA", label: "CHAT GPT" },
    { value: "GEMMA2", label: "Google Gemma 2" },
    { value: "LLAMA3", label: "Meta Llama 3" },
    { value: "MISTRAL", label: "MISTRAL" },
    { value: "NEURALCHAT", label: "NEURAL CHAT" },
];

const Page = () => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [chatList, setChatList] = useState<Chat[]>([]);
    const [chatActiveId, setChatActiveId] = useState<string>('');
    const [chatActive, setChatActive] = useState<Chat>();
    const [GargidLoading, setGargidLoading] = useState(false);


    useEffect(() => {
        setChatActive(chatList.find(item => item.id === chatActiveId));
    }, [chatActiveId, chatList]);

    useEffect(() => {
        if (GargidLoading) getGargidResponse();
    }, [GargidLoading]);

    const openSidebar = () => setSidebarOpened(true);

    const closeSidebar = () => {
        setSidebarOpened(false);
    };

    const getGargidResponse = () => {
        // Simulação de requisição para API
        setTimeout(() => {
            let chatListClone = [...chatList];
            let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
            if (chatIndex > -1) {
                chatListClone[chatIndex].messages.push({
                    id: uuidv4(),
                    author: "gargid",
                    body: 'Resposta do GARGID :)'
                });
            }
            setChatList(chatListClone);
            setGargidLoading(false);
        }, 2000);
    };

    const handleClearConversation = () => {
        if (GargidLoading) return;
        setChatActiveId('');
        setChatList([]);
    };

    const handleNewChat = () => {
        if (GargidLoading) return;
        setChatActiveId('');
        closeSidebar();
    };

    const handleSelectChat = () => {
        // Implemente a lógica para selecionar um chat
    };

    const handleDeleteChat = () => {
        // Implemente a lógica para deletar um chat
    };

    const handleEditChat = () => {
        // Implemente a lógica para editar um chat
    };



    const handleSendMessage = (message: string) => {
        if (!chatActiveId) {
            // Cria um novo chat
            let newChatId = uuidv4();
            setChatList([{
                id: newChatId,
                title: message,
                messages: [
                    { id: uuidv4(), author: 'eu', body: message }
                ]
            }, ...chatList]);
            setChatActiveId(newChatId);
        } else {
            // Atualiza um chat existente
            let chatListClone = [...chatList];
            let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
            chatListClone[chatIndex].messages.push({
                id: uuidv4(),
                author: 'eu',
                body: message
            });
            setChatList(chatListClone);
        }
        setGargidLoading(true);
    };

    return (
        <main className="flex min-h-screen bg-gargid-cinza">
            <Sidebar open={sidebarOpened} onClose={closeSidebar} onClear={handleClearConversation} onNewChat={handleNewChat}>
                {chatList.map(item => (
                    <SideBarChatButton
                        key={item.id}
                        chatItem={item}
                        active={item.id === chatActiveId}
                        onClick={handleSelectChat}
                        onDelete={handleDeleteChat}
                        onEdit={handleEditChat}
                    />
                ))}
            </Sidebar>

            <section className="flex flex-col w-full">
                <Header
                    openSidebarClick={openSidebar}
                    title={chatActive ? chatActive.title : 'Nova Conversa'}
                    newChatClick={handleNewChat}
                />





                <ChatArea
                    chat={chatActive}
                    loading={GargidLoading}
                />

                <Footer
                    onSendMessage={handleSendMessage}
                    disabled={GargidLoading}
                />
            </section>
        </main>
    );
};

export default Page;
