import {ChatMessage} from "@/types/ChatMessage";
import IconsUser from "@/components/icons/IconsUser";
import IconsGargid from "@/components/icons/IconsGargid";

type Props = {
    item: ChatMessage;
}
export const ChatMessageItem =({item}:Props) =>{
    return(
        <div className={`py-5 ${item.author === 'gargid' && 'bg-gray-600/50'}`}>
            <div className="max-w-4xl m-auto flex ">
                <div className={`h-10 w-10 flex justify-center items-center mx-4 md:ml-0 rounded ${
                    item.author === "gargid" ? 'bg-blue-700' : 'bg-yellow-400'
                }`}>
                    {item.author === "eu" && <IconsUser width={24} height={24} />}
                    {item.author === "gargid" && <IconsGargid width={24} height={24} />}
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    {item.body}
                </div>

            </div>
        </div>
    );
}