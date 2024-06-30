import IconsGargid from "@/components/icons/IconsGargid";

export const ChatMessageLoading = () =>{
    return(
        <div className="py-5 placeholder-gray-650 ">
            <div className="max-w-4xl m-auto flex items-center">
                <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0
                rounded bg-blue-700">
                    <IconsGargid width={24} height={24} className=''/>
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap ">
                    <div className="w-2 h-4 bg-slate-300c ">
                    </div>
                </div>
            </div>
        </div>
    );
}