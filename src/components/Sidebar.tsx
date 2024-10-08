import React, {ReactNode} from "react";
import {SidebarButton} from "@/components/SidebarButton";
import IconsDelete from "@/components/icons/iconsDelete";
import IconClose from "@/components/icons/iconsClose";
import IconsAdd from "@/components/icons/iconsAdd";


type Props = {
    children: ReactNode,
    open: boolean,
    onClose: () => void,
    onClear: () => void,
    onNewChat: () => void
}
export const Sidebar = ({ open, onClose, onNewChat, children, onClear }: Props) => {
    return (
        <section className={
            `fixed left-0 top-0 bottom-0 text-white ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`
        }>

            <div className={
                `transition-all duration-200 flex h-screen ${open ? 'ml-0' : '-ml-96'} md:ml-0`
            }>

                <div className="flex-col w-64 p-2 bg-gray-900 flex-grow flex flex-col justify-between">

                    <div>
                        <div onClick={onNewChat} className="flex items-center p-3 rounded-md
                        text-sm cursor-pointer border border-white/20 hover:bg-gray-500/20">

                            <IconsAdd width={16} height={16} className={"mr-3"} />
                            Iniciar Conversa

                        </div>

                        <div className="border-t border-gray-700 my-2"></div> {/* Linha separadora */}

                        <nav className="flex-1 pt-2 overflow-y-auto">
                            {/* Utilize a classe abaixo para ocupar todo o espaço vertical disponível */}
                            <div className="h-full">
                                {children}
                            </div>
                        </nav>
                    </div>

                    <div className="border-t border-gray-700 pt-2">
                        <SidebarButton
                            icon={<IconsDelete width={24} height={24} />}
                            label="Limpar todas as conversas"
                            onClick={onClear}
                        />
                    </div>

                </div>

                <div onClick={onClose} className="flex justify-center items-center
                 w-10 h-10 cursor-pointer md:hidden">
                    <IconClose width={24} height={24} />
                </div>
            </div>
        </section>
    )
}
