import {Chat} from "@/types/Chat";
import {strict} from "node:assert";
import {useState} from "react";
import IconsChat from "@/components/icons/IconsChat";
import IconsDelete from "@/components/icons/iconsDelete";
import {Input} from "postcss";
import IconsEdit from "@/components/iconsEdit";
import IconsSave from "@/components/icons/iconsSave";

type Props ={
    chatItem : Chat;
    active : boolean;
    onClick : (id: string) => void;
    onDelete : (id: string) => void;
    onEdit : (id: string, newTitle: string) => void;
}

export const SideBarChatButton= ({chatItem, active, onClick, onDelete, onEdit}:Props) => {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [inputTitle, setInputTitle] = useState(chatItem.title);

    const handleClickButton  = () => {
        if(!deleting || !editing){
            onClick(chatItem.id)
        }
    }

    const handleConfirmButton = () => {
        if(deleting) onDelete(chatItem.id);

        if(editing && inputTitle.trim() !== ''){
            onEdit(chatItem.id, inputTitle.trim());
        }

        setDeleting(false);
        setEditing(false);
    }

    const handleCancelButton  = () => {
        setDeleting(false);
        setEditing(false);
    }
    return(
        <div onClick={handleClickButton} className={`flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/10
        ${active ? 'bg-gray-500/20': 'bg-transparent'} `}>
            <div className='mr-3'>
                {!deleting && <IconsChat width={16} height={16}/>}
                {deleting && <IconsDelete width={16} height={16}/> }
            </div>
            <div className="flex-1 text-sm overflow-x-hidden">
                {
                    editing &&
                    <input
                        className="w-full bg-transparent border border-blue-500"
                        value={inputTitle}
                        onChange={e=>setInputTitle(e.target.value)}
                    />
                }
                {
                    !editing &&
                    <div className="border border-transparent truncate">
                        {!deleting && chatItem.title}
                        {deleting && `Delete "${chatItem.title}"`}

                    </div>
                }
            </div>

            {active && !deleting && !editing &&
                <div className="flex">
                    <div onClick={() => setEditing(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconsEdit width={16} height={16}/>

                    </div>
                    <div onClick={() => setDeleting(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconsDelete width={16} height={16}/>
                    </div>
                </div>
            }

            {
                deleting || editing &&
                    <div className="flex">
                        <div onClick={handleConfirmButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <IconsSave width={16} height={16}/>

                        </div>
                        <div onClick={handleCancelButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <IconsDelete width={16} height={16}/>
                        </div>
                    </div>
            }
        </div>
    );
}