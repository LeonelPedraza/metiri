import { FC, ReactNode } from "react";

interface IProps {
    title?: string | undefined,
    children: ReactNode
}

export const Box: FC<IProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-4 w-full p-4 rounded-md shadow-md">
            {
                title &&
                <div className="w-full flex items-center justify-center">
                    <h1 className="uppercase font-semibold text-xl text-blue-800">{title}</h1>
                </div>
            }
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
