import IconsEnter from "@/components/icons/iconsEnter";
import {useState, KeyboardEvent, useRef, useEffect} from "react";

type Props ={
    disabled: boolean;
    onSend: (message:string)=> void;
}
export const ChatMessageInput = ({disabled, onSend}:Props) => {
    const [text, setText] = useState('');
    const textEl = useRef<HTMLTextAreaElement>(null)

    useEffect(()=>{
        if(textEl.current){
            textEl.current.style.height = '0px';
            let scrollHeight = textEl.current.scrollHeight;
            textEl.current.style.height = scrollHeight + 'px';
        }
    }, [text,textEl]);

    const handleSendMenssage= () => {
        if(!disabled && text.trim() !== ''){
            onSend(text);
            setText('');
        }
    }

    const handleTextKeyUp= (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.code.toLowerCase() === 'enter' && !event.shiftKey){
            event.preventDefault();
            handleSendMenssage();
        }
    }


    return(
        <div className={`flex border-gray-800/50 bg-gargid-cinza-claro p-2 rounded-md 
        ${disabled && 'opacity-50'}`}>
            <textarea
                ref={textEl}
                className="flex-1 border-0 bg-transparent resize-none outline-none
                h-7 max-h-48 overflow-y-auto"
                placeholder="Como o GARGID pode te ajudar?"
                value={text}
                onChange={e=>setText(e.target.value)}
                onKeyUp={handleTextKeyUp}
                disabled={disabled}
            >

            </textarea>
            <div onClick={handleSendMenssage} className={`self-end p-1 cursor-pointer rounded
            ${text.length ? 'opacity-100 hover:bg-black/20': 'opacity-20'}`}>
                <IconsEnter width={24} height={24}/>
            </div>
        </div>
    );
}