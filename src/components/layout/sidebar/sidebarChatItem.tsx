import { FC } from "react";

interface IProps {
    from: string,
    message: string
}

export const SidebarChatItem: FC<IProps> = ({ from, message }) => {
    return (
        <div className="w-full flex item-center gap-2 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-blue-800 text-2xl font-bold rounded-md">
                {from.charAt(0)}
            </div>
            <div className="flex flex-col">
                <h3 className="text-elipsis text-gray-600 font-semibold text-sm">{from}</h3>
                <p className="md:max-w-40  block overflow-hidden text-ellipsis whitespace-nowrap text-gray-400 font-medium text-xs">{message}</p>
            </div>
        </div>
    );
}
