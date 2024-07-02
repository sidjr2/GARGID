import React, {ReactNode, useState} from "react";
import IconMenu from "@/components/icons/iconsMenu";
import IconsAdd from "@/components/icons/iconsAdd";
import Select from "react-select"; // Importe o componente Select do react-select

type Props = {
    openSidebarClick  :()=>void;
    title: string;
    newChatClick:() =>void

}

export const Header = ({openSidebarClick,title,newChatClick } : Props )=>{
    const [selectedOption, setSelectedOption] = useState(null);
    return(
        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">
            <div onClick={openSidebarClick}>
                <IconMenu width={24} height={24}/>
            </div>
            <div className="mx-2 truncate">{title}</div>
            <div onClick={newChatClick}>
                <IconsAdd width={24} height={24}/>
            </div>
        </header>
    );
}