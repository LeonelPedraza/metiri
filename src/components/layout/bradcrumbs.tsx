import { Update } from '@mui/icons-material'

const lastUpdate = '12:05'

export const Breadcrumbs = () => {
    return (
        <div className="w-full flex items-center justify-between bg-bradcrumbs px-2 md:px-8 py-1">
            <div>
                <span className="text-sm font-medium">
                    Home/Dashboard
                </span>
            </div>
            <div className='flex gap-2 items-center text-sm font-medium text-'>
                <Update color='disabled'/>
                <span>
                    Ultima actualización: {lastUpdate}
                </span>
            </div>
        </div>
    );
}
