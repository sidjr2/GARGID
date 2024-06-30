import { Chat } from "@/types/Chat";
import {ChatPlaceHolder} from "@/components/ChatPlaceHolder";
import {ChatMessageItem} from "@/components/ChatMessageItem";
import {ChatMessageLoading} from "@/components/ChatMessageLoading";

type Props = {
    chat : Chat | undefined;
    loading: boolean;
}



export const ChatArea=({chat, loading}:Props)=>{
    return(
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceHolder />}
            {chat && chat.messages.map(item=>(
                <ChatMessageItem
                    key={item.id}
                    item={item}
                />
            ))}
            {loading && <ChatMessageLoading/>}
        </section>
    );
}